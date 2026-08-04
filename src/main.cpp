#include <filesystem>
#include <iostream>
#include <fstream>
#include <md4c.h>
#include <md4c-html.h>


const std::string MD_FILE_DIRECTORY = "../md_files";
const std::string PUBLIC_DIRECTORY = "../../docs";


void html_output(const MD_CHAR* text, MD_SIZE size, void* userdata)
{
    auto* out = static_cast<std::string*>(userdata);
    out->append(text, size);
}

void create_directory(const std::string& directory_string) {
    if (!std::filesystem::exists(directory_string)) {
        std::cout << directory_string << " does not exist!\n" << std::endl;
        std::filesystem::create_directory(directory_string);
    }
}

bool write_html_file(const std::string& htmlOutput, const std::string& destination) {
    std::ofstream html_file(destination, std::ios::binary);
    if (!html_file.is_open()) {
        std::cout << "ERROR: Failed to open: " << destination << std::endl;
        return true;
    }

    const std::string header_html = R"(<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="styles.css">
  <meta charset="utf-8" />
  <title>Under Construction...</title>
  <link rel="icon" type="image/x-icon" href="/artifacts/favicon.png">
</head>
<body>
<div id="content-wrapper">
        )";

    html_file << header_html;
    html_file << htmlOutput;

    const std::string footer_html = R"(
</div>
</body>
</html>
        )";

    html_file << footer_html << std::endl;
    html_file.close();
    return false;
}

// By Tyler McHenry @ https://stackoverflow.com/a/2602060
std::string get_markdown_raw(const std::string& markdown_path) {
    std::ifstream t(markdown_path);
    std::string str;

    t.seekg(0, std::ios::end);
    str.reserve(t.tellg());
    t.seekg(0, std::ios::beg);

    str.assign((std::istreambuf_iterator<char>(t)),
               std::istreambuf_iterator<char>());
    return str;
}

bool build_html_in_directory(const std::string& directory_path) {
    for (const auto& entry : std::filesystem::directory_iterator(directory_path)) {
        std::string markdown_path(entry.path().string());
        std::cout << "Current file: " << markdown_path << std::endl;

        if (entry.is_directory()) {

            const std::string entry_string = entry.path().string();
            const std::size_t folder_index = entry.path().string().find(MD_FILE_DIRECTORY);
            const std::string new_folder_path = entry_string.substr(folder_index + MD_FILE_DIRECTORY.length());
            const std::string new_folder_destination = PUBLIC_DIRECTORY + new_folder_path;

            create_directory(new_folder_destination);
            build_html_in_directory(markdown_path);
            return false;
        }

        std::string str = get_markdown_raw(markdown_path);

        std::string htmlOutput;
        int result = md_html(
            str.c_str(),
            str.size(),
            html_output,
            &htmlOutput,
            0,
            0
        );

        if (result != 0) {
            std::cout << "ERROR: md_html returned status 1" << std::endl;
            return true;
        }

        // File Cleaning
        std::string file_name;
        file_name = markdown_path.erase(0, directory_path.length() + 1);
        size_t dot_location = file_name.find('.');
        file_name = file_name.substr(0, dot_location);
        file_name.append(".html");

        // Destination path building
        std::size_t md_directory_index = directory_path.find(MD_FILE_DIRECTORY);
        std::string folder_path = directory_path.substr(md_directory_index + MD_FILE_DIRECTORY.length());
        std::string destination = PUBLIC_DIRECTORY + folder_path;
        destination.append("/").append(file_name);

        std::cout << "Writing to: " << destination << std::endl;

        if (write_html_file(htmlOutput, destination)) {
            return true;
        }
    }
    return false;
}

int main() {
    create_directory(MD_FILE_DIRECTORY);
    create_directory(PUBLIC_DIRECTORY);

    if (build_html_in_directory(MD_FILE_DIRECTORY)) {
        return 1;
    }
    std::cout << "done!" << std::endl;
    return 0;

}

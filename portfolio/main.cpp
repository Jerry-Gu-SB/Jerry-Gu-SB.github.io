#include <filesystem>
#include <iostream>
#include <fstream>
#include <md4c.h>
#include <md4c-html.h>

void html_output(const MD_CHAR* text, MD_SIZE size, void* userdata)
{
    std::string* out = static_cast<std::string*>(userdata);
    out->append(text, size);
}

int main() {

    const std::string MD_FILE_DIRECTORY = "../md_files";
    const std::string PUBLIC_DIRECTORY = "../../docs";


    if (!std::filesystem::exists(MD_FILE_DIRECTORY)) {
        std::cout << MD_FILE_DIRECTORY << " does not exist!\n" << std::endl;
        std::filesystem::create_directory(MD_FILE_DIRECTORY);
    }

    if (!std::filesystem::exists(PUBLIC_DIRECTORY)) {
        std::cout << PUBLIC_DIRECTORY << " does not exist!\n" << std::endl;
        std::filesystem::create_directory(PUBLIC_DIRECTORY);
    }

    for (const auto& entry : std::filesystem::directory_iterator(MD_FILE_DIRECTORY)) {
        std::string markdown_path(entry.path().string());
        std::cout << "Current file: " << markdown_path << std::endl;

        // By Tyler McHenry @ https://stackoverflow.com/a/2602060
        std::ifstream t(markdown_path);
        std::string str;

        t.seekg(0, std::ios::end);
        str.reserve(t.tellg());
        t.seekg(0, std::ios::beg);

        str.assign((std::istreambuf_iterator<char>(t)),
                    std::istreambuf_iterator<char>());


        std::string htmlOutput;
        std::ostringstream htmlOutputString;
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
            return 1;
        }

        std::string file_name = markdown_path.erase(0, MD_FILE_DIRECTORY.length() + 1);
        size_t dot_location = file_name.find('.');
        file_name = file_name.substr(0, dot_location);
        std::cout << "Cleaned file name: " << file_name << std::endl;
        file_name.append(".html");

        std::string destination = PUBLIC_DIRECTORY;
        destination.append("/").append(file_name);
        std::cout << destination << std::endl;

        std::ofstream html_file(destination, std::ios::binary);
        if (!html_file.is_open()) {
            std::cout << "ERROR: Failed to open: " << destination << std::endl;
            return 1;
        }
        std::string header_html = R"(<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="styles.css">
  <meta charset="utf-8" />
  <title>Under Construction...</title>
  <link rel="icon" type="image/x-icon" href="/artifacts/SpiralBiscuit.jpg">
</head>
<body>
<div id="content-wrapper">
        )";
        html_file << header_html;
        html_file << htmlOutput;

        std::string footer_html = R"(
</div>
</body>
</html>
        )";
        html_file << footer_html << std::endl;
        html_file.close();
    }
    std::cout << "done!" << std::endl;
    return 0;

}

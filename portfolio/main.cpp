#include <filesystem>
#include <iostream>
#include <fstream>
#include "maddy/parser.h"

int main() {

    const std::string MD_FILE_DIRECTORY = "md_files";
    const std::string PUBLIC_DIRECTORY = "public";

    auto parser = std::make_shared<maddy::Parser>();


    if (!std::filesystem::exists(MD_FILE_DIRECTORY)) {
        std::cout << MD_FILE_DIRECTORY << " does not exist!\n" << std::endl;
        std::filesystem::create_directory(MD_FILE_DIRECTORY);
    }

    for (const auto& entry : std::filesystem::directory_iterator(MD_FILE_DIRECTORY)) {
        std::string markdown_path(entry.path().string());
        std::cout << "Current file: " << markdown_path << std::endl;
        std::ifstream raw_md_file(markdown_path, std::ios::binary);

        if (!raw_md_file.is_open()) {
            std::cout << "ERROR: Failed to open: " << markdown_path << std::endl;
            return 1;
        }

        std::string htmlOutput = parser->Parse(raw_md_file);
        std::cout << htmlOutput << std::endl;

        std::string file_name = markdown_path.erase(0, MD_FILE_DIRECTORY.length() + 1);
        size_t dot_location = file_name.find('.');
        file_name = file_name.substr(0, dot_location);
        std::cout << "Cleaned file name: " << file_name << std::endl;
        file_name.append(".html");

        std::string destination = PUBLIC_DIRECTORY;
        destination.append("/").append(file_name);
        std::cout << destination << std::endl;

        std::filesystem::create_directory(PUBLIC_DIRECTORY);

        std::ofstream html_file(destination, std::ios::binary);
        if (!html_file.is_open()) {
            std::cout << "ERROR: Failed to open: " << destination << std::endl;
            return 1;
        }
        html_file << htmlOutput << std::endl;
        html_file.close();
    }



    std::cout << "done!" << std::endl;
    return 0;

}

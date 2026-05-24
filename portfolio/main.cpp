#include <filesystem>
#include <iostream>
// #include "maddy/parser.h"

using recursive_directory_iterator = std::filesystem::recursive_directory_iterator;



int main() {

    const auto MD_FILE_DIRECTORY = "yipppeee";

    if (!std::filesystem::exists(MD_FILE_DIRECTORY)) {
        std::cout << MD_FILE_DIRECTORY << " does not exist!\n" << std::endl;
        std::filesystem::create_directory(MD_FILE_DIRECTORY);
    }

    for (const auto& entry : std::filesystem::directory_iterator(MD_FILE_DIRECTORY)) {

    }

}

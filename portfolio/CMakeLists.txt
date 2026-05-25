cmake_minimum_required(VERSION 4.1)
project(StaticSiteGenerator)

set(CMAKE_CXX_STANDARD 20)

# Allow FetchContent_Populate in CMake 4.x
if(POLICY CMP0169)
    cmake_policy(SET CMP0169 OLD)
endif()

include(FetchContent)

# Declare the download payload
FetchContent_Declare(
        maddy_download
        URL https://github.com/progsource/maddy/releases/download/1.6.0/maddy-src.zip
)

# Extract files ONLY. Do NOT process maddy's broken CMakeLists.txt.
FetchContent_GetProperties(maddy_download)
if(NOT maddy_download_POPULATED)
    FetchContent_Populate(maddy_download)
endif()

# Create a clean, virtual target for your executable to link against
add_library(maddy_lib INTERFACE)
target_include_directories(maddy_lib INTERFACE ${maddy_download_SOURCE_DIR}/include)

# Define and link your executable target
add_executable(StaticSiteGenerator main.cpp)
target_link_libraries(StaticSiteGenerator PRIVATE maddy_lib)


add_custom_command(
        TARGET StaticSiteGenerator POST_BUILD
        COMMAND ${CMAKE_COMMAND} -E copy_directory
        "${CMAKE_CURRENT_SOURCE_DIR}/md_files"
        "${CMAKE_CURRENT_BINARY_DIR}/md_files"
        COMMENT "Copying markdown files directory to build output..."
)

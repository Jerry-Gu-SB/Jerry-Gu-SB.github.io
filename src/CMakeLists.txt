cmake_minimum_required(VERSION 4.1)
project(StaticSiteGenerator)

set(CMAKE_CXX_STANDARD 20)

include(FetchContent)

FetchContent_Declare(
        md4c
        GIT_REPOSITORY https://github.com/mity/md4c.git
        GIT_TAG release-0.5.2
)

FetchContent_MakeAvailable(md4c)

add_executable(${PROJECT_NAME} main.cpp)
target_compile_options(md4c PRIVATE -w)
target_compile_options(md4c-html PRIVATE -w)
target_link_libraries(${PROJECT_NAME}
        PRIVATE
        md4c
        md4c-html
)
target_include_directories(${PROJECT_NAME} PRIVATE ${md4c_SOURCE_DIR}/src)
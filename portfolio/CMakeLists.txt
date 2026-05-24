cmake_minimum_required(VERSION 4.1)
project(StaticSiteGenerator)

set(CMAKE_CXX_STANDARD 20)
#
#include(FetchContent)
#FetchContent_Declare(
#        maddy
#        URL https://github.com/progsource/maddy/.../maddy-src.zip
#)
#FetchContent_MakeAvailable(maddy)

add_executable(StaticSiteGenerator main.cpp)

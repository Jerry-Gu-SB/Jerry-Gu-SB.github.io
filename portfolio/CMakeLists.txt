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

# ============================================= COPY FILES ============================================

function(copy_md_files_to_target_dir target)
    add_custom_command(
            TARGET ${target} POST_BUILD
            COMMAND ${CMAKE_COMMAND} -E copy_directory
            "$<TARGET_PROPERTY:${target},SOURCE_DIR>/md_files"
            "$<TARGET_PROPERTY:${target},BINARY_DIR>/md_files"
    )
endfunction()
copy_md_files_to_target_dir(${PROJECT_NAME})

# By tamas.kenez - https://stackoverflow.com/a/34800667
configure_file(
        styles.css
        ${CMAKE_CURRENT_BINARY_DIR}/public/styles.css
        COPYONLY
)
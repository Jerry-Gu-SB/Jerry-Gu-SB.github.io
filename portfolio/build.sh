#!/bin/bash
rm -r cmake-build-debug
mkdir -p cmake-build-debug && cd cmake-build-debug
cmake ..
make
./StaticSiteGenerator
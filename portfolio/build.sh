#!/bin/bash
rm -fr cmake-build-debug
mkdir -p cmake-build-debug && cd cmake-build-debug
cmake ..
make
./StaticSiteGenerator
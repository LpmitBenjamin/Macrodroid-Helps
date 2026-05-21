#!/bin/bash

directory="/storage/emulated/0/Pictures/ScreenshotTouch/Screenshot"

latest_file=$(ls -t "$directory" | head -n 1)

echo "The latest file is: $latest_file"

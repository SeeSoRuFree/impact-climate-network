#!/bin/bash

# Copy profile images from material folder to public directory
SOURCE_DIR="/Users/seoyeongyu/Desktop/networkimapct-main/material/[2025 서밋] 참가자프로필 라운드 "
DEST_DIR="/Users/seoyeongyu/Desktop/networkimapct-main/public/2025-summit/speakers/round/"

# Create destination directory if it doesn't exist
mkdir -p "$DEST_DIR"

# Copy all image files
find "$SOURCE_DIR" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -exec cp {} "$DEST_DIR" \;

echo "Profile images copied successfully!"
ls -la "$DEST_DIR" | wc -l
echo "files copied to destination directory"
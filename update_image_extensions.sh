#!/bin/bash

# Update speakers.json to use .jpg extension instead of .png

echo "Updating speaker image paths from .png to .jpg..."

# Backup the original file
cp public/2025-summit/data/speakers.json public/2025-summit/data/speakers.json.backup.png

# Replace all .png extensions with .jpg in the JSON file
sed -i '' 's/\.png/\.jpg/g' public/2025-summit/data/speakers.json

echo "✓ Updated all image paths in speakers.json"
echo "✓ Backup saved as speakers.json.backup.png"

# Check if there are any remaining .png references
remaining=$(grep -c "\.png" public/2025-summit/data/speakers.json)
if [ "$remaining" -eq 0 ]; then
    echo "✓ All PNG references successfully updated to JPG"
else
    echo "⚠ Warning: Found $remaining remaining PNG references"
fi
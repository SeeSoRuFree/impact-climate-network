#!/bin/bash

# Generate favicons from the summit logo
SOURCE="public/images/summit_logo.png"
OUTPUT_DIR="public"

echo "Generating favicon files..."

# Create various favicon sizes
magick "$SOURCE" -resize 16x16 "$OUTPUT_DIR/favicon-16x16.png"
magick "$SOURCE" -resize 32x32 "$OUTPUT_DIR/favicon-32x32.png"
magick "$SOURCE" -resize 192x192 "$OUTPUT_DIR/android-chrome-192x192.png"
magick "$SOURCE" -resize 512x512 "$OUTPUT_DIR/android-chrome-512x512.png"
magick "$SOURCE" -resize 180x180 "$OUTPUT_DIR/apple-touch-icon.png"

# Create ICO file with multiple sizes
magick "$SOURCE" -resize 16x16 "$OUTPUT_DIR/favicon-16.png"
magick "$SOURCE" -resize 32x32 "$OUTPUT_DIR/favicon-32.png"
magick "$SOURCE" -resize 48x48 "$OUTPUT_DIR/favicon-48.png"
magick "$OUTPUT_DIR/favicon-16.png" "$OUTPUT_DIR/favicon-32.png" "$OUTPUT_DIR/favicon-48.png" "$OUTPUT_DIR/favicon.ico"

# Clean up temporary files
rm "$OUTPUT_DIR/favicon-16.png" "$OUTPUT_DIR/favicon-32.png" "$OUTPUT_DIR/favicon-48.png"

# Copy favicon.ico to app directory
cp "$OUTPUT_DIR/favicon.ico" "app/favicon.ico"

echo "✓ Favicon files generated successfully!"
echo "Files created:"
echo "  - favicon.ico"
echo "  - favicon-16x16.png"
echo "  - favicon-32x32.png"
echo "  - android-chrome-192x192.png"
echo "  - android-chrome-512x512.png"
echo "  - apple-touch-icon.png"
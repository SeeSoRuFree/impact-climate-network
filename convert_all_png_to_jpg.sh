#!/bin/bash

# Convert ALL PNG files to JPG for maximum compression
# Target: Under 1MB per file

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Directories
MATERIAL_DIR="material"
BACKUP_DIR="material_backup_png_original"
LOG_FILE="png_to_jpg_conversion_report.txt"

# Statistics
total_original_size=0
total_compressed_size=0
processed_count=0
skipped_count=0

echo -e "${BLUE}===========================================
PNG TO JPG CONVERSION - FULL BATCH
Target: All files under 1MB
===========================================${NC}\n"

# Create backup directory
echo -e "${YELLOW}Creating backup directory...${NC}"
mkdir -p "$BACKUP_DIR"

# Initialize log file
echo "===========================================
PNG TO JPG CONVERSION REPORT
Date: $(date)
===========================================" > "$LOG_FILE"

# Find all PNG files
echo -e "${YELLOW}Finding all PNG files...${NC}"
png_files=$(find "$MATERIAL_DIR" -name "*.png" -type f)
total_files=$(echo "$png_files" | wc -l | xargs)

echo -e "${GREEN}Found $total_files PNG files to process${NC}\n"

current=0

# Process each PNG file
while IFS= read -r file; do
    if [ -z "$file" ]; then
        continue
    fi
    
    ((current++))
    filename=$(basename "$file")
    dirname=$(dirname "$file")
    
    # Get original size
    original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
    original_size_mb=$(echo "scale=2; $original_size / 1048576" | bc)
    
    echo -e "${YELLOW}[$current/$total_files] Processing: $filename (${original_size_mb}MB)${NC}"
    
    # Create backup path
    backup_path="${BACKUP_DIR}/${file#$MATERIAL_DIR/}"
    backup_dir=$(dirname "$backup_path")
    mkdir -p "$backup_dir"
    
    # Copy original to backup
    cp "$file" "$backup_path"
    echo "  Backed up to: $backup_path"
    
    # Create JPG output path (same location, different extension)
    jpg_file="${file%.png}.jpg"
    temp_jpg="${jpg_file}.tmp"
    
    # Determine compression strategy based on original size
    if (( $(echo "$original_size_mb > 10" | bc -l) )); then
        # For very large files (>10MB), use aggressive compression
        echo "  Using aggressive compression (resize + quality 85%)..."
        magick "$file" -resize "1920x1920>" -quality 85 -background white -flatten "$temp_jpg"
    elif (( $(echo "$original_size_mb > 5" | bc -l) )); then
        # For large files (5-10MB), use moderate compression
        echo "  Using moderate compression (resize + quality 88%)..."
        magick "$file" -resize "2048x2048>" -quality 88 -background white -flatten "$temp_jpg"
    elif (( $(echo "$original_size_mb > 2" | bc -l) )); then
        # For medium files (2-5MB), use light compression
        echo "  Using light compression (quality 90%)..."
        magick "$file" -quality 90 -background white -flatten "$temp_jpg"
    else
        # For small files (<2MB), check if compression is needed
        echo "  File already small, using quality 92%..."
        magick "$file" -quality 92 -background white -flatten "$temp_jpg"
    fi
    
    # Check if conversion was successful
    if [ -f "$temp_jpg" ]; then
        compressed_size=$(stat -f%z "$temp_jpg" 2>/dev/null || stat -c%s "$temp_jpg" 2>/dev/null)
        compressed_size_mb=$(echo "scale=2; $compressed_size / 1048576" | bc)
        
        # If still over 1MB, try more aggressive compression
        if (( $(echo "$compressed_size_mb > 1.0" | bc -l) )); then
            echo "  Still ${compressed_size_mb}MB, applying maximum compression..."
            magick "$file" -resize "1280x1280>" -quality 82 -background white -flatten "$temp_jpg"
            compressed_size=$(stat -f%z "$temp_jpg" 2>/dev/null || stat -c%s "$temp_jpg" 2>/dev/null)
            compressed_size_mb=$(echo "scale=2; $compressed_size / 1048576" | bc)
        fi
        
        # Move temp file to final location
        mv "$temp_jpg" "$jpg_file"
        
        # Remove original PNG file
        rm "$file"
        
        # Calculate savings
        savings_mb=$(echo "scale=2; $original_size_mb - $compressed_size_mb" | bc)
        percentage=$(echo "scale=1; (($original_size - $compressed_size) * 100) / $original_size" | bc)
        
        echo -e "${GREEN}  ✓ Converted: ${original_size_mb}MB → ${compressed_size_mb}MB (saved ${savings_mb}MB, ${percentage}%)${NC}"
        
        # Check if under 1MB
        if (( $(echo "$compressed_size_mb <= 1.0" | bc -l) )); then
            echo -e "${GREEN}  ✓ SUCCESS: Under 1MB!${NC}"
        else
            echo -e "${YELLOW}  ⚠ Warning: Still ${compressed_size_mb}MB (over 1MB target)${NC}"
        fi
        
        # Log to report
        echo "$file: PNG ${original_size_mb}MB → JPG ${compressed_size_mb}MB (saved ${savings_mb}MB, ${percentage}%)" >> "$LOG_FILE"
        
        # Update statistics
        total_original_size=$((total_original_size + original_size))
        total_compressed_size=$((total_compressed_size + compressed_size))
        ((processed_count++))
    else
        echo -e "${RED}  ✗ Conversion failed${NC}"
        ((skipped_count++))
    fi
    
    echo ""
done <<< "$png_files"

# Calculate summary statistics
if [ "$processed_count" -gt 0 ]; then
    total_original_mb=$(echo "scale=2; $total_original_size / 1048576" | bc)
    total_compressed_mb=$(echo "scale=2; $total_compressed_size / 1048576" | bc)
    total_savings_mb=$(echo "scale=2; ($total_original_size - $total_compressed_size) / 1048576" | bc)
    total_percentage=$(echo "scale=1; (($total_original_size - $total_compressed_size) * 100) / $total_original_size" | bc)
    
    # Print summary
    echo -e "${BLUE}
===========================================
CONVERSION COMPLETE
===========================================
Processed: $processed_count PNG files
Skipped: $skipped_count files
Original total (PNG): ${total_original_mb}MB
Compressed total (JPG): ${total_compressed_mb}MB
Total savings: ${total_savings_mb}MB (${total_percentage}%)
===========================================

✓ Original PNG files backed up to: $BACKUP_DIR/
✓ All PNG files converted to JPG in: $MATERIAL_DIR/
✓ Detailed report saved to: $LOG_FILE
${NC}"
    
    # Add summary to log
    echo "
===========================================
SUMMARY
===========================================
Processed: $processed_count PNG files
Skipped: $skipped_count files
Original total (PNG): ${total_original_mb}MB
Compressed total (JPG): ${total_compressed_mb}MB
Total savings: ${total_savings_mb}MB (${total_percentage}%)
===========================================" >> "$LOG_FILE"
    
    # Check how many files are still over 1MB
    echo -e "${YELLOW}Checking files over 1MB...${NC}"
    over_1mb=$(find "$MATERIAL_DIR" -name "*.jpg" -size +1M | wc -l | xargs)
    echo -e "${GREEN}Files still over 1MB: $over_1mb${NC}"
else
    echo -e "${YELLOW}No files were processed.${NC}"
fi
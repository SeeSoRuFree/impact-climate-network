#!/bin/bash

# Set paths
MATERIAL_DIR="material"
BACKUP_DIR="material_backup_original"
LOG_FILE="compression_report.txt"

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Initialize counters and report
total_original_size=0
total_compressed_size=0
processed_count=0
skipped_count=0

# Create log file header
echo "===========================================
IMAGE COMPRESSION REPORT
Date: $(date)
===========================================" > "$LOG_FILE"

echo -e "${GREEN}Starting image compression process...${NC}"
echo -e "${YELLOW}Finding images larger than 2MB...${NC}\n"

# Find all images over 2MB
while IFS= read -r file; do
    # Get file size in bytes
    original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
    
    # Convert to MB for display
    original_size_mb=$(echo "scale=2; $original_size / 1048576" | bc)
    
    # Get file name for display
    filename=$(basename "$file")
    dirname=$(dirname "$file")
    
    echo -e "${YELLOW}Processing: $filename (${original_size_mb}MB)${NC}"
    
    # Create backup directory structure
    backup_path="${BACKUP_DIR}/${file#$MATERIAL_DIR/}"
    backup_dir=$(dirname "$backup_path")
    mkdir -p "$backup_dir"
    
    # Copy original to backup
    cp "$file" "$backup_path"
    
    # Determine file extension
    ext="${file##*.}"
    ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
    
    # Compress based on file type
    if [[ "$ext_lower" == "jpg" ]] || [[ "$ext_lower" == "jpeg" ]]; then
        # For JPEG: use quality 85% and strip metadata
        convert "$file" -quality 85 -strip -sampling-factor 4:2:0 -define jpeg:dct-method=float "$file.tmp"
    elif [[ "$ext_lower" == "png" ]]; then
        # For PNG: use convert with compression level
        convert "$file" -strip -quality 85 -define png:compression-level=9 "$file.tmp"
    elif [[ "$ext_lower" == "bmp" ]]; then
        # Convert BMP to compressed PNG
        new_file="${file%.*}.png"
        convert "$file" -strip -quality 85 -define png:compression-level=9 "$new_file"
        rm "$file"
        file="$new_file"
        echo "  Converted BMP to PNG: $new_file"
    elif [[ "$ext_lower" == "webp" ]]; then
        # For WebP: recompress with quality 85
        convert "$file" -quality 85 -strip "$file.tmp"
    else
        echo -e "${RED}  Skipping: Unsupported format${NC}"
        ((skipped_count++))
        continue
    fi
    
    # Check if compression was successful and resulted in smaller file
    if [ -f "$file.tmp" ]; then
        compressed_size=$(stat -f%z "$file.tmp" 2>/dev/null || stat -c%s "$file.tmp" 2>/dev/null)
        compressed_size_mb=$(echo "scale=2; $compressed_size / 1048576" | bc)
        
        # Only replace if compressed is smaller and under ~1.5MB
        if [ "$compressed_size" -lt "$original_size" ]; then
            mv "$file.tmp" "$file"
            
            # Calculate savings
            savings=$(echo "scale=2; ($original_size - $compressed_size) / 1048576" | bc)
            percentage=$(echo "scale=1; (($original_size - $compressed_size) * 100) / $original_size" | bc)
            
            echo -e "${GREEN}  ✓ Compressed: ${original_size_mb}MB → ${compressed_size_mb}MB (saved ${savings}MB, ${percentage}%)${NC}"
            
            # Log to report
            echo "$file: ${original_size_mb}MB → ${compressed_size_mb}MB (saved ${savings}MB, ${percentage}%)" >> "$LOG_FILE"
            
            # Update totals
            total_original_size=$((total_original_size + original_size))
            total_compressed_size=$((total_compressed_size + compressed_size))
            ((processed_count++))
        else
            rm "$file.tmp"
            echo -e "${YELLOW}  ⚠ Kept original (compression ineffective)${NC}"
            ((skipped_count++))
        fi
    else
        echo -e "${RED}  ✗ Compression failed${NC}"
        ((skipped_count++))
    fi
    
    echo ""
    
done < <(find "$MATERIAL_DIR" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.bmp" -o -name "*.webp" -o -name "*.JPG" -o -name "*.JPEG" -o -name "*.PNG" -o -name "*.BMP" -o -name "*.WEBP" \) -size +2M)

# Calculate total savings
if [ "$processed_count" -gt 0 ]; then
    total_original_mb=$(echo "scale=2; $total_original_size / 1048576" | bc)
    total_compressed_mb=$(echo "scale=2; $total_compressed_size / 1048576" | bc)
    total_savings_mb=$(echo "scale=2; ($total_original_size - $total_compressed_size) / 1048576" | bc)
    total_percentage=$(echo "scale=1; (($total_original_size - $total_compressed_size) * 100) / $total_original_size" | bc)
    
    # Print summary
    echo -e "${GREEN}
===========================================
COMPRESSION COMPLETE
===========================================
Processed: $processed_count files
Skipped: $skipped_count files
Original total: ${total_original_mb}MB
Compressed total: ${total_compressed_mb}MB
Total savings: ${total_savings_mb}MB (${total_percentage}%)
===========================================
${NC}"
    
    # Add summary to log
    echo "
===========================================
SUMMARY
===========================================
Processed: $processed_count files
Skipped: $skipped_count files
Original total: ${total_original_mb}MB
Compressed total: ${total_compressed_mb}MB
Total savings: ${total_savings_mb}MB (${total_percentage}%)
===========================================" >> "$LOG_FILE"
    
    echo -e "${GREEN}✓ Original files backed up to: $BACKUP_DIR${NC}"
    echo -e "${GREEN}✓ Compression report saved to: $LOG_FILE${NC}"
else
    echo -e "${YELLOW}No files were compressed.${NC}"
fi
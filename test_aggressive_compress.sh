#!/bin/bash

# Test aggressive compression on 10 largest PNG files
# Converting PNG to JPG for maximum compression

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Create test directory
TEST_DIR="material_test_compression"
mkdir -p "$TEST_DIR"

echo -e "${BLUE}===========================================
AGGRESSIVE COMPRESSION TEST (10 FILES)
PNG → JPG Conversion with Quality 90%
===========================================${NC}\n"

# Files to test (10 largest PNG files)
files=(
    "material/[2025 서밋] 참가자프로필 라운드 /김희영_소풍커넥트_프로필리운드.png"
    "material/[2025 서밋] 참가자프로필 라운드 /Angela Tay_AgFunder_프로필라운드.png"
    "material/[2025 서밋] 참가자프로필 라운드 /유서영_소풍벤처스_프로필라운드.png"
    "material/[2025 서밋] 참가자프로필 라운드 /지현영_서울대학교 환경에너지 법정책센터_프로필라운드.png"
    "material/[2025 서밋] 참가자프로필 라운드 /안양순_제스프리프레쉬프로듀스코리아(유)_프로필라운드.png"
    "material/[2025 서밋] 참가자프로필 라운드 /신용녀_마이크로소프트_프로필라운드.png"
    "material/[2025 서밋] 참가자프로필 라운드 /박인원_인비저닝_프로필라운드.png"
    "material/[2025 서밋] 참가자프로필 라운드 /최유나_아산나눔재단_프로필라운드.png"
    "material/[2025 서밋] 참가자프로필 라운드 /최경희_소풍커넥트_프로필라운드.png"
    "material/[2025 서밋] 참가자프로필 라운드 /노지훈_솔라파트너스_프로필라운드.png"
)

total_original_size=0
total_compressed_size=0
count=1

# Process each file
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo -e "${YELLOW}[$count/10] Processing: $filename${NC}"
        
        # Get original size
        original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        original_size_mb=$(echo "scale=2; $original_size / 1048576" | bc)
        
        # Create output filename (change .png to .jpg)
        output_file="${TEST_DIR}/${filename%.png}.jpg"
        
        # Method 1: Convert PNG to JPG with high quality (90%)
        echo "  Converting PNG → JPG (quality 90%)..."
        magick "$file" -quality 90 -background white -flatten "$output_file"
        
        # Get compressed size
        compressed_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null)
        compressed_size_mb=$(echo "scale=2; $compressed_size / 1048576" | bc)
        
        # Calculate savings
        savings_mb=$(echo "scale=2; $original_size_mb - $compressed_size_mb" | bc)
        percentage=$(echo "scale=1; (($original_size - $compressed_size) * 100) / $original_size" | bc)
        
        # Show results
        echo -e "${GREEN}  ✓ Original PNG: ${original_size_mb}MB${NC}"
        echo -e "${GREEN}  ✓ Compressed JPG: ${compressed_size_mb}MB${NC}"
        echo -e "${GREEN}  ✓ Saved: ${savings_mb}MB (${percentage}%)${NC}"
        
        # Check if under 1MB
        if (( $(echo "$compressed_size_mb < 1.5" | bc -l) )); then
            echo -e "${GREEN}  ✓ SUCCESS: Under 1.5MB!${NC}"
        else
            echo -e "${YELLOW}  ⚠ Still over 1.5MB, trying more aggressive compression...${NC}"
            
            # Try more aggressive compression
            output_file2="${TEST_DIR}/${filename%.png}_aggressive.jpg"
            magick "$file" -resize "1920x1920>" -quality 85 -background white -flatten "$output_file2"
            
            compressed_size2=$(stat -f%z "$output_file2" 2>/dev/null || stat -c%s "$output_file2" 2>/dev/null)
            compressed_size2_mb=$(echo "scale=2; $compressed_size2 / 1048576" | bc)
            
            echo -e "${BLUE}    Aggressive (resize+85%): ${compressed_size2_mb}MB${NC}"
            
            # Use the better result
            if (( $(echo "$compressed_size2 < $compressed_size" | bc -l) )); then
                compressed_size=$compressed_size2
                compressed_size_mb=$compressed_size2_mb
                mv "$output_file2" "$output_file"
                echo -e "${GREEN}    Using aggressive version${NC}"
            else
                rm -f "$output_file2"
            fi
        fi
        
        # Update totals
        total_original_size=$((total_original_size + original_size))
        total_compressed_size=$((total_compressed_size + compressed_size))
        
        echo ""
        ((count++))
    fi
done

# Summary
total_original_mb=$(echo "scale=2; $total_original_size / 1048576" | bc)
total_compressed_mb=$(echo "scale=2; $total_compressed_size / 1048576" | bc)
total_savings_mb=$(echo "scale=2; ($total_original_size - $total_compressed_size) / 1048576" | bc)
total_percentage=$(echo "scale=1; (($total_original_size - $total_compressed_size) * 100) / $total_original_size" | bc)

echo -e "${BLUE}
===========================================
TEST RESULTS SUMMARY
===========================================
Original total (PNG): ${total_original_mb}MB
Compressed total (JPG): ${total_compressed_mb}MB
Total savings: ${total_savings_mb}MB (${total_percentage}%)
===========================================

Test files saved in: $TEST_DIR/
Original files unchanged in: material/

${YELLOW}Next steps:${NC}
1. Review test results in $TEST_DIR/
2. If satisfied, apply to all PNG files
3. PNG → JPG conversion is most effective for photos
   (Not recommended for logos or graphics with transparency)
${NC}"
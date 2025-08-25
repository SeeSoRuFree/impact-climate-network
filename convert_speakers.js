const fs = require('fs');
const path = require('path');

function csvToJson() {
  const csvFilePath = '/Users/seoyeongyu/Desktop/networkimapct-main/material/25서밋_Speakerlist.csv';
  const jsonFilePath = '/Users/seoyeongyu/Desktop/networkimapct-main/public/2025-summit/data/speakers.json';
  
  try {
    // Read CSV file
    const csvContent = fs.readFileSync(csvFilePath, 'utf-8');
    const lines = csvContent.split('\n');
    
    // Parse header
    const header = lines[0].split(',');
    console.log('CSV Header:', header);
    
    const speakers = [];
    
    // Process each line starting from line 1 (skip header)
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue; // Skip empty lines
      
      // Split by comma but handle quoted content
      const values = [];
      let currentValue = '';
      let inQuotes = false;
      
      for (let j = 0; j < line.length; j++) {
        const char = line[j];
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          values.push(currentValue.trim());
          currentValue = '';
        } else {
          currentValue += char;
        }
      }
      values.push(currentValue.trim()); // Add last value
      
      // Skip if not enough values or if it's a continuation line (starts with empty values)
      if (values.length < 6 || !values[1] || !values[2] || !values[3]) {
        continue;
      }
      
      // Extract data
      const seq = values[0] || '';
      const uniqueId = values[1] || '';
      const name = values[2] || '';
      const company = values[3] || '';
      const position = values[4] || '';
      const nameEn = values[5] || '';
      const companyEn = values[6] || '';
      const positionEn = values[7] || '';
      const linkedin = values[8] || '';
      const bio = values[9] || '';
      
      // Only process entries with basic required fields
      if (uniqueId && name && company && position) {
        const speaker = {
          id: parseInt(uniqueId) + 100, // Add offset to match existing numbering
          name: name,
          nameEn: nameEn,
          company: company,
          companyEn: companyEn,
          position: position,
          positionEn: positionEn,
          linkedin: linkedin,
          profileImage: "",
          profileRound: "",
          isInternational: nameEn ? true : false,
          bio: bio.replace(/\n/g, '\n').replace(/"/g, '') // Clean up bio text
        };
        
        speakers.push(speaker);
        console.log(`Added speaker ${speaker.id}: ${speaker.name}`);
      }
    }
    
    console.log(`Total speakers processed: ${speakers.length}`);
    
    // Write to JSON file
    fs.writeFileSync(jsonFilePath, JSON.stringify(speakers, null, 2), 'utf-8');
    console.log(`Updated speakers.json with ${speakers.length} speakers`);
    
  } catch (error) {
    console.error('Error processing CSV:', error);
  }
}

csvToJson();
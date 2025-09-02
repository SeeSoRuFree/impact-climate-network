const fs = require('fs');

function csvToJson() {
  const csvFilePath = '/Users/seoyeongyu/Desktop/networkimapct-main/material/25서밋_Speakerlist.csv';
  const jsonFilePath = '/Users/seoyeongyu/Desktop/networkimapct-main/public/2025-summit/data/speakers.json';
  
  try {
    // Read CSV file
    const csvContent = fs.readFileSync(csvFilePath, 'utf-8');
    
    // Clean up the content and split by lines
    const cleanContent = csvContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    const lines = cleanContent.split('\n');
    
    const speakers = [];
    let currentEntry = null;
    
    // Process each line
    for (let i = 1; i < lines.length; i++) { // Skip header line
      const line = lines[i].trim();
      if (!line) continue;
      
      // Check if line starts with a number followed by comma (new entry)
      const match = line.match(/^(\d+),(.+)/);
      
      if (match) {
        // Save previous entry if exists
        if (currentEntry && currentEntry.name && currentEntry.company) {
          speakers.push(currentEntry);
        }
        
        // Parse new entry
        const entryId = match[1];
        const restOfLine = match[2];
        
        // Split by comma but be careful with quoted content
        const parts = [];
        let current = '';
        let inQuotes = false;
        
        for (let j = 0; j < restOfLine.length; j++) {
          const char = restOfLine[j];
          if (char === '"' && (j === 0 || restOfLine[j-1] !== '\\')) {
            inQuotes = !inQuotes;
          } else if (char === ',' && !inQuotes) {
            parts.push(current.trim());
            current = '';
          } else {
            current += char;
          }
        }
        parts.push(current.trim()); // Add the last part
        
        // Create speaker object
        currentEntry = {
          id: parseInt(entryId) + 100, // Add offset
          name: parts[0] ? parts[0].replace(/"/g, '') : '',
          nameEn: parts[4] ? parts[4].replace(/"/g, '') : '',
          company: parts[1] ? parts[1].replace(/"/g, '') : '',
          companyEn: parts[5] ? parts[5].replace(/"/g, '') : '',
          position: parts[2] ? parts[2].replace(/"/g, '') : '',
          positionEn: parts[6] ? parts[6].replace(/"/g, '') : '',
          linkedin: parts[7] ? parts[7].replace(/"/g, '') : '',
          profileImage: "",
          profileRound: "",
          isInternational: false,
          bio: parts[8] ? parts[8].replace(/"/g, '').replace(/\\n/g, '\n') : ''
        };
        
        // Set international flag
        if (currentEntry.nameEn && currentEntry.nameEn.length > 0) {
          currentEntry.isInternational = true;
        }
        
      } else if (currentEntry && line.length > 0) {
        // This is a continuation of the bio
        if (currentEntry.bio) {
          currentEntry.bio += '\n' + line.replace(/"/g, '');
        } else {
          currentEntry.bio = line.replace(/"/g, '');
        }
      }
    }
    
    // Don't forget the last entry
    if (currentEntry && currentEntry.name && currentEntry.company) {
      speakers.push(currentEntry);
    }
    
    // Filter out invalid entries and clean up data
    const validSpeakers = speakers.filter(speaker => 
      speaker.name && 
      speaker.company && 
      speaker.position &&
      speaker.name.length > 0 &&
      speaker.company.length > 0
    ).map(speaker => {
      // Clean up bio text
      speaker.bio = speaker.bio
        .replace(/\n\n+/g, '\n\n') // Remove excessive line breaks
        .replace(/^\s+|\s+$/g, '') // Trim whitespace
        .substring(0, 2000); // Limit bio length
      
      return speaker;
    });
    
    console.log(`Total valid speakers: ${validSpeakers.length}`);
    
    // Log first few speakers for verification
    validSpeakers.slice(0, 5).forEach(speaker => {
      console.log(`${speaker.id}: ${speaker.name} (${speaker.company}) - ${speaker.position}`);
    });
    
    // Write to JSON file
    fs.writeFileSync(jsonFilePath, JSON.stringify(validSpeakers, null, 2), 'utf-8');
    console.log(`Successfully updated speakers.json with ${validSpeakers.length} speakers`);
    
  } catch (error) {
    console.error('Error processing CSV:', error);
  }
}

csvToJson();
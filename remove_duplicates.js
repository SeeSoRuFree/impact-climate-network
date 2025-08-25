const fs = require('fs');

try {
  const data = JSON.parse(fs.readFileSync('./public/2025-summit/data/speakers.json', 'utf8'));
  
  const seen = new Set();
  const uniqueSpeakers = [];
  
  data.forEach((speaker, index) => {
    const name = speaker.name || speaker.nameKr || speaker.nameEn;
    
    if (name && !seen.has(name)) {
      seen.add(name);
      uniqueSpeakers.push(speaker);
      console.log(`Keeping: ${name} (first occurrence)`);
    } else if (name && seen.has(name)) {
      console.log(`Removing duplicate: ${name} (ID: ${speaker.id})`);
    }
  });
  
  console.log(`\nOriginal count: ${data.length}`);
  console.log(`After removing duplicates: ${uniqueSpeakers.length}`);
  console.log(`Removed: ${data.length - uniqueSpeakers.length} duplicates`);
  
  // Backup original file
  fs.writeFileSync('./public/2025-summit/data/speakers.json.backup', JSON.stringify(data, null, 2));
  console.log('\nBackup created: speakers.json.backup');
  
  // Write cleaned data
  fs.writeFileSync('./public/2025-summit/data/speakers.json', JSON.stringify(uniqueSpeakers, null, 2));
  console.log('Updated speakers.json with unique entries');
  
} catch (error) {
  console.error('Error:', error.message);
}
const fs = require('fs');
const path = require('path');

// Read speakers.json
const speakersPath = '/Users/seoyeongyu/Desktop/networkimapct-main/public/2025-summit/data/speakers.json';
const speakers = JSON.parse(fs.readFileSync(speakersPath, 'utf-8'));

// Find participants without profile images
const missingImages = speakers.filter(s => !s.profileRound || s.profileRound === '');

console.log('Participants without profile images:');
missingImages.forEach((speaker, i) => {
  console.log(`${i+1}. ${speaker.name} (${speaker.company})`);
});

console.log(`\nTotal: ${missingImages.length} participants without images`);

// Get list of available image files
const materialPath = '/Users/seoyeongyu/Desktop/networkimapct-main/material/[2025 서밋] 참가자프로필 라운드 ';
try {
  const imageFiles = fs.readdirSync(materialPath);
  
  console.log('\nChecking for matching image files:');
  missingImages.forEach(speaker => {
    const matchingFiles = imageFiles.filter(file => file.includes(speaker.name));
    if (matchingFiles.length > 0) {
      console.log(`${speaker.name}: Found - ${matchingFiles[0]}`);
    } else {
      console.log(`${speaker.name}: Not found`);
    }
  });
} catch (error) {
  console.log('Error reading material folder:', error.message);
}
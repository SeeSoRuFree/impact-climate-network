const fs = require('fs');

// Read speakers.json
const speakersPath = '/Users/seoyeongyu/Desktop/networkimapct-main/public/2025-summit/data/speakers.json';
const speakers = JSON.parse(fs.readFileSync(speakersPath, 'utf-8'));

// Fix the webp extension issue for 류광남
speakers.forEach(speaker => {
  if (speaker.profileRound && speaker.profileRound.includes('.webp')) {
    speaker.profileRound = speaker.profileRound.replace('.webp', '.png');
    console.log(`Fixed extension for ${speaker.name}: ${speaker.profileRound}`);
  }
});

// Write back to file
fs.writeFileSync(speakersPath, JSON.stringify(speakers, null, 2));

console.log('Fixed image path extensions.');
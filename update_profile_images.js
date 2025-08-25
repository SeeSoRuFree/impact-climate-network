const fs = require('fs');

try {
  const data = JSON.parse(fs.readFileSync('./public/2025-summit/data/speakers.json', 'utf8'));
  
  // Update profile images for the 4 speakers
  const updates = [
    {
      name: "이탄희",
      profileRound: "/2025-summit/speakers/round/이탄희_법무법인덕수_프로필라운드.png"
    },
    {
      name: "김시원", 
      profileRound: "/2025-summit/speakers/round/김시원_더버터_프로필라운드.png"
    },
    {
      name: "천권필",
      profileRound: "/2025-summit/speakers/round/천권필_한겨레_프로필라운드.png"
    },
    {
      name: "유서영",
      profileRound: "/2025-summit/speakers/round/유서영_소풍벤처스_프로필라운드.png"
    }
  ];
  
  let updatedCount = 0;
  
  // Update the speakers data
  const updatedData = data.map(speaker => {
    const update = updates.find(u => u.name === speaker.name);
    if (update) {
      console.log(`Updating profile image for ${speaker.name}`);
      updatedCount++;
      return {
        ...speaker,
        profileRound: update.profileRound
      };
    }
    return speaker;
  });
  
  console.log(`\nUpdated ${updatedCount} profile images`);
  
  // Write updated data
  fs.writeFileSync('./public/2025-summit/data/speakers.json', JSON.stringify(updatedData, null, 2));
  console.log('Updated speakers.json with profile images');
  
} catch (error) {
  console.error('Error:', error.message);
}

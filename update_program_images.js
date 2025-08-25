const fs = require('fs');

// Read speakers.json to get profile image paths
const speakersPath = '/Users/seoyeongyu/Desktop/networkimapct-main/public/2025-summit/data/speakers.json';
const speakers = JSON.parse(fs.readFileSync(speakersPath, 'utf-8'));

// Create a mapping of speaker names to their profile images
const speakerImageMap = {};
speakers.forEach(speaker => {
  if (speaker.profileRound || speaker.profileImage) {
    speakerImageMap[speaker.name] = speaker.profileRound || speaker.profileImage;
  }
});

console.log('Speaker image mapping:');
Object.entries(speakerImageMap).forEach(([name, image]) => {
  console.log(`${name}: ${image}`);
});

console.log('\nSpeakers missing from program that need images:');
const programSpeakers = [
  '한성숙', '지현영', '황민호', '김기만', '배여름', '한상엽', '윤신영',
  '이원재', '권순우', 'Max Han', 'Penny Freer', 'Roy Torbert', 'Anup Jain',
  '홍종호', '오보영', '김종규', '김선교', '김한수', '박병규', '최근형',
  '최지영'
];

programSpeakers.forEach(name => {
  if (speakerImageMap[name]) {
    console.log(`${name}: ${speakerImageMap[name]}`);
  } else {
    console.log(`${name}: NO IMAGE FOUND`);
  }
});
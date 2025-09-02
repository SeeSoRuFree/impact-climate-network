const fs = require('fs');

// Read speakers.json
const speakersPath = '/Users/seoyeongyu/Desktop/networkimapct-main/public/2025-summit/data/speakers.json';
const speakers = JSON.parse(fs.readFileSync(speakersPath, 'utf-8'));

// Requested order of speakers
const requestedOrder = [
  '이학영', '한성숙', '류석영', '이유진', '육심나', '한상엽', '박성현', 
  'Penny Freer', 'Roy Torbert', 'Anup Jain', 'Andrew Chang', '제현주', 
  '지현영', '황민호', '배여름', '김기만', '윤신영', '이원재', '권순우', 
  '한승훈', '최지영', '홍종호', '김종규', '오보영', '김한수', '박병규', '최근형'
];

console.log('Finding speaker IDs in requested order:');
const orderedIds = [];

requestedOrder.forEach((name, index) => {
  const speaker = speakers.find(s => s.name === name);
  if (speaker) {
    orderedIds.push(speaker.id);
    console.log(`${index + 1}. ${name}: ID ${speaker.id}`);
  } else {
    console.log(`${index + 1}. ${name}: NOT FOUND`);
  }
});

console.log('\nFinal ordered IDs array:');
console.log(`[${orderedIds.join(', ')}]`);
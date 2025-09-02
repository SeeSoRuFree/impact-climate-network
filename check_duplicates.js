const fs = require('fs');

try {
  const data = JSON.parse(fs.readFileSync('./public/2025-summit/data/speakers.json', 'utf8'));
  
  // data는 배열인 것 같으니까 직접 사용
  const names = data.map(s => s.name || s.nameKr || s.nameEn);
  const nameCount = {};
  const duplicates = [];
  
  // Count occurrences of each name
  names.forEach(name => {
    if (name) {
      nameCount[name] = (nameCount[name] || 0) + 1;
    }
  });
  
  // Find duplicates
  Object.keys(nameCount).forEach(name => {
    if (nameCount[name] > 1) {
      duplicates.push(`${name} (${nameCount[name]}번)`);
    }
  });
  
  console.log('중복된 참가자들:');
  if (duplicates.length > 0) {
    duplicates.forEach(dup => console.log(dup));
  } else {
    console.log('중복된 참가자가 없습니다.');
  }
  
} catch (error) {
  console.error('Error:', error.message);
}
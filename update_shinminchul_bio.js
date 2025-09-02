const fs = require('fs');

try {
  const data = JSON.parse(fs.readFileSync('./public/2025-summit/data/speakers.json', 'utf8'));
  
  // Find 신민철 and update bio
  const updatedData = data.map(speaker => {
    if (speaker.name === "신민철") {
      console.log(`Updating bio for ${speaker.name}`);
      return {
        ...speaker,
        position: "대표 / 그로스파트너",
        positionEn: "CEO / Growth Partner", 
        bio: "토마 인베스트먼트 대표 및 소풍벤처스 그로스파트너.\n\n2008년부터 기후변화와 관련한 다양한 필드에서 일하고 있다. 환경재단 기후변화센터에서 시민, 오피니언 리더들의 기후변화 교육을 시작으로 LG전자에서 기후변화 IR 및 배출권거래제 등 규제대응 업무를 주로 진행했다.\n\n기후변화 대응을 위해서는 기후테크 개발 및 스타트업 육성 등의 해당 산업분야의 발전이 중요하다는 인식 하에 토마 인베스트먼트를 통해 임팩트 투자를 진행하고 있으며, 소풍 벤처스에 그로스파트너로도 참여하고 있다."
      };
    }
    return speaker;
  });
  
  // Write updated data
  fs.writeFileSync('./public/2025-summit/data/speakers.json', JSON.stringify(updatedData, null, 2));
  console.log('Updated 신민철 bio successfully');
  
} catch (error) {
  console.error('Error:', error.message);
}
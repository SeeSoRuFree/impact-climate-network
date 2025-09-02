const fs = require('fs');

try {
  const data = JSON.parse(fs.readFileSync('./public/2025-summit/data/speakers.json', 'utf8'));
  
  // Find the highest ID to continue from
  const maxId = Math.max(...data.map(speaker => speaker.id));
  console.log(`Current max ID: ${maxId}`);
  
  // Missing speakers to add
  const missingSpeakers = [
    {
      "id": maxId + 1,
      "name": "이탄희",
      "nameEn": "lee tahney",
      "company": "법무법인 덕수",
      "companyEn": "Duksu law firm",
      "position": "파트너",
      "positionEn": "Partner",
      "linkedin": "",
      "profileImage": "",
      "profileRound": "",
      "isInternational": false,
      "bio": "법무법인 덕수의 파트너 변호사\n\n법무법인 덕수는 55년의 역사를 지닌 단체로서, 과거에는 정치적/시민적 인권을 보호하는데 앞장 섰고, 현재는 우리나라에서 공익 지향성을 가지고 가장 활발하게 활동하는 변호사 모임 중 하나이다. 특히 정의로운 전환, 즉 탄소중립 사회로 나아가는 과정에서 피해를 입는 노동자, 농민, 지역사회 등을 보호하고, 그 과정에서 발생하는 부담을 사회적으로 분담하며, 취약계층의 피해를 최소화하는 정책 방향을 확산하기 위해 활동하고 있다.\n\n이탄희 변호사는 30대를 법원에서 판사로 재직하고, 대한민국 제21대 국회의원을 역임한 뒤 현재는 법무법인 덕수의 파트너 변호사로 활동하고 있다. 법률전문성과 정책전문성을 활용하여 '기후변화 대응이 모든 이에게 공정하고 포용적인 방식이어야 한다'는 사회적 메시지를 전파하기 위해 힘쓰고 있다."
    },
    {
      "id": maxId + 2,
      "name": "김시원",
      "nameEn": "Siwon Kim",
      "company": "더버터",
      "companyEn": "The Butter",
      "position": "편집장",
      "positionEn": "Editor-in-Chief",
      "linkedin": "www.linkedin.com/in/siwon-kim-6336b4306",
      "profileImage": "",
      "profileRound": "",
      "isInternational": false,
      "bio": "더버터 대표이사 겸 편집장.\n\n2005년 조선일보에 입사해 기자 생활을 시작했고 2018년부터 2023년까지 조선일보 공익섹션 편집장을 맡아 사회혁신, 필란트로피, CSR, 국제구호개발, 스타트업 등 임팩트 섹터를 중점적으로 취재하며 전문성을 쌓았다.\n공익 분야에 대한 경험과 네트워크를 갖춘 기자들과 함께 2024년 더버터를 창간했다. 더버터는 사회문제를 지적하는 것에 그치지 않고 대안과 해결책까지 제시하는 '솔루션 저널리즘'을 지향한다."
    },
    {
      "id": maxId + 3,
      "name": "천권필",
      "nameEn": "Cheon Kwon Pil",
      "company": "중앙일보",
      "companyEn": "The JoongAng Daily",
      "position": "기자",
      "positionEn": "reporter",
      "linkedin": "",
      "profileImage": "",
      "profileRound": "",
      "isInternational": false,
      "bio": ""
    },
    {
      "id": maxId + 4,
      "name": "문일요",
      "nameEn": "MOON ILYO",
      "company": "더버터",
      "companyEn": "The Butter",
      "position": "기자",
      "positionEn": "Team Lead",
      "linkedin": "",
      "profileImage": "",
      "profileRound": "",
      "isInternational": false,
      "bio": "중앙일보 공익섹션 더버터 기자. 비영리, 기업사회공헌, 국제개발, 사회혁신 분야를 주로 취재한다."
    },
    {
      "id": maxId + 5,
      "name": "유서영",
      "nameEn": "Yu Seoyeong",
      "company": "소풍벤처스",
      "companyEn": "Sopoong Ventures",
      "position": "서밋총괄디렉터",
      "positionEn": "Director",
      "linkedin": "https://www.linkedin.com/in/seoyeong-yu-sopoong/",
      "profileImage": "",
      "profileRound": "",
      "isInternational": false,
      "bio": "임팩트 투자사 소풍벤처스에서 기후 분야 전문 투자와 생태계 조성을 이끌고 있으며, '기후테크 스타트업 서밋'을 4년째 총괄하고 있다.\n임팩트투자자와 매니저를 위한 교육 프로그램인 '임팩트 액셀러레이팅 마스터코스'와 농식품·기후테크 투자 프로그램인 '임팩트어스', '임팩트클라이밋'을 론칭했다. 또한 임팩트패컬티 개인투자조합을 결성해 초기 스타트업 투자에도 직접 참여하고 있다. 투자와 교육, 글로벌 협력을 통해 기후테크 스타트업 생태계를 연결하고 성장시키는 데 주력하고 있다."
    }
  ];
  
  // Add missing speakers
  const updatedData = [...data, ...missingSpeakers];
  
  console.log(`Added ${missingSpeakers.length} missing speakers:`);
  missingSpeakers.forEach(speaker => {
    console.log(`- ${speaker.name} (${speaker.company}, ${speaker.position})`);
  });
  
  console.log(`\nTotal speakers: ${data.length} → ${updatedData.length}`);
  
  // Write updated data
  fs.writeFileSync('./public/2025-summit/data/speakers.json', JSON.stringify(updatedData, null, 2));
  console.log('Updated speakers.json with missing participants');
  
} catch (error) {
  console.error('Error:', error.message);
}
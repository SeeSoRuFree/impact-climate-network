const fs = require('fs');

// Read speakers.json
const speakersPath = '/Users/seoyeongyu/Desktop/networkimapct-main/public/2025-summit/data/speakers.json';
const speakers = JSON.parse(fs.readFileSync(speakersPath, 'utf-8'));

// Create a mapping of available profile images to names
const imageMap = {
  '김이레': '/2025-summit/speakers/round/김이레_(사)우리들의 미래_프로필라운드.png',
  '하지현': '/2025-summit/speakers/round/하지현_기후솔루션_프로필라운드.png',
  '최문진': '/2025-summit/speakers/round/최문진_부강테크_프로필라운드.png',
  '문건호': '/2025-summit/speakers/round/문건호_디쓰리 쥬빌리 파트너스_프로필라운드.png',
  '노준우': '/2025-summit/speakers/round/노준우_위즈아이_프로필라운드.png',
  '오용석': '/2025-summit/speakers/round/오용석_녹색전환연구소_프로필라운드.png',
  '남재작': '/2025-summit/speakers/round/남재작_한국정밀농업연구소_프로필라운드.png',
  '노지훈': '/2025-summit/speakers/round/노지훈_솔라파트너스_프로필라운드.png',
  '박인원': '/2025-summit/speakers/round/박인원_인비저닝_프로필라운드.png',
  '최균': '/2025-summit/speakers/round/최균_사단법인넥스트_프로필라운드.png',
  '홍진아': '/2025-summit/speakers/round/홍진아_카카오임팩트_프로필라운드.png',
  '엄윤미': '/2025-summit/speakers/round/엄윤미_아산나눔재단_프로필라운드.png',
  '김성훈': '/2025-summit/speakers/round/김성훈_법무법인미션_프로필라운드.png',
  '정연우': '/2025-summit/speakers/round/정연우_솔라파트너스_프로필라운드.png',
  '문숙희': '/2025-summit/speakers/round/문숙희_카카오임팩트_프로필라운드.png',
  '강병삼': '/2025-summit/speakers/round/강병삼_전 제주시장님_프로필라운드.png',
  '김현대': '/2025-summit/speakers/round/김현대_한국사회가치연대기금_프로필라운드.png',
  '임준우': '/2025-summit/speakers/round/임준우_소풍벤처스_프로필라운드.png',
  '김원태': '/2025-summit/speakers/round/김원태_카카오데이터센터_프로필라운드.png',
  '김종현': '/2025-summit/speakers/round/김종현_섬이다_프로필라운드.png',
  '신민철': '/2025-summit/speakers/round/신민철_토마인베스트먼트_프로필라운드.png',
  '박용진': '/2025-summit/speakers/round/박용진_KIS자산평가_프로필라운드.png',
  '김신우': '/2025-summit/speakers/round/김신우_(주)신성이엔지_프로필라운드.png',
  '안양순': '/2025-summit/speakers/round/안양순_제스프리프레쉬프로듀스코리아(유)_프로필라운드.png',
  '이희제': '/2025-summit/speakers/round/이희제_카카오_프로필라운드.png',
  '김동환': '/2025-summit/speakers/round/김동환_42마루_프로필라운드.png',
  '양유정': '/2025-summit/speakers/round/양유정_라우텍케이알_프로필라운드.png',
  '윤슬기': '/2025-summit/speakers/round/윤슬기_서울대 기후테크센터_프로필라운드.png',
  '서대규': '/2025-summit/speakers/round/서대규_빅모빌리티_프로필라운드.png',
  '조현익': '/2025-summit/speakers/round/조현익_카카오벤처스_프로필라운드.png',
  '은기환': '/2025-summit/speakers/round/은기환_한화자산운용한화그린히어로펀드_프로필라운드.png',
  '최경희': '/2025-summit/speakers/round/최경희_소풍커넥트_프로필라운드.png',
  '김혜애': '/2025-summit/speakers/round/김혜애_경기환경에너지진흥원_프로필라운드.png',
  '백승주': '/2025-summit/speakers/round/백승주_소풍벤처스_프로필라운드.png',
  '김희영': '/2025-summit/speakers/round/김희영_소풍커넥트_프로필리운드.png',
  '홍지애': '/2025-summit/speakers/round/홍지애_소풍벤처스_프로필라운드.png',
  '이병선': '/2025-summit/speakers/round/이병선_제주경제창조혁신센터_프로필라운드.png',
  '조대현': '/2025-summit/speakers/round/조대현_아시아기후변화투자자그룹_프로필라운드.png',
  '김주진': '/2025-summit/speakers/round/김주진_기후솔루션_프로필라운드.png',
  '최진호': '/2025-summit/speakers/round/최진호_TGI_프로필라운드.png',
  '김정빈': '/2025-summit/speakers/round/김정빈_수퍼빈_프로필라운드.png',
  '나지훈': '/2025-summit/speakers/round/나지훈_경기환경에너지진흥원_프로필라운드.png',
  '이옥형': '/2025-summit/speakers/round/이옥형_유진투자증권_프로필라운드.png',
  '유종태': '/2025-summit/speakers/round/유종태_주식회사 유뱃_프로필라운드.png',
  '박수정': '/2025-summit/speakers/round/박수정_라이브데이터_프로필라운드.png',
  '강해나': '/2025-summit/speakers/round/강해나_주한영국대사관_프로필라운드.png',
  '허여나': '/2025-summit/speakers/round/허여나_아산나눔재단_프로필라운드png.png',
  '조유현': '/2025-summit/speakers/round/조유현_더나은미래_프로필라운드.png',
  '이혜진': '/2025-summit/speakers/round/이혜진_창업진흥원_프로필라운드.png',
  '안재태': '/2025-summit/speakers/round/안재태_국회(최형두의원실보과관)_프로필라운드.png',
  '김윤정': '/2025-summit/speakers/round/김윤정_창업진흥원_프로필라운드.png',
  '이재형': '/2025-summit/speakers/round/이재형_제주창조경제혁신센터_프로필라운드.png',
  '이호준': '/2025-summit/speakers/round/이호준_한국그린데이터_프로필라운드.png',
  '김경욱': '/2025-summit/speakers/round/김경욱_위드위_프로필라운드.png',
  '홍준선': '/2025-summit/speakers/round/홍준선_Airmyne_프로필라운드.png',
  '최고운': '/2025-summit/speakers/round/최고운_한국산업은행_프로필라운드.png',
  '정희정': '/2025-summit/speakers/round/정희정_국회사무처_프로필라운드.png',
  '이정환': '/2025-summit/speakers/round/이정환_슬로우뉴스_프로필라운드.png',
  '조남석': '/2025-summit/speakers/round/조남석_무인탐사연구소.png',
  '최현웅': '/2025-summit/speakers/round/최현웅_시드앤_프로필라운드.png',
  '김경하': '/2025-summit/speakers/round/김경하_더나은미래_프로필라운드.png',
  '박홍익': '/2025-summit/speakers/round/박홍익_브이피피랩_프로필라운드.png'
};

// Update speakers with profile round images
let updateCount = 0;
speakers.forEach(speaker => {
  if (imageMap[speaker.name] && speaker.profileRound === '') {
    speaker.profileRound = imageMap[speaker.name];
    updateCount++;
    console.log(`Updated ${speaker.name}: ${imageMap[speaker.name]}`);
  }
});

// Write back to file
fs.writeFileSync(speakersPath, JSON.stringify(speakers, null, 2));

console.log(`Successfully updated ${updateCount} speakers with profile images.`);

// Show remaining speakers without images
const stillMissing = speakers.filter(s => s.profileRound === '').map(s => s.name);
if (stillMissing.length > 0) {
  console.log(`\nStill missing profile images for ${stillMissing.length} speakers:`);
  stillMissing.forEach(name => console.log(`- ${name}`));
}
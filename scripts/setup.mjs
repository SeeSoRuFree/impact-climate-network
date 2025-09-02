#!/usr/bin/env node

import inquirer from 'inquirer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 색상 코드
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

// 유틸리티 함수
const log = {
  title: (text) => console.log(`\n${colors.bright}${colors.cyan}${text}${colors.reset}\n`),
  success: (text) => console.log(`${colors.green}✓${colors.reset} ${text}`),
  info: (text) => console.log(`${colors.blue}ℹ${colors.reset} ${text}`)
};

// 메인 설정 함수
async function setupProject() {
  log.title('🚀 Base Project 설정 시작');

  // 1. 프로젝트 타입 선택
  const { projectType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'projectType',
      message: '프로젝트 타입을 선택하세요:',
      choices: [
        { name: '🔄 클론 사이트 - 기존 사이트를 복제', value: 'clone' },
        { name: '🚀 MVP 사이트 - 새로운 프로젝트 시작', value: 'mvp' }
      ]
    }
  ]);

  let targetUrl = null;
  
  // 2. 클론 사이트인 경우 URL 입력
  if (projectType === 'clone') {
    const { url } = await inquirer.prompt([
      {
        type: 'input',
        name: 'url',
        message: '클론하려는 사이트의 URL을 입력하세요:',
        validate: (input) => {
          try {
            new URL(input);
            return true;
          } catch {
            return '올바른 URL을 입력해주세요 (예: https://example.com)';
          }
        }
      }
    ]);
    targetUrl = url;
  }

  // 3. 앱 형태 선택
  const { appType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'appType',
      message: '만들려는 앱의 형태를 선택하세요:',
      choices: [
        { name: '📱💻 반응형 웹 (Desktop + Mobile)', value: 'responsive' },
        { name: '💻 데스크톱 웹', value: 'desktop' },
        { name: '📱 모바일 웹', value: 'mobile' },
        { name: '👔 관리자 페이지', value: 'admin' },
        { name: '📊 대시보드', value: 'dashboard' },
        { name: '🛒 이커머스', value: 'ecommerce' },
        { name: '📝 블로그/CMS', value: 'blog' },
        { name: '🎨 포트폴리오', value: 'portfolio' }
      ]
    }
  ]);

  // 4. 프로젝트 이름 입력
  const { projectName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: '프로젝트 이름을 입력하세요:',
      default: path.basename(process.cwd()),
      validate: (input) => input.trim() !== '' || '프로젝트 이름을 입력해주세요'
    }
  ]);

  // 5. CLAUDE.md 파일 업데이트
  await updateClaudeMd({
    projectType,
    targetUrl,
    appType,
    projectName
  });

  log.success('프로젝트 설정이 완료되었습니다!');
  log.info('CLAUDE.md 파일이 업데이트되었습니다.');
  
  // 클론 사이트인 경우 추가 안내
  if (projectType === 'clone') {
    console.log(`\n${colors.bright}${colors.yellow}📁 클론 사이트 에셋 준비${colors.reset}`);
    console.log(`${colors.yellow}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
    console.log('클론할 사이트의 에셋(이미지, 폰트, 아이콘 등)을 준비해주세요:');
    console.log(`1. ${colors.cyan}public/${colors.reset} 폴더에 에셋 파일들을 배치`);
    console.log('   예시:');
    console.log('   - public/images/ → 이미지 파일');
    console.log('   - public/fonts/ → 폰트 파일');
    console.log('   - public/icons/ → 아이콘 파일');
    console.log(`2. 크롤링한 HTML/CSS/JS 데이터를 참고하여 구조 분석`);
    console.log(`3. 컴포넌트 단위로 재구현 시작`);
    console.log(`${colors.yellow}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);
  }
  
  console.log(`${colors.yellow}다음 단계:${colors.reset}`);
  console.log('1. npm run dev - 개발 서버 시작');
  console.log('2. /guide 페이지에서 개발 가이드 확인');
  console.log('\n행운을 빕니다! 🎉\n');
}

// CLAUDE.md 파일 업데이트 함수
async function updateClaudeMd({ projectType, targetUrl, appType, projectName }) {
  const claudeMdPath = path.join(process.cwd(), 'CLAUDE.md');
  
  // 기존 CLAUDE.md 파일 읽기
  let content = await fs.readFile(claudeMdPath, 'utf-8');
  
  // 프로젝트 정보 섹션 생성
  const projectInfoSection = `# CLAUDE.md - ${projectName}

## 🎯 프로젝트 정보

- **프로젝트 타입**: ${projectType === 'clone' ? '클론 사이트' : 'MVP 사이트'}
${targetUrl ? `- **클론 대상 사이트**: ${targetUrl}` : ''}
- **앱 형태**: ${getAppTypeLabel(appType)}
- **프로젝트명**: ${projectName}
- **설정일**: ${new Date().toLocaleDateString('ko-KR')}

---

`;

  // 기존 헤더 제거하고 새로운 프로젝트 정보로 교체
  const headerEndIndex = content.indexOf('## 프로젝트 개요');
  if (headerEndIndex !== -1) {
    content = projectInfoSection + content.substring(headerEndIndex);
  } else {
    content = projectInfoSection + content;
  }

  // 프로젝트 타입에 따른 특별 지침 추가
  if (projectType === 'clone') {
    const cloneInstructions = `
## 🔄 클론 사이트 개발 지침

### 대상 사이트
- URL: ${targetUrl}
- 에셋 파일은 \`public/\` 폴더에 구조적으로 배치하세요

### 에셋 구조 예시
\`\`\`
public/
├── images/          # 이미지 파일
├── fonts/           # 웹폰트 파일
├── icons/           # 아이콘 파일
└── data/            # JSON 등 데이터 파일
\`\`\`

### 주요 작업
1. 대상 사이트의 구조와 디자인을 철저히 분석
2. 필요한 에셋 파일을 public 폴더에 정리
3. 컴포넌트 단위로 재구현
4. 인터랙션과 애니메이션 완벽 재현

`;
    
    // "프로젝트 사용법" 섹션 앞에 삽입
    const usageIndex = content.indexOf('## 프로젝트 사용법');
    if (usageIndex !== -1) {
      content = content.substring(0, usageIndex) + cloneInstructions + content.substring(usageIndex);
    }
  } else {
    const mvpInstructions = `
## 🚀 MVP 개발 지침

### 개발 목표
- 빠른 프로토타이핑과 검증
- 핵심 기능에 집중
- 확장 가능한 구조 설계

### 권장 개발 순서
1. 핵심 기능 정의
2. 기본 UI/UX 구현
3. 필수 기능 개발
4. 사용자 피드백 수집
5. 반복적 개선

`;
    
    // "프로젝트 사용법" 섹션 앞에 삽입
    const usageIndex = content.indexOf('## 프로젝트 사용법');
    if (usageIndex !== -1) {
      content = content.substring(0, usageIndex) + mvpInstructions + content.substring(usageIndex);
    }
  }

  // 앱 형태별 특별 고려사항 추가
  const appTypeConsiderations = getAppTypeConsiderations(appType);
  const considerationsSection = `
## 📋 ${getAppTypeLabel(appType)} 개발 고려사항

${appTypeConsiderations}

`;

  // "기술 스택" 섹션 앞에 삽입
  const techStackIndex = content.indexOf('## 기술 스택');
  if (techStackIndex !== -1) {
    content = content.substring(0, techStackIndex) + considerationsSection + content.substring(techStackIndex);
  }

  // 파일 저장
  await fs.writeFile(claudeMdPath, content, 'utf-8');
}

// 앱 타입 라벨 반환
function getAppTypeLabel(appType) {
  const labels = {
    responsive: '반응형 웹 (Desktop + Mobile)',
    desktop: '데스크톱 웹',
    mobile: '모바일 웹',
    admin: '관리자 페이지',
    dashboard: '대시보드',
    ecommerce: '이커머스',
    blog: '블로그/CMS',
    portfolio: '포트폴리오'
  };
  return labels[appType] || appType;
}

// 앱 타입별 고려사항 반환
function getAppTypeConsiderations(appType) {
  const considerations = {
    responsive: `- **브레이크포인트**: 모바일(~768px), 태블릿(768px~1024px), 데스크톱(1024px~)
- **터치 인터랙션**: 모바일에서 터치 제스처 지원
- **성능 최적화**: 모바일 네트워크 환경 고려
- **UI 적응성**: 화면 크기에 따른 레이아웃 변화`,
    
    desktop: `- **최소 해상도**: 1280px 이상 권장
- **마우스 인터랙션**: 호버 효과, 드래그 앤 드롭
- **키보드 단축키**: 파워 유저를 위한 단축키 지원
- **멀티 윈도우**: 여러 창에서 동시 사용 고려`,
    
    mobile: `- **모바일 퍼스트**: 터치 친화적 UI
- **성능 최적화**: 제한된 리소스 환경 고려
- **오프라인 지원**: PWA 기능 고려
- **제스처**: 스와이프, 핀치 줌 등`,
    
    admin: `- **인증/권한**: 강력한 보안 및 권한 관리
- **데이터 테이블**: 대량 데이터 표시 및 관리
- **폼 처리**: 복잡한 폼과 유효성 검사
- **대시보드**: 주요 지표 시각화`,
    
    dashboard: `- **데이터 시각화**: 차트, 그래프 라이브러리 활용
- **실시간 업데이트**: WebSocket 또는 SSE 고려
- **반응형 그리드**: 위젯 배치 커스터마이징
- **성능**: 대량 데이터 렌더링 최적화`,
    
    ecommerce: `- **제품 목록**: 필터링, 정렬, 페이지네이션
- **장바구니**: 상태 관리 및 지속성
- **결제 프로세스**: 안전한 결제 플로우
- **검색 기능**: 빠른 제품 검색`,
    
    blog: `- **콘텐츠 관리**: 마크다운 에디터, 미디어 업로드
- **SEO 최적화**: 메타 태그, 사이트맵, RSS
- **댓글 시스템**: 사용자 상호작용
- **카테고리/태그**: 콘텐츠 구조화`,
    
    portfolio: `- **작품 갤러리**: 이미지/비디오 최적화
- **애니메이션**: 인터랙티브한 전환 효과
- **연락처**: 문의 폼 및 소셜 링크
- **반응형 이미지**: 다양한 화면 크기 대응`
  };
  
  return considerations[appType] || '- 프로젝트 특성에 맞는 기능 구현';
}

// 에러 핸들링
process.on('unhandledRejection', (error) => {
  console.error(`${colors.red}오류가 발생했습니다:${colors.reset}`, error.message);
  process.exit(1);
});

// 실행
setupProject().catch(console.error);
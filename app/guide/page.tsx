import Link from "next/link";

export default function GuidePage() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="mb-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-8"
          >
            ← 홈으로 돌아가기
          </Link>
          <h1 className="text-5xl font-bold mb-4">📚 개발가이드</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            MVP 웹사이트 개발 및 클론 사이트 제작을 위한 베이스 프로젝트 가이드
          </p>
        </div>

        {/* 목차 */}
        <nav className="mb-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">목차</h2>
          <ul className="space-y-2">
            <li><a href="#overview" className="text-blue-600 dark:text-blue-400 hover:underline">프로젝트 개요</a></li>
            <li><a href="#quickstart" className="text-blue-600 dark:text-blue-400 hover:underline">빠른 시작</a></li>
            <li><a href="#tech-stack" className="text-blue-600 dark:text-blue-400 hover:underline">기술 스택</a></li>
            <li><a href="#workflows" className="text-blue-600 dark:text-blue-400 hover:underline">개발 워크플로우</a></li>
            <li><a href="#structure" className="text-blue-600 dark:text-blue-400 hover:underline">프로젝트 구조</a></li>
            <li><a href="#guidelines" className="text-blue-600 dark:text-blue-400 hover:underline">개발 가이드라인</a></li>
            <li><a href="#features" className="text-blue-600 dark:text-blue-400 hover:underline">향후 추가 기능</a></li>
          </ul>
        </nav>

        {/* 프로젝트 개요 */}
        <section id="overview" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">프로젝트 개요</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            이 프로젝트는 MVP 웹사이트 개발 및 클론 사이트 제작을 위한 베이스 프로젝트입니다. 
            Next.js 14와 최신 웹 기술 스택을 사용하여 빠르고 효율적인 웹사이트 개발이 가능하도록 구성되었습니다.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">🚀 MVP 사이트 개발</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                새로운 아이디어를 빠르게 구현하고 테스트
              </p>
            </div>
            <div className="p-6 bg-green-50 dark:bg-green-950 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">🔄 클론 사이트 제작</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                크롤러로 수집한 데이터를 기반으로 동일한 사이트 재구축
              </p>
            </div>
            <div className="p-6 bg-purple-50 dark:bg-purple-950 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">📦 템플릿 프로젝트</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                복제하여 새로운 프로젝트로 즉시 시작 가능
              </p>
            </div>
          </div>
        </section>

        {/* 빠른 시작 */}
        <section id="quickstart" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">빠른 시작</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">1. 프로젝트 복제</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`# 베이스 프로젝트를 새 프로젝트로 복사
cp -r base-project my-new-project
cd my-new-project

# Git 초기화 및 새 origin 연결
rm -rf .git
git init
git remote add origin <새로운-레포지토리-URL>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">2. 프로젝트 초기 설정</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`# 의존성 설치
npm install

# 프로젝트 설정 (필수!)
npm run setup`}</code>
              </pre>
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="text-sm">
                  <strong>npm run setup</strong>을 실행하면 대화형 프롬프트를 통해:
                </p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• 프로젝트 타입 선택 (클론 사이트 / MVP)</li>
                  <li>• 앱 형태 선택 (반응형, 데스크톱, 모바일, 관리자 등)</li>
                  <li>• 프로젝트 정보가 CLAUDE.md에 자동 기록됩니다</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">3. 개발 시작</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 린트 검사
npm run lint`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* 기술 스택 */}
        <section id="tech-stack" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">기술 스택</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">핵심 프레임워크</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400">▪</span>
                  <div>
                    <strong>Next.js 14</strong> - App Router 기반의 최신 React 프레임워크
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400">▪</span>
                  <div>
                    <strong>TypeScript</strong> - 타입 안정성을 위한 정적 타입 시스템
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400">▪</span>
                  <div>
                    <strong>Tailwind CSS</strong> - 유틸리티 퍼스트 CSS 프레임워크
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">상태 관리 및 라이브러리</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400">▪</span>
                  <div>
                    <strong>Zustand</strong> - 간단하고 효율적인 상태 관리
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400">▪</span>
                  <div>
                    <strong>Framer Motion</strong> - 강력한 애니메이션 라이브러리
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400">▪</span>
                  <div>
                    <strong>React Hook Form</strong> - 폼 상태 관리 및 유효성 검사
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 개발 워크플로우 */}
        <section id="workflows" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">개발 워크플로우</h2>
          
          <div className="space-y-12">
            {/* 클론 사이트 개발 */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">클론 사이트 개발 워크플로우</h3>
              <div className="space-y-6">
                <div className="pl-6 border-l-4 border-blue-600">
                  <h4 className="font-semibold mb-2">1. 에셋 준비 및 데이터 분석</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• public/ 폴더에 에셋 파일 구조적으로 배치</li>
                    <li>• HTML 구조, CSS 스타일, JavaScript 동작 패턴 파악</li>
                    <li>• 이미지, 폰트, 아이콘 등 모든 리소스 확인</li>
                  </ul>
                </div>
                
                <div className="pl-6 border-l-4 border-green-600">
                  <h4 className="font-semibold mb-2">2. 구조 복제</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 원본 사이트의 페이지 구조를 동일하게 구현</li>
                    <li>• 헤더, 네비게이션, 푸터 등 모든 컴포넌트 재현</li>
                    <li>• 반응형 디자인 브레이크포인트 복제</li>
                  </ul>
                </div>
                
                <div className="pl-6 border-l-4 border-purple-600">
                  <h4 className="font-semibold mb-2">3. 스타일 재현</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 색상, 폰트, 간격을 픽셀 단위까지 동일하게 적용</li>
                    <li>• 호버 효과, 트랜지션, 애니메이션 재현</li>
                    <li>• Tailwind CSS 커스텀 클래스로 원본 스타일 구현</li>
                  </ul>
                </div>
                
                <div className="pl-6 border-l-4 border-orange-600">
                  <h4 className="font-semibold mb-2">4. 인터랙션 구현</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Framer Motion으로 애니메이션 효과 재현</li>
                    <li>• Zustand로 상태 관리 구현</li>
                    <li>• 스크롤 이벤트, 클릭 동작 등 인터랙션 복제</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MVP 개발 */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">MVP 개발 워크플로우</h3>
              <div className="space-y-6">
                <div className="pl-6 border-l-4 border-indigo-600">
                  <h4 className="font-semibold mb-2">1. 기획 및 디자인</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 프로젝트 요구사항 정의</li>
                    <li>• UI/UX 디자인 결정</li>
                    <li>• 컴포넌트 구조 설계</li>
                  </ul>
                </div>
                
                <div className="pl-6 border-l-4 border-pink-600">
                  <h4 className="font-semibold mb-2">2. 개발</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 페이지 라우트 설정</li>
                    <li>• 컴포넌트 개발</li>
                    <li>• 상태 관리 구현</li>
                    <li>• API 연동 (필요시)</li>
                  </ul>
                </div>
                
                <div className="pl-6 border-l-4 border-teal-600">
                  <h4 className="font-semibold mb-2">3. 최적화</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 성능 최적화</li>
                    <li>• SEO 설정</li>
                    <li>• 접근성 개선</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 프로젝트 구조 */}
        <section id="structure" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">프로젝트 구조</h2>
          
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
            <code>{`base-project/
├── app/                    # Next.js 앱 라우터
│   ├── components/        # 공통 컴포넌트
│   ├── (routes)/         # 페이지 라우트
│   └── globals.css       # 전역 스타일
├── public/               # 정적 리소스
│   ├── images/          # 이미지 파일
│   ├── fonts/           # 폰트 파일
│   └── icons/           # 아이콘 파일
├── lib/                  # 유틸리티 함수
├── store/               # Zustand 스토어
└── scripts/             # 유틸리티 스크립트`}</code>
          </pre>
        </section>

        {/* 개발 가이드라인 */}
        <section id="guidelines" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">개발 가이드라인</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">코드 스타일</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>컴포넌트</strong>: 함수형 컴포넌트와 TypeScript 사용</li>
                <li>• <strong>네이밍</strong>: 컴포넌트는 PascalCase, 함수는 camelCase</li>
                <li>• <strong>파일 구조</strong>: 기능별로 폴더 구성, 관련 파일은 함께 배치</li>
                <li>• <strong>스타일링</strong>: Tailwind CSS 클래스 우선, 필요시 CSS Modules 사용</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">베스트 프랙티스</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>성능</strong>: 이미지 최적화, 코드 스플리팅, 레이지 로딩 적용</li>
                <li>• <strong>SEO</strong>: 메타 태그, 구조화된 데이터, 사이트맵 구성</li>
                <li>• <strong>접근성</strong>: WCAG 가이드라인 준수, 시맨틱 HTML 사용</li>
                <li>• <strong>보안</strong>: 환경 변수 사용, XSS 방지, HTTPS 적용</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Git 워크플로우</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# 기능 브랜치 생성
git checkout -b feature/기능명

# 변경사항 커밋
git add .
git commit -m "feat: 기능 설명"

# 푸시
git push origin feature/기능명`}</code>
            </pre>
          </div>
        </section>

        {/* 향후 추가 기능 */}
        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">향후 추가 예정 기능</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "다크 모드 지원",
              "다국어(i18n) 지원",
              "PWA 설정",
              "자동화된 테스트 환경",
              "CI/CD 파이프라인",
              "컴포넌트 문서화 (Storybook)",
              "성능 모니터링 도구"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <span className="text-2xl">⏳</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 문제 해결 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">문제 해결</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
              <h4 className="font-semibold text-red-700 dark:text-red-300">빌드 에러</h4>
              <p className="text-sm mt-1">npm run build로 사전 확인</p>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-300">타입 에러</h4>
              <p className="text-sm mt-1">TypeScript 설정 및 타입 정의 확인</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300">스타일 이슈</h4>
              <p className="text-sm mt-1">Tailwind 설정 및 PostCSS 확인</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <h4 className="font-semibold text-green-700 dark:text-green-300">라우팅 문제</h4>
              <p className="text-sm mt-1">Next.js App Router 문서 참조</p>
            </div>
          </div>
        </section>

        {/* 푸터 */}
        <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-2xl font-bold">Climate Summit</span>
                <span className="text-lg opacity-80">Kakao Impact</span>
                <span className="text-lg opacity-80">Sopoong Ventures</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                COPYRIGHT © CLIMATE NETWORK CORP ALL RIGHTS RESERVED
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                이 홈페이지는 바이브코딩으로 만들어졌습니다
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                서울특별시 성동구 왕십리로2길 20, 카우앤독 4층
              </p>
            </div>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Built with ❤️ using Next.js and modern web technologies
          </p>
        </footer>
      </div>
    </div>
  );
}
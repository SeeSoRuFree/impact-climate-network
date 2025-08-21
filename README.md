# Base Project - MVP & Clone Site Development

빠른 MVP 개발과 클론 사이트 제작을 위한 Next.js 기반 베이스 프로젝트입니다.

## 🚀 특징

- **Next.js 14 App Router** - 최신 React 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 빠른 스타일링
- **Zustand** - 간단한 상태 관리
- **Framer Motion** - 부드러운 애니메이션
- **React Hook Form** - 폼 상태 관리 및 유효성 검사
- **반응형 디자인** - 모든 디바이스 지원
- **SEO 최적화** - 검색 엔진 친화적

## 📋 시작하기

### 1. 프로젝트 복제

```bash
# 베이스 프로젝트를 새 프로젝트로 복사
cp -r base-project my-new-site
cd my-new-site

# Git 초기화
rm -rf .git
git init
git remote add origin <your-repo-url>
```

### 2. 프로젝트 초기 설정

```bash
# 의존성 설치
npm install

# 프로젝트 설정 (처음 한 번만 실행)
npm run setup
```

프로젝트 설정 시 다음을 선택하게 됩니다:
- 프로젝트 타입 (클론 사이트 / MVP)
- 앱 형태 (반응형 웹, 데스크톱, 모바일, 관리자 등)
- 프로젝트 이름

### 3. 개발 및 빌드

```bash
# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

## 🛠️ 사용 사례

### MVP 개발
- 새로운 아이디어를 빠르게 프로토타이핑
- 기본 구조와 스타일이 갖춰진 상태에서 시작
- 필요한 기능만 추가하여 빠른 출시

### 클론 사이트 제작
- 클론할 사이트의 에셋을 `public/` 폴더에 구조적으로 배치
- 원본 사이트의 구조와 디자인을 분석
- 컴포넌트 단위로 재구현

## 📁 프로젝트 구조

```
my-new-site/
├── app/
│   ├── layout.tsx        # 루트 레이아웃
│   ├── page.tsx          # 홈페이지
│   ├── globals.css       # 전역 스타일
│   └── components/       # 공통 컴포넌트
├── public/               # 정적 파일
│   ├── images/          # 이미지 파일
│   ├── fonts/           # 폰트 파일
│   └── icons/           # 아이콘 파일
├── lib/                  # 유틸리티 함수
├── store/                # Zustand 스토어
├── scripts/              # 유틸리티 스크립트
└── types/                # TypeScript 타입 정의
```

## 🔧 환경 설정

### 환경 변수
`.env.local` 파일을 생성하여 환경 변수를 설정하세요:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

### Tailwind 커스터마이징
`tailwind.config.ts`에서 색상, 폰트 등을 커스터마이징할 수 있습니다.

## 📚 주요 라이브러리

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Zustand](https://github.com/pmndrs/zustand)
- [Framer Motion](https://www.framer.com/motion/)

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 💡 팁

- **개발 속도**: Hot Reload로 빠른 개발이 가능합니다
- **컴포넌트 재사용**: 공통 컴포넌트는 `app/components`에 작성하세요
- **타입 안정성**: TypeScript를 활용하여 런타임 에러를 방지하세요
- **성능 최적화**: Next.js의 Image, Link 컴포넌트를 활용하세요

---

Built with ❤️ using Next.js and modern web technologies
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Lottie from 'lottie-react'
import newsAnimation from '../../public/news/images/news_1751611264354_s2mgha.json'

export default function NewsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section)
  }

  const programs = [
    {
      id: 1,
      icon: '/news/images/program-1_1751611264030_zvi4l.svg',
      title: '월간클라이밋',
    },
    {
      id: 2,
      icon: '/news/images/program-2_1751611264051_12e7i5.svg',
      title: '연례 기후서밋',
    },
    {
      id: 3,
      icon: '/news/images/program-3_1751611264054_gt29o.svg',
      title: '기후테크 프레스데이',
    },
    {
      id: 4,
      icon: '/news/images/program-4_1751611264055_052t9.svg',
      title: '대학 기후기술 특강',
    }
  ]

  const newsArticles = [
    {
      id: 1,
      title: '기후테크 스타트업, 미디어와 만나다',
      excerpt: '서울에서 열린 \'2024 스타트업 프레스데이 – 기후테크편\'에서 10여 개의 혁신적인 기후테크 스타트업들이 자사의 기술과 비전을 언론에 소개하는 기회를 가졌다.',
      content: '서울에서 열린 \'2024 스타트업 프레스데이 – 기후테크편\'에서 10여 개의 혁신적인 기후테크 스타트업들이 자사의 기술과 비전을 언론에 소개하는 기회를 가졌다. 이 행사는 카카오임팩트, 소풍벤처스, 스타트업얼라이언스가 공동으로 주최하고 주관했다.\n\n12월 4일 서울 강남구 스타트업얼라이언스 앤스페이스(&Space)에서 개최된 이번 행사는 스타트업 생태계를 취재하는 기자들과 스타트업들 간의 연결과 네트워킹을 지원하는 프로그램의 일환이다.\n\n참가 기업들은 전자기 에너지 하베스팅, 자원순환 가능한 패키징, 플라스틱 분해 기술, 대체 단백질 생산, 전기차 충전 시스템, 탄소회계 플랫폼, 에너지 AI 솔루션, LCA IT 솔루션, 전기비행기, 전기차 배터리 재활용 등 다양한 분야의 기후테크 솔루션을 선보였다.',
      source: '플래텀',
      sourceUrl: 'https://platum.kr/archives/246270',
      image: '/news/images/sopoong_4fb1e8d0a5fb4361beb60500470c2824_1751611264340_aw3yi8.jpg',
      date: '2024.12.05'
    },
    {
      id: 2,
      title: '"10년 내 한국에 다가올 수 있는 물 위기, 워터테크가 미래"',
      excerpt: '카카오임팩트와 소풍벤처스는 지난 27일 \'워터테크가 만드는 기후 솔루션의 미래\'라는 주제로 월간클라이밋 11월 세미나를 개최했다.',
      content: '카카오임팩트·소풍벤처스, \'워터테크가 만드는 기후 솔루션의 미래\' 세미나\n지앤지인텍, 윈텍글로비스, 지오그리드, 칼만 사례 발표\n카카오임팩트와 소풍벤처스는 지난 27일 \'워터테크가 만드는 기후 솔루션의 미래\'라는 주제로 월간클라이밋 11월 세미나를 개최했다.\n\n카카오임팩트와 소풍벤처스가 공동으로 주관·운영하는 \'월간클라이밋\'은 매월 시의성 있는 다양한 기후분야의 주제를 선정해, 관련 산업 동향, 유망 스타트업 사례를 소개하는 정기 프로그램이다. 서울 성수동 헤이그라운드 성수시작점에서 진행한 이번 11월 월간클라이밋 세미나에는 기후·물 산업 전문가, 투자자, 창업가 등이 참석했다.',
      source: '조선일보 더나은미래',
      sourceUrl: 'https://www.futurechosun.com/archives/109050',
      image: '/news/images/sopoong_65905dffe4674bc9bd3e3c77f3db862e_1751611264122_ch5gjo.jpg',
      date: '2024.11.28'
    },
    {
      id: 3,
      title: '카카오임팩트·소풍벤처스, 기후기술 혁신 위한 대학 특강 개최',
      excerpt: '카카오임팩트와 임팩트 벤처캐피탈 소풍벤처스는 지난 20일 한국에너지공과대학교에서 \'대학 기후기술 특강\'을 진행했다고 22일 밝혔다.',
      content: '카카오임팩트와 임팩트 벤처캐피탈 소풍벤처스는 지난 20일 한국에너지공과대학교에서 \'대학 기후기술 특강\'을 진행했다고 22일 밝혔다.\n\n카카오임팩트와 소풍벤처스는 기후테크 인재 발굴 및 생태계 활성화를 위해 대학 기후기술 특강을 진행해오고 있다. 올해는 지난 11월 6일 서울대에 이어 한국에너지공과대학교에서 두 번째 특강을 진행했다.',
      source: '이로운넷',
      sourceUrl: 'https://www.eroun.net/news/articleView.html?idxno=49632',
      image: '/news/images/sopoong_3cacc91d61e9449b943333d6d25a389b_1751611264124_83jjw.jpg',
      date: '2024.11.22'
    },
    {
      id: 4,
      title: '카카오임팩트·소풍벤처스, 서울대에서 \'기후테크 스타트업 특강\' 개최',
      excerpt: '카카오임팩트(이사장 류석영)와 임팩트 벤처캐피탈 소풍벤처스(대표 한상엽)는 지난 6일 서울대학교에서 대학 기후기술 특강을 진행했다.',
      content: '카카오임팩트(이사장 류석영)와 임팩트 벤처캐피탈 소풍벤처스(대표 한상엽)는 지난 6일 서울대학교에서 대학 기후기술 특강을 진행했다.\n\n본특강은 카카오임팩트와 소풍벤처스가 함께 운영하고 있는 \'카카오임팩트클라이밋\' 프로그램의 일환이다. 양 사는 기후기술 생태계 활성화를 위해 기술·공학 기반의 인재들이 유입될 수 있도록 국내 유수의 기술중점대학과 지속적으로 협력해왔다. 서울대학교에서는 지난해에 이어 두번째로 진행됐으며, 서울대학교 기후테크센터(센터장 정수종)이 협력기관으로 함께했다.',
      source: '더나은미래',
      sourceUrl: 'https://www.futurechosun.com/archives/106397',
      image: '/news/images/sopoong_25ed6db81ab349d196da0a537ab4cb9b_1751611264123_edeuoj.jpg',
      date: '2024.11.08'
    },
    {
      id: 5,
      title: '기후테크로 코스닥에 입성한 \'그리드위즈\'의 성장 스토리',
      excerpt: '올해 상반기 신규 상장한 59개 사 중 19%(11곳)이 기후 관련 기업으로 분석됐다.',
      content: '올해 상반기 신규 상장한 59개 사 중 19%(11곳)이 기후 관련 기업으로 분석됐다. 2024년 상반기 기업공개(IPO) 최대어로 꼽혔던 HD현대마린솔루션은 \'저탄소 선박 개조\', \'축 발전 시스템\' 등 친환경 솔루션으로 시장을 확장하고 있으며, 민테크, 코칩, 제일엠엔에스, 엘엔에프, 이닉스 등 이차전지 유관 기업들도 다수 포진됐다.\n\n이 중 \'그리드위즈\'는 지난 6월 코스닥에 상장한 대표적인 기후테크 기업이다. 2013년 설립된 그리드위즈는 전력수요관리를 중심으로 전기차 충전 인프라, 에너지 저장 장치(ESS) 사업 등을 펼치고 있다.',
      source: '조선일보 더나은미래',
      sourceUrl: 'https://www.futurechosun.com/archives/102204',
      image: '/news/images/sopoong_5ba56047945b479d88031e603b3f95df_1751611264121_26d1zg.jpg',
      date: '2024.10.29'
    },
    {
      id: 6,
      title: '기후위기 시대, 빅테크 기업의 AI 활용법',
      excerpt: '데이터센터는 전력을 소비하는 \'하마\'라고 말한다. 카카오 데이터센터 안산에는 에너지 절감 기술이 적용됐다.',
      content: '데이터센터는 전력을 소비하는 \'하마\'라고 말한다. 산업부 \'데이터센터 수도권 집중 완화 방안\'에 따르면 국내 데이터센터의 전력수요는 2020년 말 1762메가와트(MW)에서 2032년 7만7684MW로 폭증한다. 이중 수도권은 전체의 72.3%인 5만6149MW가 필요하다. 원전 40기가 돌아야 조달할 수 있는 수준이다.\n\n카카오 데이터센터 안산에는 이러한 문제 대응을 위한 에너지 절감 기술이 적용됐다. 올해 1월 가동을 시작한 경기도 안산시 한양대 에리카(ERICA) 캠퍼스 내에 위치한 데이터센터는 에너지 효율화 기술 중에서도 특히 \'물 사용\'을 최소화하는 데 집중했다.',
      source: '조선일보 더나은미래',
      sourceUrl: 'https://www.futurechosun.com/archives/101998',
      image: '/news/images/sopoong_dd5ec1765b194f448a4ac83b3ee6d4fd_1751611264118_jhi7fg.jpg',
      date: '2024.10.28'
    },
    {
      id: 7,
      title: '"다낭이 되어가는 서울"…기후재난에 AI의 역할은?',
      excerpt: '전문가들 사이에서는 \'AI는 기후에 악영향이다\'라는 의견과 \'AI는 기후 문제 해결에 기여할 수 있다\'라는 주장이 첨예하게 나뉘고 있다.',
      content: '"지피티(GPT)3와 같은 거대언어모델을 훈련하는 데는 약 500톤의 이산화탄소가 배출되는데, 이는 뉴욕에서 런던으로 600번 비행할 때 나오는 양이다." (2023.11, 미국 기술전문지 \'엠아이티(MIT) 테크놀로지리뷰\' 발췌)\n\n"AI를 활용한 \'구글맵\'의 \'탄소 배출량 최소화 경로 제시\' 기능으로 3년 만에 240만 톤 이상의 CO2e(온실가스를 이산화탄소로 환산한 양) 배출을 줄였다." (케이트 브랜트 구글 최고 지속가능성 책임자)\n\n전문가들 사이에서는 \'AI는 기후에 악영향이다\'라는 의견과 \'AI는 기후 문제 해결에 기여할 수 있다\'라는 주장이 첨예하게 나뉘고 있다.',
      source: '조선일보 더나은미래',
      sourceUrl: 'https://www.futurechosun.com/archives/102096',
      image: '/news/images/sopoong_180e2f40246c4f38b2ab2d9334d7420d_1751611264234_g8n3s.jpg',
      date: '2024.10.28'
    },
    {
      id: 8,
      title: '글로벌 탄소중립 2.0 시대 예고…韓 기후테크 산업 생존 위한 해결 과제는?',
      excerpt: '이유진 녹색전환연구소 소장이 지난달 26일 제주에서 열린 \'2024 클라이밋 테크 스타트업 서밋\'에서 이같이 밝혔습니다.',
      content: '이유진 녹색전환연구소 소장이 지난달 26일 제주에서 열린 \'2024 클라이밋 테크 스타트업 서밋(이하 서밋)\'에서 이같이 밝혔습니다. 그는 "2025년부터는 글로벌 탄소중립 2.0 버전이 시작될 것"이라며 화두를 던졌습니다.\n\n서밋은 소풍벤처스와 카카오임팩트가 주관하는 행사로 올해로 3회차를 맞았습니다. 2박 3일간, 기후 생태계 내 주요 이해관계자들을 한데 모여 기후대응 기회와 협력을 도모하는 것을 목표로 합니다.\n\n올해 서밋은 \'기후기술과 인공지능\'을 주제로 국내외에서 약 130명이 참석했습니다.',
      source: '그리니엄',
      sourceUrl: 'https://greenium.kr/news/57564/',
      image: '/news/images/sopoong_127bacb4dd2649d4b4ff1e8ba7c53961_1751611264223_0i5378.png',
      date: '2024.10.27'
    }
  ]

  const itemsPerPage = 6
  const totalPages = Math.ceil(newsArticles.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentArticles = newsArticles.slice(startIndex, endIndex)

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#1d1d1f]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/summit logo wh.png"
                alt="Climate Summit Logo"
                width={200}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#cecece] hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/news" className="text-white">
                News
              </Link>
              <Link href="/contents" className="text-[#cecece] hover:text-white transition-colors">
                Contents
              </Link>
              <Link href="/partners" className="text-[#cecece] hover:text-white transition-colors">
                Partners
              </Link>
            </div>

            {/* Language & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              <button className="text-[#cecece] text-sm">
                KO | EN
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden w-6 h-6 flex flex-col justify-center space-y-1"
              >
                <span className="block w-full h-0.5 bg-white"></span>
                <span className="block w-full h-0.5 bg-white"></span>
                <span className="block w-full h-0.5 bg-white"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black md:hidden"
          >
            <div className="flex justify-between items-center p-4 border-b border-[#1d1d1f]">
              <Image
                src="/news/images/logo.62f53a9_1751611264107_5sr5m.svg"
                alt="Impact Climate Network"
                width={140}
                height={24}
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-6 h-6"
              >
                <span className="text-white text-2xl">×</span>
              </button>
            </div>

            <div className="p-4">
              {/* MENU Section */}
              <div className="mb-6">
                <button
                  onClick={() => toggleAccordion('menu')}
                  className="w-full flex justify-between items-center py-3 text-white font-bold"
                >
                  <span>MENU</span>
                  <span>{activeAccordion === 'menu' ? '▲' : '▼'}</span>
                </button>
                {activeAccordion === 'menu' && (
                  <div className="pl-4 space-y-3 mt-3">
                    <Link href="/" className="block text-[#cecece]">Home</Link>
                    <Link href="/news" className="block text-white">News</Link>
                    <Link href="/contents" className="block text-[#cecece]">Contents</Link>
                    <Link href="/partners" className="block text-[#cecece]">Partners</Link>
                  </div>
                )}
              </div>

              {/* PROGRAM Section */}
              <div className="mb-6">
                <button
                  onClick={() => toggleAccordion('program')}
                  className="w-full flex justify-between items-center py-3 text-white font-bold"
                >
                  <span>PROGRAM</span>
                  <span>{activeAccordion === 'program' ? '▲' : '▼'}</span>
                </button>
                {activeAccordion === 'program' && (
                  <div className="pl-4 space-y-3 mt-3">
                    {programs.map((program) => (
                      <div key={program.id} className="flex items-start space-x-3">
                        <Image
                          src={program.icon}
                          alt={program.title}
                          width={24}
                          height={24}
                        />
                        <span className="text-[#cecece]">{program.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* FAMILIES Section */}
              <div className="mb-6">
                <button
                  onClick={() => toggleAccordion('families')}
                  className="w-full flex justify-between items-center py-3 text-white font-bold"
                >
                  <span>FAMILIES</span>
                  <span>{activeAccordion === 'families' ? '▲' : '▼'}</span>
                </button>
                {activeAccordion === 'families' && (
                  <div className="pl-4 space-y-3 mt-3">
                    <a href="https://sopoong.net" target="_blank" rel="noopener noreferrer" className="block text-[#cecece]">
                      Sopoong
                    </a>
                    <a href="https://kakaoimpact.org" target="_blank" rel="noopener noreferrer" className="block text-[#cecece]">
                      Kakao Impact
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="min-h-screen bg-black pt-16">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">NEWS</h1>
              <div className="max-w-md mx-auto">
                <Lottie
                  animationData={newsAnimation}
                  loop={true}
                  className="w-full h-48"
                />
              </div>
            </motion.div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-[#1d1d1f] rounded-lg overflow-hidden hover:border-[#3258ee] transition-all group cursor-pointer"
                >
                  <div className="aspect-video relative overflow-hidden bg-[#1d1d1f]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[#3258ee] text-sm mb-2">{article.date}</p>
                    <h2 className="text-white font-bold text-xl mb-3 line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-[#cecece] text-sm line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#cecece] text-sm">{article.source}</span>
                      <a
                        href={article.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3258ee] hover:text-[#5c7cfa] transition-colors"
                      >
                        자세히 보기 →
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-12">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-[#cecece] hover:text-white disabled:text-[#1d1d1f] transition-colors"
                >
                  ←
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-full transition-colors ${
                      currentPage === i + 1
                        ? 'bg-[#3258ee] text-white'
                        : 'text-[#cecece] hover:text-white'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-[#cecece] hover:text-white disabled:text-[#1d1d1f] transition-colors"
                >
                  →
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-[#1d1d1f]">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-[#cecece] text-lg mb-4">
              임팩트클라이밋 네트워크 프로그램에 궁금한 점이 있거나 협력을 원하시는 경우 공식 이메일을 통해 문의해주세요.
            </p>
            <a
              href="mailto:impactclimate@sopoong.net"
              className="text-[#3258ee] hover:text-[#5c7cfa] transition-colors text-xl font-medium"
            >
              impactclimate@sopoong.net
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-[#1d1d1f] py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Newsletter Section */}
            <div className="border-b border-[#1d1d1f] pb-12 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">뉴스레터 구독하기</h3>
                  <p className="text-[#cecece]">기후테크 소식을 가장 빨리 받아보세요</p>
                </div>
                <form className="flex gap-2 w-full md:w-auto">
                  <input
                    type="email"
                    placeholder="이메일 주소"
                    className="px-4 py-2 bg-transparent border border-[#1d1d1f] text-white rounded-lg focus:border-[#3258ee] focus:outline-none flex-1 md:w-64"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#3258ee] text-white font-medium rounded-lg hover:bg-[#5c7cfa] transition-colors whitespace-nowrap"
                  >
                    구독하기
                  </button>
                </form>
              </div>
            </div>

            {/* Footer Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h4 className="text-white font-bold mb-4">MENU</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-[#cecece] hover:text-white transition-colors">HOME</Link></li>
                  <li><Link href="/news" className="text-[#cecece] hover:text-white transition-colors">NEWS</Link></li>
                  <li><Link href="/contents" className="text-[#cecece] hover:text-white transition-colors">CONTENTS</Link></li>
                  <li><Link href="/partners" className="text-[#cecece] hover:text-white transition-colors">PARTNERS</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">PROGRAMS</h4>
                <ul className="space-y-2">
                  <li><Link href="/program/monthly" className="text-[#cecece] hover:text-white transition-colors">월간클라이밋</Link></li>
                  <li><Link href="/program/climate" className="text-[#cecece] hover:text-white transition-colors">연례 기후서밋</Link></li>
                  <li><Link href="/program/press" className="text-[#cecece] hover:text-white transition-colors">기후테크 프레스데이</Link></li>
                  <li><Link href="/program/course" className="text-[#cecece] hover:text-white transition-colors">대학 기후기술 특강</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">FAMILIES</h4>
                <ul className="space-y-2">
                  <li><a href="https://sopoong.net" target="_blank" rel="noopener noreferrer" className="text-[#cecece] hover:text-white transition-colors">Sopoong</a></li>
                  <li><a href="https://kakaoimpact.org" target="_blank" rel="noopener noreferrer" className="text-[#cecece] hover:text-white transition-colors">Kakao Impact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">CONNECT</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/news/images/facebook_1751611264110_cvkxlb.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/news/images/linkedin_1751611264110_p8ns98.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/news/images/youtube_1751611264114_hxbvic.svg"
                      alt="YouTube"
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#1d1d1f] pt-8">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center gap-4 mb-2">
                  <Image
                    src="/images/summit logo wh.png"
                    alt="Climate Summit Logo"
                    width={140}
                    height={24}
                  />
                  <Image
                    src="/images/kakao-white.9938a19_1751608800882_cgvfo6.svg"
                    alt="Kakao Impact"
                    width={100}
                    height={20}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <Image
                    src="/images/sopoong-white.f482780_1751608800840_n2f92g.svg"
                    alt="Sopoong Ventures"
                    width={100}
                    height={20}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-[#cecece] text-sm">
                  COPYRIGHT © CLIMATE NETWORK CORP ALL RIGHTS RESERVED
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#cecece] text-sm mb-1">
                  이 홈페이지는 바이브코딩으로 만들어졌습니다
                </p>
                <p className="text-[#cecece] text-sm">
                  서울특별시 성동구 왕십리로2길 20, 카우앤독 4층
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
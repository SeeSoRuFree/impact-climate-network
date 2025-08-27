'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function About() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko')
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      {/* Navigation */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-black/95 to-black backdrop-blur-md border-b border-transparent" 
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0,255,136,0.1), rgba(0,255,255,0.1), rgba(50,88,238,0.1))", 
          borderImage: "linear-gradient(to right, #FF4500, #00CED1, #1E90FF) 1"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/summit logo wh.png"
                alt="Climate Summit Logo"
                width={200}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="relative text-white/80 hover:text-[#FF4500] transition-all duration-300 group py-2">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF4500] to-[#00CED1] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/about" className="relative text-white/80 hover:text-[#FF4500] transition-all duration-300 group py-2">
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF4500] to-[#00CED1] scale-x-100 transition-transform duration-300" />
              </Link>
              <Link href="/program" className="relative text-white/80 hover:text-[#FF4500] transition-all duration-300 group py-2">
                Program
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF4500] to-[#00CED1] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/speakers" className="relative text-white/80 hover:text-[#FF4500] transition-all duration-300 group py-2">
                Speakers
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF4500] to-[#00CED1] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/faq" className="relative text-white/80 hover:text-[#FF4500] transition-all duration-300 group py-2">
                FAQ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF4500] to-[#00CED1] group-hover:w-full transition-all duration-300" />
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
                className="text-white/60 text-sm hover:text-white transition-colors"
              >
                {language === 'ko' ? 'KO' : 'EN'} <span className="text-white/40">|</span> {language === 'ko' ? 'EN' : 'KO'}
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
                src="/images/summit logo wh.png"
                alt="Climate Summit Logo"
                width={140}
                height={24}
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-6 h-6"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4">
              <div className="space-y-4">
                <div className="space-y-3">
                  <Link href="/" className="block text-[#cecece] py-2 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                  <Link href="/about" className="block text-[#cecece] py-2 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
                  <Link href="/program" className="block text-[#cecece] py-2 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Program
                  </Link>
                  <Link href="/speakers" className="block text-[#cecece] py-2 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Speakers
                  </Link>
                  <Link href="/faq" className="block text-[#cecece] py-2 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen bg-black pt-16">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-black to-[#0a0a0a]">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="gradient-text-ai">ABOUT</span>
              </h1>
              <p className="text-[#cecece] text-lg">
                {language === 'ko' ? '2025 기후테크 스타트업 서밋' : '2025 Climate Tech Startup Summit'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Theme Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                <span className="text-white">Reprogramming the Future:</span>
                <br />
                <span className="text-[#FF4500]">Climate Tech</span>
                <span className="text-[#1E90FF] mx-3">×</span>
                <span className="text-[#00CED1]">AI</span>
              </h2>
              <p className="text-[#cecece] text-lg leading-relaxed max-w-3xl mx-auto">
                기후위기의 해결을 위한 기술 기반 시스템 전환 — 특히 AI 기술과 기후테크의 
                결합을 통해 실현 가능한 전환 인프라를 조망하고 연결합니다.
              </p>
            </motion.div>
          </div>
        </section>


        {/* Objectives Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                기후테크 스타트업 서밋은?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-[#FF4500]/10 to-transparent rounded-lg"
                >
                  <div className="text-3xl mb-4">🎯</div>
                  <h4 className="text-lg font-bold text-white mb-2">혁신 생태계 조망</h4>
                  <p className="text-[#cecece] text-sm">
                    기후기술과 인공지능을 중심으로 한 혁신 생태계를 조망하고, 
                    기술 기반 전환을 촉진하는 협업 모델을 모색합니다.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-[#00CED1]/10 to-transparent rounded-lg"
                >
                  <div className="text-3xl mb-4">🤝</div>
                  <h4 className="text-lg font-bold text-white mb-2">AI for Climate Impact</h4>
                  <p className="text-[#cecece] text-sm">
                    더 많은 AI 자원(talent, technology, capital)이 기후문제 해결과 
                    기후임팩트 창출로 유입·연결될 수 있도록 합니다.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-[#1E90FF]/10 to-transparent rounded-lg"
                >
                  <div className="text-3xl mb-4">🌏</div>
                  <h4 className="text-lg font-bold text-white mb-2">글로벌 네트워킹</h4>
                  <p className="text-[#cecece] text-sm">
                    글로벌 기후기술 기업, 기관, 투자자와의 협력 구조를 강화하여 
                    한국형 기후테크 생태계의 확장 가능성을 제시합니다.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-[#FF4500]/10 to-transparent rounded-lg"
                >
                  <div className="text-3xl mb-4">🚀</div>
                  <h4 className="text-lg font-bold text-white mb-2">실질적 전환</h4>
                  <p className="text-[#cecece] text-sm">
                    정책 실험, 투자 촉진, 글로벌 기술 교류를 통해 
                    기술의 발전이 사회적 전환으로 연결되도록 합니다.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Organizers Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                주최/주관
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <motion.a
                  href="https://www.kakaoimpact.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="block p-6 border border-[#1d1d1f] rounded-lg bg-black/50 hover:border-[#FF4500] transition-all duration-300 cursor-pointer group"
                >
                  <Image
                    src="/images/kakao-white.9938a19_1751608800882_cgvfo6.svg"
                    alt="Kakao Impact"
                    width={150}
                    height={50}
                    className="mb-4"
                  />
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#FF4500] transition-colors">
                    카카오임팩트
                  </h4>
                  <p className="text-[#cecece] text-sm">
                    &apos;기술과 사람이 만드는 더 나은 세상&apos;을 실현하는 카카오의 기업재단입니다. 
                    사회문제 해결에 필요한 기술 기반의 임팩트 사업을 진행합니다.
                  </p>
                </motion.a>

                <motion.a
                  href="https://sopoong.net/?lang=ko-KR"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="block p-6 border border-[#1d1d1f] rounded-lg bg-black/50 hover:border-[#FF4500] transition-all duration-300 cursor-pointer group"
                >
                  <Image
                    src="/images/sopoong-white.f482780_1751608800840_n2f92g.svg"
                    alt="Sopoong"
                    width={150}
                    height={50}
                    className="mb-4"
                  />
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#FF4500] transition-colors">
                    소풍벤처스
                  </h4>
                  <p className="text-[#cecece] text-sm">
                    임팩트 투자와 액셀러레이팅으로 사회문제 해결을 촉진하는 임팩트 벤처캐피탈입니다. 
                    기술 혁신으로 시급한 문제를 해결하는 스타트업에 투자합니다.
                  </p>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-16 px-4 bg-[#0a0a0a]">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                협력
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <motion.a
                  href="https://asmemm2025.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="block p-6 border border-[#1d1d1f] rounded-lg bg-black/50 text-center hover:border-[#FF4500] transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex justify-center items-center gap-6 mb-4">
                    <Image
                      src="/images/APEC_logo3.webp"
                      alt="APEC"
                      width={100}
                      height={100}
                    />
                    <Image
                      src="/images/APEC logo_2.png"
                      alt="APEC 2025 Korea"
                      width={67}
                      height={67}
                    />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#FF4500] transition-colors">APEC</h4>
                  <p className="text-[#cecece] text-sm">
                    2025 기후테크 스타트업 서밋은 APEC 중소기업 장관회의 공식 연계프로그램으로 진행됩니다.
                  </p>
                </motion.a>

                <motion.a
                  href="https://asmemm2025.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="block p-6 border border-[#1d1d1f] rounded-lg bg-black/50 text-center hover:border-[#FF4500] transition-all duration-300 cursor-pointer group"
                >
                  <Image
                    src="/images/중소벤처기업부 logo.png"
                    alt="중소벤처기업부"
                    width={120}
                    height={60}
                    className="mx-auto mb-4"
                  />
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#FF4500] transition-colors">중소벤처기업부</h4>
                  <p className="text-[#cecece] text-sm">
                    중소벤처기업부와의 협력을 통해 스타트업 생태계 발전과 
                    기업 성장을 위한 정책적 지원을 강화합니다.
                  </p>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-[#1d1d1f]">
          <div className="container mx-auto max-w-6xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">문의하기</h3>
            <p className="text-[#cecece] text-lg mb-4">
              2025 기후테크 스타트업 서밋에 대해 궁금한 점이 있으시면 언제든 문의해주세요.
            </p>
            <a
              href="mailto:impactclimate@sopoong.net"
              className="text-[#FF4500] hover:text-[#00CED1] transition-colors text-xl font-medium"
            >
              impactclimate@sopoong.net
            </a>
          </div>
        </section>

        {/* Coming Soon Modal */}
        <AnimatePresence>
          {showComingSoon && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowComingSoon(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#333] rounded-xl max-w-md w-full p-8 text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#FF4500] to-[#00CED1] opacity-80 flex items-center justify-center">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Past Events</h3>
                  <p className="text-[#cecece] text-lg leading-relaxed">
                    현재 준비중
                  </p>
                  <p className="text-[#808080] text-sm mt-2">
                    과거 이벤트 정보를 준비하고 있습니다.
                  </p>
                </div>
                
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="px-6 py-3 bg-gradient-to-r from-[#FF4500] to-[#00CED1] text-black font-bold rounded-lg hover:scale-105 transition-transform"
                >
                  확인
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="bg-black border-t border-[#1d1d1f] py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-center">
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

      <style jsx global>{`
        .gradient-text-ai {
          background: linear-gradient(90deg, #FF4500 0%, #00CED1 25%, #1E90FF 50%, #00CED1 75%, #FF4500 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift-ai 4s ease infinite;
          background-size: 200% auto;
        }
        
        @keyframes gradient-shift-ai {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </>
  )
}
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
// import Lottie from 'lottie-react'
// import main1Animation from '../public/images/main-1_1751608800938_g2blu.json'
// import main2Animation from '../public/images/main-2_1751608800949_kzcd38.json'
// import main3Animation from '../public/images/main-3_1751608800960_b4hduh.json'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<'ko' | 'en'>('ko')
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-09-04T09:00:00+09:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setCountdown({ days, hours, minutes, seconds })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section)
  }

  const programs = [
    {
      id: 1,
      icon: '/images/program-1_1751608800816_naor36.svg',
      title: '월간클라이밋',
      description: '매월 둘째 주 목요일에 기후기술 관련 기업, 정부, 학계의 이야기를 전합니다.'
    },
    {
      id: 2,
      icon: '/images/program-2_1751608800837_os6orc.svg',
      title: '연례 기후서밋',
      description: '매년 기후기술 생태계 트렌드를 파악하고, 네트워킹할 수 있는 행사입니다.'
    },
    {
      id: 3,
      icon: '/images/program-3_1751608800838_vu9izzd.svg',
      title: '기후테크 프레스데이',
      description: '기후기술 기업의 성과와 비전을 언론과 대중에게 알리는 행사입니다.'
    },
    {
      id: 4,
      icon: '/images/program-4_1751608800839_ftd4s.svg',
      title: '대학 기후기술 특강',
      description: '대학생들에게 기후기술 산업의 현황과 미래를 소개하는 특별 강연입니다.'
    }
  ]

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-black/95 to-black backdrop-blur-md border-b border-transparent" style={{backgroundImage: "linear-gradient(to right, rgba(255,69,0,0.1), rgba(0,206,209,0.1), rgba(30,144,255,0.1))", borderImage: "linear-gradient(to right, #FF4500, #00CED1, #1E90FF) 1"}}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/summit logo wh.png"
                alt="Climate Summit Logo"
                width={200}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="relative text-white/80 hover:text-[#FF4500] transition-all duration-300 group py-2">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF4500] to-[#00CED1] scale-x-100 transition-transform duration-300" />
              </Link>
              <Link href="/about" className="relative text-white/80 hover:text-[#FF4500] transition-all duration-300 group py-2">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF4500] to-[#00CED1] group-hover:w-full transition-all duration-300" />
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

            {/* Language & CTA */}
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
                src="/images/logo.62f53a9_1751608800882_yequ2.svg"
                alt="Impact Climate Network"
                width={140}
                height={24}
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-6 h-6"
              >
                <Image
                  src="/images/close-icon_1751608800885_p4jcmq.svg"
                  alt="Close"
                  width={24}
                  height={24}
                />
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
                    <Link href="/about" className="block text-[#cecece]">About</Link>
                    <Link href="/program" className="block text-[#cecece]">Program</Link>
                    <Link href="/speakers" className="block text-[#cecece]">Speakers</Link>
                    <Link href="/faq" className="block text-[#cecece]">FAQ</Link>
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
      <main className="min-h-screen bg-black">
        {/* Hero Section - 2025 Summit */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* AI Matrix Background */}
          <div className="absolute inset-0">
            <div className="matrix-bg"></div>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-60"></div>
          
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <div className="mb-4">
                <Image
                  src="/images/summit logo wh.png"
                  alt="2025 Climate Tech Startup Summit"
                  width={600}
                  height={200}
                  className="mx-auto"
                />
              </div>
              
              <div className="mt-8 mb-12">
                <div className="inline-block px-6 py-3 mb-6 border border-[#FF4500] bg-black/50 backdrop-blur-sm rounded-full">
                  <span className="text-[#FF4500] font-bold text-sm tracking-wider">2025.09.04-06 | JEJU</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  Reprogramming the Future:
                </h2>
                <h2 className="text-3xl md:text-5xl font-bold">
                  <span className="text-[#FF4500]">AI</span>
                  <span className="text-[#1E90FF] mx-3">×</span>
                  <span className="text-[#00CED1]">Climate Tech</span>
                </h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-[#cecece] text-lg md:text-xl max-w-3xl mx-auto mb-8">
                  {language === 'ko' 
                    ? 'AI 기술과 기후테크의 융합을 통해 지속가능한 미래를 프로그래밍합니다'
                    : 'Programming a sustainable future through the convergence of AI and Climate Tech'
                  }
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  <Link href="/program" className="px-8 py-4 bg-gradient-to-r from-[#FF4500] to-[#00CED1] text-black font-bold rounded-lg hover:scale-105 transition-transform">
                    {language === 'ko' ? '프로그램 보기' : 'View Program'}
                  </Link>
                  <Link href="/speakers" className="px-8 py-4 border-2 border-[#00CED1] text-[#00CED1] font-bold rounded-lg hover:bg-[#00CED1] hover:text-white transition-all">
                    {language === 'ko' ? '연사 소개' : 'Meet Speakers'}
                  </Link>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-12 grid grid-cols-4 gap-4 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FF4500]">{countdown.days}</div>
                <div className="text-sm text-[#cecece]">{language === 'ko' ? '일' : 'DAYS'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FF4500]">{countdown.hours}</div>
                <div className="text-sm text-[#cecece]">{language === 'ko' ? '시간' : 'HOURS'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FF4500]">{countdown.minutes}</div>
                <div className="text-sm text-[#cecece]">{language === 'ko' ? '분' : 'MINUTES'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FF4500]">{countdown.seconds}</div>
                <div className="text-sm text-[#cecece]">{language === 'ko' ? '초' : 'SECONDS'}</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Summit Info Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-black to-[#0a0a0a]">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">2025 SUMMIT</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Day 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 border border-[#FF4500]/30 rounded-lg hover:border-[#FF4500] transition-colors bg-black/50"
                >
                  <div className="text-[#FF4500] font-bold mb-3">DAY 1 - 9.4(목)</div>
                  <h3 className="text-xl font-bold text-white mb-3">Beyond the Hype</h3>
                  <p className="text-[#cecece] text-sm">
                    {language === 'ko'
                      ? '기술 환상을 넘어서, 기후문제의 본질을 바라보다'
                      : 'Looking beyond tech hype to the essence of climate issues'
                    }
                  </p>
                  <div className="mt-4 text-xs text-[#00CED1]">
                    @{language === 'ko' ? '제주국제컨벤션센터' : 'Jeju International Convention Center'}
                  </div>
                </motion.div>

                {/* Day 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 border border-[#00CED1]/30 rounded-lg hover:border-[#00CED1] transition-colors bg-black/50"
                >
                  <div className="text-[#00CED1] font-bold mb-3">DAY 2 - 9.5(금)</div>
                  <h3 className="text-xl font-bold text-white mb-3">From Hype to Impact</h3>
                  <p className="text-[#cecece] text-sm">
                    {language === 'ko'
                      ? '기술이 실현한 변화의 가능성을 구체화하다'
                      : 'Materializing the potential for change realized by technology'
                    }
                  </p>
                  <div className="mt-4 text-xs text-[#FF4500]">
                    @{language === 'ko' ? '그랜드조선 제주' : 'Grand Josun Jeju'}
                  </div>
                </motion.div>

                {/* Day 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="p-6 border border-[#1E90FF]/30 rounded-lg hover:border-[#1E90FF] transition-colors bg-black/50"
                >
                  <div className="text-[#1E90FF] font-bold mb-3">DAY 3 - 9.6(토)</div>
                  <h3 className="text-xl font-bold text-white mb-3">Reprogramming the Future</h3>
                  <p className="text-[#cecece] text-sm">
                    {language === 'ko'
                      ? '공동의 미래코드 설계하다'
                      : 'Designing a shared future code'
                    }
                  </p>
                  <div className="mt-4 text-xs text-[#FF4500]">
                    @{language === 'ko' ? '그랜드조선 제주' : 'Grand Josun Jeju'}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Key Numbers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#FF4500]">3</div>
                <div className="text-[#cecece] mt-2">Days</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#00CED1]">35</div>
                <div className="text-[#cecece] mt-2">Speakers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#1E90FF]">120+</div>
                <div className="text-[#cecece] mt-2">Participants</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#FF4500]">15</div>
                <div className="text-[#cecece] mt-2">Sessions</div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* 2025 Summit Highlights */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
            >
              2025 Summit Highlights
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="card-default-layout p-6 border border-[#FF4500]/30 rounded-lg hover:border-[#FF4500] transition-colors"
              >
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  AI × Climate Tech
                </h3>
                <p className="text-[#cecece] text-sm">
                  {language === 'ko'
                    ? 'AI 기술과 기후테크의 융합을 통한 혁신적인 솔루션을 소개합니다.'
                    : 'Introducing innovative solutions through the convergence of AI technology and climate tech.'
                  }
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="card-default-layout p-6 border border-[#00CED1]/30 rounded-lg hover:border-[#00CED1] transition-colors"
              >
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Global Speakers
                </h3>
                <p className="text-[#cecece] text-sm">
                  {language === 'ko'
                    ? '35명의 국내외 전문가들이 참여하여 인사이트를 공유합니다.'
                    : '35 domestic and international experts participate to share insights.'
                  }
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="card-default-layout p-6 border border-[#1E90FF]/30 rounded-lg hover:border-[#1E90FF] transition-colors"
              >
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  APEC Partnership
                </h3>
                <p className="text-[#cecece] text-sm">
                  {language === 'ko'
                    ? 'APEC 중소기업장관회의와 연계하여 글로벌 네트워킹을 제공합니다.'
                    : 'Providing global networking in partnership with APEC SME Ministers Meeting.'
                  }
                </p>
              </motion.div>
            </div>
          </div>
        </section>




        {/* Contact Section */}
        <section className="py-16 px-4 bg-[#1d1d1f]">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-[#cecece] text-lg mb-4">
              {language === 'ko'
                ? '2025 기후테크 스타트업 서밋에 대해 궁금한 점이 있거나 협력을 원하시는 경우 공식 이메일을 통해 문의해주세요.'
                : 'If you have any questions about the 2025 Climate Tech Startup Summit or would like to collaborate, please contact us via our official email.'
              }
            </p>
            <a
              href="mailto:impactclimate@sopoong.net"
              className="text-[#1E90FF] hover:text-[#FF6347] transition-colors text-xl font-medium"
            >
              impactclimate@sopoong.net
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-[#1d1d1f] py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Image
                  src="/images/summit logo wh.png"
                  alt="Climate Summit Logo"
                  width={140}
                  height={24}
                  className="mb-2"
                />
                <p className="text-[#cecece] text-sm">
                  COPYRIGHT © CLIMATE NETWORK CORP ALL RIGHTS RESERVED
                </p>
              </div>
              <p className="text-[#cecece] text-sm">
                {language === 'ko'
                  ? '서울특별시 성동구 왕십리로2길 20, 카우앤독 4층'
                  : '4th Floor, Cow&Dog, 20 Wangsimni-ro 2-gil, Seongdong-gu, Seoul'
                }
              </p>
            </div>
          </div>
        </footer>

      </main>

      <style jsx global>{`
        .gradient-text {
          background: linear-gradient(90deg, #1E90FF 0%, #5c7cfa 50%, #1E90FF 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease infinite;
        }
        
        .gradient-text-ai {
          background: linear-gradient(90deg, #FF4500 0%, #00CED1 25%, #1E90FF 50%, #00CED1 75%, #FF4500 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift-ai 4s ease infinite;
          background-size: 200% auto;
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes gradient-shift-ai {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        .card-default-layout {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
        }
        
        .matrix-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            repeating-linear-gradient(
              0deg,
              rgba(0, 255, 136, 0.03) 0px,
              transparent 1px,
              transparent 2px,
              rgba(0, 255, 136, 0.03) 3px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(0, 255, 255, 0.03) 0px,
              transparent 1px,
              transparent 2px,
              rgba(0, 255, 255, 0.03) 3px
            );
          animation: matrix-move 20s linear infinite;
        }
        
        @keyframes matrix-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(30px, 30px);
          }
        }
      `}</style>
    </>
  )
}

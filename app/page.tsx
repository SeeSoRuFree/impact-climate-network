'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Lottie from 'lottie-react'
import main1Animation from '../public/images/main-1_1751608800938_g2blu.json'
import main2Animation from '../public/images/main-2_1751608800949_kzcd38.json'
import main3Animation from '../public/images/main-3_1751608800960_b4hduh.json'

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
  const [showComingSoon, setShowComingSoon] = useState(false)

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-black/95 to-black backdrop-blur-md border-b border-transparent" style={{backgroundImage: "linear-gradient(to right, rgba(0,255,136,0.1), rgba(0,255,255,0.1), rgba(50,88,238,0.1))", borderImage: "linear-gradient(to right, #00ff88, #00ffff, #3258ee) 1"}}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00ffff] opacity-80 animate-pulse" />
                <div className="absolute inset-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00ffff] blur-lg opacity-50" />
              </div>
              <div className="font-bold text-lg">
                <span className="text-white">2025</span>
                <span className="text-[#00ff88] mx-1">×</span>
                <span className="bg-gradient-to-r from-[#00ff88] via-[#00ffff] to-[#3258ee] bg-clip-text text-transparent">CLIMATE SUMMIT</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="relative text-white/80 hover:text-[#00ff88] transition-all duration-300 group py-2">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00ffff] scale-x-100 transition-transform duration-300" />
              </Link>
              <Link href="/about" className="relative text-white/80 hover:text-[#00ff88] transition-all duration-300 group py-2">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00ffff] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/program" className="relative text-white/80 hover:text-[#00ff88] transition-all duration-300 group py-2">
                Program
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00ffff] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/speakers" className="relative text-white/80 hover:text-[#00ff88] transition-all duration-300 group py-2">
                Speakers
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00ffff] group-hover:w-full transition-all duration-300" />
              </Link>
              <button onClick={() => setShowComingSoon(true)} className="relative text-white/80 hover:text-[#00ff88] transition-all duration-300 group py-2">
                Past Events
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00ffff] group-hover:w-full transition-all duration-300" />
              </button>
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
                    <button onClick={() => setShowComingSoon(true)} className="block text-[#cecece] text-left">Past Events</button>
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
              <div className="inline-block px-6 py-3 mb-6 border border-[#00ff88] bg-black/50 backdrop-blur-sm rounded-full">
                <span className="text-[#00ff88] font-bold text-sm tracking-wider">2025.09.04-06 | JEJU</span>
              </div>
              
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
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  Reprogramming the Future:
                </h2>
                <h2 className="text-3xl md:text-5xl font-bold">
                  <span className="text-[#00ff88]">AI</span>
                  <span className="text-[#3258ee] mx-3">×</span>
                  <span className="text-[#00ffff]">Climate Tech</span>
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
                  <Link href="/program" className="px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00ffff] text-black font-bold rounded-lg hover:scale-105 transition-transform">
                    {language === 'ko' ? '프로그램 보기' : 'View Program'}
                  </Link>
                  <Link href="/speakers" className="px-8 py-4 border-2 border-[#3258ee] text-[#3258ee] font-bold rounded-lg hover:bg-[#3258ee] hover:text-white transition-all">
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
                <div className="text-3xl md:text-4xl font-bold text-[#00ff88]">{countdown.days}</div>
                <div className="text-sm text-[#cecece]">{language === 'ko' ? '일' : 'DAYS'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#00ff88]">{countdown.hours}</div>
                <div className="text-sm text-[#cecece]">{language === 'ko' ? '시간' : 'HOURS'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#00ff88]">{countdown.minutes}</div>
                <div className="text-sm text-[#cecece]">{language === 'ko' ? '분' : 'MINUTES'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#00ff88]">{countdown.seconds}</div>
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
                  className="p-6 border border-[#00ff88]/30 rounded-lg hover:border-[#00ff88] transition-colors bg-black/50"
                >
                  <div className="text-[#00ff88] font-bold mb-3">DAY 1 - 9.4(목)</div>
                  <h3 className="text-xl font-bold text-white mb-3">Beyond the Hype</h3>
                  <p className="text-[#cecece] text-sm">
                    기술 환상을 넘어서, 기후문제의 본질을 바라보다
                  </p>
                  <div className="mt-4 text-xs text-[#00ffff]">
                    @제주국제컨벤션센터
                  </div>
                </motion.div>

                {/* Day 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 border border-[#00ffff]/30 rounded-lg hover:border-[#00ffff] transition-colors bg-black/50"
                >
                  <div className="text-[#00ffff] font-bold mb-3">DAY 2 - 9.5(금)</div>
                  <h3 className="text-xl font-bold text-white mb-3">From Hype to Impact</h3>
                  <p className="text-[#cecece] text-sm">
                    기술이 실현한 변화의 가능성을 구체화하다
                  </p>
                  <div className="mt-4 text-xs text-[#00ff88]">
                    @그랜드조선 제주
                  </div>
                </motion.div>

                {/* Day 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="p-6 border border-[#3258ee]/30 rounded-lg hover:border-[#3258ee] transition-colors bg-black/50"
                >
                  <div className="text-[#3258ee] font-bold mb-3">DAY 3 - 9.6(토)</div>
                  <h3 className="text-xl font-bold text-white mb-3">Reprogramming the Future</h3>
                  <p className="text-[#cecece] text-sm">
                    공동의 미래코드 설계하다
                  </p>
                  <div className="mt-4 text-xs text-[#00ff88]">
                    @그랜드조선 제주
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
                <div className="text-3xl md:text-4xl font-bold text-[#00ff88]">3</div>
                <div className="text-[#cecece] mt-2">Days</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#00ffff]">35</div>
                <div className="text-[#cecece] mt-2">Speakers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#3258ee]">120+</div>
                <div className="text-[#cecece] mt-2">Participants</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#00ff88]">15</div>
                <div className="text-[#cecece] mt-2">Sessions</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">ABOUT US</h2>
              <h3 className="text-xl md:text-2xl text-[#3258ee] mb-8">
                잠재력이 있는 기후 솔루션이 더 빠르고 규모있게 문제를 해결할 수 있도록
              </h3>
              <p className="text-[#cecece] text-lg max-w-4xl mx-auto leading-relaxed">
                기술만으로 기후문제를 해결할 수 없지만, 혁신적인 기후기술이 보다 빠르고 규모있는 기후문제 해결에 기여할 수 있다고 믿습니다.
                임팩트클라이밋 네트워크는 기후테크 스타트업과 혁신가들이 다양한 전문가와 지속적으로 만날 수 있는 기회를 만들고,
                이들의 전문성이 기후기술 스타트업과 직접적으로 연결될 수 있도록 지원합니다.
                더 나아가 이들의 성공사례를 집중적으로 조명하고 확산시켜 더 많은 자본과 기술, 인재가 기후문제 해결에 기여하도록 돕습니다.
              </p>
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
                className="card-default-layout p-6 border border-[#00ff88]/30 rounded-lg hover:border-[#00ff88] transition-colors"
              >
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  AI × Climate Tech
                </h3>
                <p className="text-[#cecece] text-sm">
                  AI 기술과 기후테크의 융합을 통한 혁신적인 솔루션을 소개합니다.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="card-default-layout p-6 border border-[#00ffff]/30 rounded-lg hover:border-[#00ffff] transition-colors"
              >
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Global Speakers
                </h3>
                <p className="text-[#cecece] text-sm">
                  35명의 국내외 전문가들이 참여하여 인사이트를 공유합니다.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="card-default-layout p-6 border border-[#3258ee]/30 rounded-lg hover:border-[#3258ee] transition-colors"
              >
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  APEC Partnership
                </h3>
                <p className="text-[#cecece] text-sm">
                  APEC 중소기업장관회의와 연계하여 글로벌 네트워킹을 제공합니다.
                </p>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Impact Section */}
        <section className="py-24 px-4 bg-black">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">OUR Impacts</h2>
              <p className="text-[#cecece] text-lg">
                임팩트클라이밋 네트워크가 만들어온 임팩트
              </p>
            </motion.div>

            {/* Lottie Animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <Lottie
                  animationData={main1Animation}
                  loop={true}
                  className="w-full max-w-sm"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <Lottie
                  animationData={main2Animation}
                  loop={true}
                  className="w-full max-w-sm"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <Lottie
                  animationData={main3Animation}
                  loop={true}
                  className="w-full max-w-sm"
                />
              </motion.div>
            </div>

            {/* Impact Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-5xl md:text-6xl font-bold text-[#3258ee] mb-4">+2357</h3>
                <p className="text-white text-lg font-medium">명</p>
                <p className="text-[#cecece]">임팩트클라이밋 네트워크 누적 참석자 수</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-5xl md:text-6xl font-bold text-[#3258ee] mb-4">+779</h3>
                <p className="text-white text-lg font-medium">개사</p>
                <p className="text-[#cecece]">임팩트클라이밋 네트워크 참가기관 수</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-5xl md:text-6xl font-bold text-[#3258ee] mb-4">+107</h3>
                <p className="text-white text-lg font-medium">개사</p>
                <p className="text-[#cecece]">임팩트클라이밋 네트워크 참여 스타트업 수</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-24 px-4 bg-black">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                임팩트클라이밋 네트워크는 소풍벤처스와 카카오임팩트가 함께합니다
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#1d1d1f] p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold text-white mb-4">소풍벤처스 소개</h3>
                <p className="text-[#cecece] leading-relaxed">
                  소풍벤처스는 임팩트 투자와 액셀러레이팅으로 사회문제 해결을 촉진하는 임팩트 벤처캐피탈입니다. 
                  인류 사회가 마주하고 있는 가장 시급하고 어려운 문제를 기술 혁신으로 해결하는 성장단계의 스타트업에 투자합니다.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#1d1d1f] p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold text-white mb-4">카카오임팩트 소개</h3>
                <p className="text-[#cecece] leading-relaxed">
                  카카오임팩트는 ‘기술과 사람이 만드는 더 나은 세상’을 실현하는 카카오의 기업재단입니다. 
                  돕는 사람과 돕는 기술의 가치가 사회를 이롭게 한다는 믿음을 바탕으로 사회문제 해결에 필요한 기술 기반의 임팩트 사업을 진행합니다.
                  보다 규모있는 기후 임팩트 창출을 위해 소풍벤처스와 함께 임팩트클라이밋 네트워크 프로그램을 공동으로 주관, 운영하고 있습니다.
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
              <a
                href="https://sopoong.net"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Image
                  src="/images/sopoong-white.f482780_1751608800840_n2f92g.svg"
                  alt="Sopoong"
                  width={200}
                  height={60}
                  className="group-hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                href="https://kakaoimpact.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Image
                  src="/images/kakao-white.9938a19_1751608800882_cgvfo6.svg"
                  alt="Kakao Impact"
                  width={200}
                  height={60}
                  className="group-hover:opacity-80 transition-opacity"
                />
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link
                href="/partners"
                className="inline-flex items-center gap-2 text-[#3258ee] hover:text-[#5c7cfa] transition-colors font-medium"
              >
                주요 파트너 기관 <span>→</span>
              </Link>
            </motion.div>
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
                      src="/images/facebook_1751608800886_o27oyn.svg"
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
                      src="/images/linkedin_1751608800895_4l44va.svg"
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
                      src="/images/youtube_1751608800896_vm7ie.svg"
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
                <Image
                  src="/images/logo.62f53a9_1751608800882_yequ2.svg"
                  alt="Impact Climate Network"
                  width={140}
                  height={24}
                  className="mb-2"
                />
                <p className="text-[#cecece] text-sm">
                  COPYRIGHT © CLIMATE NETWORK CORP ALL RIGHTS RESERVED
                </p>
              </div>
              <p className="text-[#cecece] text-sm">
                서울특별시 강남구 테헤란로 415 L7강남타워 8층
              </p>
            </div>
          </div>
        </footer>

        {/* Coming Soon Modal */}
        <AnimatePresence>
          {showComingSoon && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
              onClick={() => setShowComingSoon(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#333] rounded-xl p-8 max-w-md w-full text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00ffff] flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Past Events</h3>
                <p className="text-3xl font-bold text-[#00ff88] mb-2">현재 준비중</p>
                <p className="text-[#cecece] mb-8">과거 이벤트 정보를 준비하고 있습니다.</p>
                
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="px-8 py-3 bg-gradient-to-r from-[#00ff88] to-[#00ffff] text-black font-bold rounded-lg hover:scale-105 transition-transform"
                >
                  확인
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <style jsx global>{`
        .gradient-text {
          background: linear-gradient(90deg, #3258ee 0%, #5c7cfa 50%, #3258ee 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease infinite;
        }
        
        .gradient-text-ai {
          background: linear-gradient(90deg, #00ff88 0%, #00ffff 25%, #3258ee 50%, #00ffff 75%, #00ff88 100%);
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

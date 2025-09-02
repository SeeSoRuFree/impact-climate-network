'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import speakersData from '../../public/2025-summit/data/speakers.json'

interface Speaker {
  id: number
  name: string
  nameEn: string
  company: string
  companyEn: string
  position: string
  positionEn: string
  linkedin: string
  profileImage: string
  profileRound: string
  isInternational: boolean
  bio: string
  bioEn?: string
}

const typedSpeakersData = speakersData as Speaker[]

export default function Speakers() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [language, setLanguage] = useState<'ko' | 'en'>('ko')
  const [filteredSpeakers, setFilteredSpeakers] = useState(typedSpeakersData)
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Featured Speakers IDs in specified order: 이학영, 한성숙, 류석영, 이유진, 육심나, 한상엽, 박성현, Penny Freer, Roy Torbert, Anup Jain, Andrew Chang, 제현주, 지현영, 황민호, 배여름, 김기만, 윤신영, 이원재, 권순우, 한승훈, 최지영, 홍종호, 김종규, 오보영, 진영규, 김한수, 박병규, 최근형
  const featuredSpeakerIds = useMemo(() => [162, 209, 131, 199, 200, 107, 169, 193, 191, 207, 192, 108, 139, 109, 198, 148, 118, 151, 172, 142,  194, 130, 103, 135, 225, 168, 206, 203], [])
  const featuredSpeakers = useMemo(() => featuredSpeakerIds.map(id => typedSpeakersData.find(speaker => speaker.id === id)).filter(Boolean) as Speaker[], [featuredSpeakerIds])

  const openBioModal = (speaker: Speaker) => {
    if (speaker.bio) {
      setSelectedSpeaker(speaker)
    }
  }

  useEffect(() => {
    let filtered = typedSpeakersData

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(speaker =>
        speaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        speaker.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        speaker.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        speaker.companyEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        speaker.position.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Type filter
    if (filterType === 'international') {
      filtered = filtered.filter(speaker => speaker.isInternational)
    } else if (filterType === 'keynote') {
      // Featured speakers (same as Speakers section)
      filtered = filtered.filter(speaker => featuredSpeakerIds.includes(speaker.id))
    }

    // Sort All Participants alphabetically by Korean name (ㄱㄴㄷ order)
    if (filterType === 'all') {
      filtered = filtered.sort((a, b) => {
        // Put Korean names first, English-only names last
        const aIsKorean = /[가-힣]/.test(a.name)
        const bIsKorean = /[가-힣]/.test(b.name)
        
        if (aIsKorean && !bIsKorean) return -1
        if (!aIsKorean && bIsKorean) return 1
        
        // Both Korean or both English - sort alphabetically
        return a.name.localeCompare(b.name, 'ko-KR')
      })
    }

    setFilteredSpeakers(filtered)
  }, [searchTerm, filterType, featuredSpeakerIds])

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
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF4500] to-[#00CED1] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/program" className="relative text-white/80 hover:text-[#FF4500] transition-all duration-300 group py-2">
                Program
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF4500] to-[#00CED1] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/speakers" className="relative text-white/80 hover:text-[#FF4500] transition-all duration-300 group py-2">
                Speakers
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF4500] to-[#00CED1] scale-x-100 transition-transform duration-300" />
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
                <span className="gradient-text-ai">SPEAKERS</span>
              </h1>
              <p className="text-[#cecece] text-lg mb-8">
                {language === 'ko' 
                  ? '2025 기후테크 스타트업 서밋에는 이런 분들이 함께 합니다.'
                  : 'Meet innovators from around the world'
                }
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Speakers */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center"
            >
              Speakers
            </motion.h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
              {featuredSpeakers.map((speaker, index) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer relative"
                >
                  <div 
                    className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-3 rounded-full overflow-hidden border-4 border-[#FF4500]/30 group-hover:border-[#FF4500] transition-colors cursor-pointer"
                    onClick={() => openBioModal(speaker)}
                  >
                    {speaker.profileRound || speaker.profileImage ? (
                      <Image
                        src={speaker.profileRound || speaker.profileImage}
                        alt={speaker.name}
                        width={192}
                        height={192}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.nextElementSibling?.classList.remove('hidden')
                        }}
                      />
                    ) : null}
                    <div className={`w-full h-full bg-gradient-to-br from-[#FF4500]/20 to-[#00CED1]/20 flex items-center justify-center ${speaker.profileRound || speaker.profileImage ? 'hidden' : ''}`}>
                      <span className="text-4xl font-bold text-white">
                        {speaker.name.charAt(0)}
                      </span>
                    </div>
                    {speaker.bio && (
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="w-full h-full bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-4">
                          <span className="text-white text-sm font-medium bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                            {language === 'ko' ? '소개 보기' : 'View Bio'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{language === 'en' ? speaker.nameEn : speaker.name}</h3>
                    {speaker.linkedin && (
                      <a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 hover:scale-110 transition-transform duration-200"
                      >
                        <Image
                          src="/images/linkedin.png"
                          alt="LinkedIn"
                          width={20}
                          height={20}
                          className="opacity-70 hover:opacity-100 transition-opacity"
                        />
                      </a>
                    )}
                  </div>
                  <p className="text-[#00CED1] mb-1 text-sm sm:text-base">{language === 'en' ? speaker.companyEn : speaker.company}</p>
                  <p className="text-[#cecece] text-xs sm:text-sm mb-2">{language === 'en' ? speaker.positionEn : speaker.position}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4 sticky top-16 bg-black/95 backdrop-blur-sm z-40 border-y border-[#1d1d1f]">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder={language === 'ko' ? '참가자 검색...' : 'Search participants...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 bg-transparent border border-[#1d1d1f] text-white rounded-lg focus:border-[#FF4500] focus:outline-none"
              />
              <div className="flex gap-2">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    filterType === 'all'
                      ? 'bg-[#FF4500] text-black'
                      : 'bg-transparent border border-[#1d1d1f] text-[#cecece] hover:text-white'
                  }`}
                >
                  {language === 'ko' ? '전체' : 'All'}
                </button>
                <button
                  onClick={() => setFilterType('international')}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    filterType === 'international'
                      ? 'bg-[#FF4500] text-black'
                      : 'bg-transparent border border-[#1d1d1f] text-[#cecece] hover:text-white'
                  }`}
                >
                  {language === 'ko' ? '해외 참가자' : 'International'}
                </button>
                <button
                  onClick={() => setFilterType('keynote')}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    filterType === 'keynote'
                      ? 'bg-[#FF4500] text-black'
                      : 'bg-transparent border border-[#1d1d1f] text-[#cecece] hover:text-white'
                  }`}
                >
                  {language === 'ko' ? '주요 연사' : 'Keynote'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Participants Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center"
            >
              All Participants
            </motion.h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              {filteredSpeakers.map((speaker, index) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: (index % 12) * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-black/50 to-[#1a1a1a]/50 border border-[#1d1d1f] rounded-lg p-4 hover:border-[#FF4500]/50 transition-all duration-300 group"
                >
                  <div 
                    className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2 sm:mb-3 rounded-full overflow-hidden border-2 border-[#1d1d1f] group-hover:border-[#FF4500] transition-colors cursor-pointer"
                    onClick={() => openBioModal(speaker)}
                  >
                    {speaker.profileImage || speaker.profileRound ? (
                      <Image
                        src={speaker.profileRound || speaker.profileImage}
                        alt={speaker.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.nextElementSibling?.classList.remove('hidden')
                        }}
                      />
                    ) : null}
                    <div className={`w-full h-full bg-gradient-to-br from-[#1d1d1f] to-black flex items-center justify-center ${speaker.profileImage || speaker.profileRound ? 'hidden' : ''}`}>
                      <span className="text-2xl font-bold text-[#cecece] group-hover:text-white transition-colors">
                        {speaker.name.charAt(0)}
                      </span>
                    </div>
                    {speaker.bio && (
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="w-full h-full bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-2">
                          <span className="text-white text-xs font-medium bg-black/60 px-2 py-1 rounded-full backdrop-blur-sm">
                            {language === 'ko' ? '소개 보기' : 'View Bio'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-center mb-3">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="text-base font-bold text-white group-hover:text-[#FF4500] transition-colors">
                        {language === 'en' ? speaker.nameEn : speaker.name}
                      </h3>
                      {speaker.linkedin && (
                        <a
                          href={speaker.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 hover:scale-110 transition-transform duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Image
                            src="/images/linkedin.png"
                            alt="LinkedIn"
                            width={16}
                            height={16}
                            className="opacity-70 hover:opacity-100 transition-opacity"
                          />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-[#00CED1] mb-1">{language === 'en' ? speaker.companyEn : speaker.company}</p>
                    <p className="text-xs text-[#808080] mb-2">{language === 'en' ? speaker.positionEn : speaker.position}</p>
                  </div>
                  {speaker.isInternational && (
                    <div className="text-center mb-3">
                      <span className="inline-block px-2 py-1 bg-[#00CED1]/20 text-[#00CED1] text-xs rounded-full">
                        International
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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

        {/* Bio Modal */}
        <AnimatePresence>
          {selectedSpeaker && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedSpeaker(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#333] rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#FF4500]">
                      {selectedSpeaker.profileRound || selectedSpeaker.profileImage ? (
                        <Image
                          src={selectedSpeaker.profileRound || selectedSpeaker.profileImage}
                          alt={selectedSpeaker.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#FF4500]/20 to-[#00CED1]/20 flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">
                            {selectedSpeaker.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {language === 'en' ? selectedSpeaker.nameEn : selectedSpeaker.name}
                      </h3>
                      <p className="text-[#00CED1] text-sm mb-1">
                        {language === 'en' ? selectedSpeaker.companyEn : selectedSpeaker.company}
                      </p>
                      <p className="text-[#cecece] text-sm">
                        {language === 'en' ? selectedSpeaker.positionEn : selectedSpeaker.position}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSpeaker(null)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="border-t border-[#333] pt-4">
                  <p className="text-[#cecece] leading-relaxed whitespace-pre-line">
                    {language === 'en' && selectedSpeaker.bioEn ? selectedSpeaker.bioEn : selectedSpeaker.bio}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
                className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#333] rounded-xl p-8 max-w-md w-full text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#FF4500] to-[#00CED1] flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Coming Soon</h3>
                <p className="text-[#cecece] mb-6">
                  {language === 'ko' ? '연사 정보가 곧 업데이트됩니다. 조금만 기다려주세요!' : 'Speaker information will be updated soon. Please wait!'}
                </p>
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="px-6 py-2 bg-gradient-to-r from-[#FF4500] to-[#00CED1] text-black font-bold rounded-lg hover:scale-105 transition-transform"
                >
                  {language === 'ko' ? '확인' : 'OK'}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
        
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
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
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import speakersData from '../../public/2025-summit/data/speakers.json'

export default function Speakers() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [language, setLanguage] = useState<'ko' | 'en'>('ko')
  const [filteredSpeakers, setFilteredSpeakers] = useState(speakersData)
  const [expandedBios, setExpandedBios] = useState<Set<number>>(new Set())
  const [showComingSoon, setShowComingSoon] = useState(false)
  
  // Featured Speakers IDs: 박성현, 제현주, 육심나, 한상엽, 김효은, 윤신영, 지현영, 류석영
  const featuredSpeakerIds = [169, 108, 200, 107, 114, 118, 139, 131]
  const featuredSpeakers = speakersData.filter(speaker => featuredSpeakerIds.includes(speaker.id))

  const toggleBio = (speakerId: number) => {
    setExpandedBios(prev => {
      const newSet = new Set(prev)
      if (newSet.has(speakerId)) {
        newSet.delete(speakerId)
      } else {
        newSet.add(speakerId)
      }
      return newSet
    })
  }

  useEffect(() => {
    let filtered = speakersData

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

    setFilteredSpeakers(filtered)
  }, [searchTerm, filterType])

  return (
    <>
      {/* Navigation */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-black/95 to-black backdrop-blur-md border-b border-transparent" 
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0,255,136,0.1), rgba(0,255,255,0.1), rgba(50,88,238,0.1))", 
          borderImage: "linear-gradient(to right, #00ff88, #00ffff, #3258ee) 1"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
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

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="relative text-white/80 hover:text-[#00ff88] transition-all duration-300 group py-2">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00ffff] group-hover:w-full transition-all duration-300" />
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
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00ffff] scale-x-100 transition-transform duration-300" />
              </Link>
              <button 
                onClick={() => setShowComingSoon(true)}
                className="relative text-white/80 hover:text-[#00ff88] transition-all duration-300 group py-2"
              >
                Past Events
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00ffff] group-hover:w-full transition-all duration-300" />
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
                className="text-white/60 text-sm hover:text-white transition-colors"
              >
                {language === 'ko' ? 'KO' : 'EN'} <span className="text-white/40">|</span> {language === 'ko' ? 'EN' : 'KO'}
              </button>
            </div>
          </div>
        </div>
      </nav>

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
              <p className="text-[#cecece] text-lg">
                {language === 'ko' 
                  ? '기후테크와 AI의 미래를 이끌어갈 40명 이상의 전문가들'
                  : 'Over 40 experts leading the future of Climate Tech and AI'
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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                    className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#00ff88]/30 group-hover:border-[#00ff88] transition-colors cursor-pointer"
                    onClick={() => speaker.bio && toggleBio(speaker.id)}
                  >
                    {speaker.profileRound || speaker.profileImage ? (
                      <img
                        src={speaker.profileRound || speaker.profileImage}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.nextElementSibling?.classList.remove('hidden')
                        }}
                      />
                    ) : null}
                    <div className={`w-full h-full bg-gradient-to-br from-[#00ff88]/20 to-[#00ffff]/20 flex items-center justify-center ${speaker.profileRound || speaker.profileImage ? 'hidden' : ''}`}>
                      <span className="text-4xl font-bold text-white">
                        {speaker.name.charAt(0)}
                      </span>
                    </div>
                    {speaker.bio && (
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
                        <motion.div
                          animate={{ 
                            scale: expandedBios.has(speaker.id) ? 1.1 : 1,
                            opacity: expandedBios.has(speaker.id) ? 1 : 0.7
                          }}
                          transition={{ duration: 0.2 }}
                          className="w-8 h-8 bg-[#00ff88]/80 rounded-full flex items-center justify-center"
                        >
                          <motion.svg
                            animate={{ rotate: expandedBios.has(speaker.id) ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-4 h-4 text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </motion.div>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
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
                  <p className="text-[#00ff88] mb-2">{speaker.company}</p>
                  <p className="text-[#cecece] text-sm mb-3">{speaker.position}</p>
                  {speaker.bio && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: expandedBios.has(speaker.id) ? 'auto' : 0,
                        opacity: expandedBios.has(speaker.id) ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden mt-3"
                    >
                      <div className="px-2 py-3 border-t border-[#1d1d1f]/50">
                        <p className="text-[#808080] text-sm leading-relaxed whitespace-pre-line text-left">{speaker.bio}</p>
                      </div>
                    </motion.div>
                  )}
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
                placeholder="참가자 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 bg-transparent border border-[#1d1d1f] text-white rounded-lg focus:border-[#00ff88] focus:outline-none"
              />
              <div className="flex gap-2">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    filterType === 'all'
                      ? 'bg-[#00ff88] text-black'
                      : 'bg-transparent border border-[#1d1d1f] text-[#cecece] hover:text-white'
                  }`}
                >
                  전체
                </button>
                <button
                  onClick={() => setFilterType('international')}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    filterType === 'international'
                      ? 'bg-[#00ff88] text-black'
                      : 'bg-transparent border border-[#1d1d1f] text-[#cecece] hover:text-white'
                  }`}
                >
                  해외 참가자
                </button>
                <button
                  onClick={() => setFilterType('keynote')}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    filterType === 'keynote'
                      ? 'bg-[#00ff88] text-black'
                      : 'bg-transparent border border-[#1d1d1f] text-[#cecece] hover:text-white'
                  }`}
                >
                  주요 연사
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSpeakers.map((speaker, index) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: (index % 12) * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-black/50 to-[#1a1a1a]/50 border border-[#1d1d1f] rounded-lg p-4 hover:border-[#00ff88]/50 transition-all duration-300 group"
                >
                  <div 
                    className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-[#1d1d1f] group-hover:border-[#00ff88] transition-colors cursor-pointer"
                    onClick={() => speaker.bio && toggleBio(speaker.id)}
                  >
                    {speaker.profileImage || speaker.profileRound ? (
                      <img
                        src={speaker.profileRound || speaker.profileImage}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
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
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
                        <motion.div
                          animate={{ 
                            scale: expandedBios.has(speaker.id) ? 1.1 : 1,
                            opacity: expandedBios.has(speaker.id) ? 1 : 0.7
                          }}
                          transition={{ duration: 0.2 }}
                          className="w-6 h-6 bg-[#00ff88]/80 rounded-full flex items-center justify-center"
                        >
                          <motion.svg
                            animate={{ rotate: expandedBios.has(speaker.id) ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-3 h-3 text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-center mb-3">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="text-base font-bold text-white group-hover:text-[#00ff88] transition-colors">
                        {speaker.name}
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
                    <p className="text-sm text-[#00ff88] mb-1">{speaker.company}</p>
                    <p className="text-xs text-[#808080] mb-2">{speaker.position}</p>
                  </div>
                  {speaker.isInternational && (
                    <div className="text-center mb-3">
                      <span className="inline-block px-2 py-1 bg-[#00ffff]/20 text-[#00ffff] text-xs rounded-full">
                        International
                      </span>
                    </div>
                  )}
                  
                  {/* Bio Expansion Panel */}
                  {speaker.bio && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: expandedBios.has(speaker.id) ? 'auto' : 0,
                        opacity: expandedBios.has(speaker.id) ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden mt-3"
                    >
                      <div className="px-2 py-3 border-t border-[#1d1d1f]/50">
                        <p className="text-[#cecece] text-xs leading-relaxed whitespace-pre-line text-left">{speaker.bio}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {filteredSpeakers.length === 0 && (
              <div className="text-center py-16">
                <p className="text-[#cecece]">검색 결과가 없습니다.</p>
              </div>
            )}
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
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00ffff] opacity-80 flex items-center justify-center">
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
                  className="px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00ffff] text-black font-bold rounded-lg hover:scale-105 transition-transform"
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
      </main>

      <style jsx global>{`
        .gradient-text-ai {
          background: linear-gradient(90deg, #00ff88 0%, #00ffff 25%, #3258ee 50%, #00ffff 75%, #00ff88 100%);
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
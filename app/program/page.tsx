'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Program() {
  const [selectedDay, setSelectedDay] = useState(1)
  const [language, setLanguage] = useState<'ko' | 'en'>('ko')
  const [selectedSession, setSelectedSession] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSessionModal = (session: any) => {
    setSelectedSession(session)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedSession(null)
  }

  const dayTabs = [
    { id: 1, date: '9.4(목)', title: 'Beyond the Hype', venue: '제주국제컨벤션센터 삼다홀' },
    { id: 2, date: '9.5(금)', title: 'From Hype to Impact', venue: '그랜드조선 제주 한라홀' },
    { id: 3, date: '9.6(토)', title: 'Reprogramming the Future', venue: '그랜드조선 제주 한라홀' }
  ]

  const programs = {
    1: {
      title: 'Beyond the Hype',
      subtitle: '기술 환상을 넘어서, 기후문제의 본질을 바라보다',
      sessions: [
        {
          time: '13:30-13:50',
          title: '오프닝',
          description: '환영사 및 축사',
          detailedDescription: '2025 기후테크 스타트업 서밋의 공식 개막을 알리는 오프닝 세션입니다. 기후테크 생태계의 주요 인사들이 참석하여 환영사와 축사를 진행합니다.',
          speakers: [
            { name: '류석영', title: '카카오임팩트 이사장', image: '/2025-summit/speakers/profile/류석영_카카오임팩트.png' },
            { name: '이학영', title: '국회 부의장', image: '/2025-summit/speakers/profile/이학영_국회 부의장님.jpg' },
            { name: '한성숙', title: '중소벤처기업 장관', image: '' }
          ]
        },
        {
          time: '13:50-14:10',
          title: '오프닝 톡',
          description: 'Why Reprogramming the Future?',
          detailedDescription: '미래를 새롭게 프로그래밍 해야하는 이유와 기후테크의 필요성에 대해 이야기 합니다. 3일간 이어질 첫 신호탄이 되는 시간입니다.',
          speakers: [
            { name: '육심나', title: '카카오 ESG 부사장 / 카카오임팩트 사무총장', image: '/2025-summit/speakers/profile/육심나_카카오.jpg' }
          ]
        },
        {
          time: '14:10-14:40',
          title: '키노트 세션',
          description: 'From Silos to Systems: Reprogramming Climate AI for a Sustainable Future',
          detailedDescription: 'AI 반도체 전문기업 리벨리온의 박성현 CEO가 기후 AI의 미래와 지속가능한 시스템 구축에 대한 비전을 제시합니다.',
          speakers: [
            { name: '박성현', title: '리벨리온 CEO', image: '/2025-summit/speakers/profile/박성현_리벨리온.jpg' }
          ]
        },
        {
          time: '14:40-15:10',
          title: '키노트 대담',
          description: '미래를 프로그래밍하다',
          detailedDescription: '인비저닝파트너스 제현주 대표와 리벨리온 박성현 CEO가 기후테크와 AI의 미래 방향성에 대해 심도있는 대화를 나눕니다.',
          speakers: [
            { name: '제현주', title: '인비저닝파트너스 대표', image: '/2025-summit/speakers/profile/제현주_인비저닝파트너스.jpg' },
            { name: '박성현', title: '리벨리온 CEO', image: '/2025-summit/speakers/profile/박성현_리벨리온.jpg' }
          ]
        },
        {
          time: '15:30-16:45',
          title: '인사이트 세션 1',
          description: 'Here and Now, 기후AI 생태계의 현재를 말하다',
          detailedDescription: '참가자들에게 기후와 기술, 자본과 정책이 교차하는 지금의 좌표를 짚고 이후 논의의 출발선(grounding)을 만들어주는 역할을 하는 세션입니다. 기후·기후기술·재원·AI 등 각 축에서 정책·시장의 시차를 확인하고, 생태계 현재 좌표 공유하고, 도전과제에 대해 논의합니다.',
          speakers: [
            { name: '지현영', title: '서울대학교 환경·에너지법정책센터 변호사', image: '' },
            { name: '황민호', title: '카카오 AI네이티브 전략리더', image: '' },
            { name: '김기만', title: '중소벤처기업연구원 부연구위원/ 탄소중립녹색성장위원회 전문위원', image: '' },
            { name: '배여름', title: 'Cleantech Group, Managing Director, APAC', image: '' },
            { name: '한상엽', title: '소풍벤처스 대표이사', image: '' },
            { name: '윤신영', title: '한국과학기술미디어센터 미디어국장/과학저널리스트', image: '' }
          ]
        },
        {
          time: '16:30-17:20',
          title: '패널토크',
          description: '기후AI의 현재와 미래',
          detailedDescription: '이원재 모더레이터의 진행으로 기후AI 분야의 전문가들이 현재와 미래에 대해 토론합니다.',
          speakers: [
            { name: '이원재', title: '모더레이터', image: '/2025-summit/speakers/profile/이원재_모더레이터.jpg' },
            { name: '패널 1', title: '전문가', image: '' },
            { name: '패널 2', title: '전문가', image: '' },
            { name: '패널 3', title: '전문가', image: '' },
            { name: '패널 4', title: '전문가', image: '' },
            { name: '패널 5', title: '전문가', image: '' }
          ]
        }
      ]
    },
    2: {
      title: 'From Hype to Impact',
      subtitle: '기술이 실현한 변화의 가능성을 구체화하다',
      sessions: [
        {
          time: '09:40-10:00',
          title: '2일차 오프닝',
          description: '모닝브리핑 & Open MIC',
          detailedDescription: '2일차를 시작하며 참가자들과 함께 모닝 브리핑과 자유 발언 시간을 갖습니다.',
          speakers: []
        },
        {
          time: '10:00-10:50',
          title: '케이스 세션',
          description: 'Case Studies: Reprogramming Climate AI at Scale',
          detailedDescription: 'New Energy Nexus의 Andrew Chang과 베이징 금문법률사무소 한승훈 변호사가 대규모 기후AI 프로젝트의 성공 사례들을 소개합니다.',
          speakers: [
            { name: 'Andrew Chang', title: 'New Energy Nexus', image: '/2025-summit/speakers/profile/andrew_chang.jpg' },
            { name: '한승훈', title: '베이징 금문법률사무소 변호사', image: '/2025-summit/speakers/profile/한승훈_베이징.jpg' }
          ]
        },
        {
          time: '11:10-12:00',
          title: '딥다이브 세션 1 - 투자',
          description: 'Reprogramming Capital: What Will Make Climate AI Investable?',
          detailedDescription: '글로벌 투자 전문가들이 기후AI 스타트업에 대한 투자 관점과 기준에 대해 논의합니다.',
          speakers: [
            { name: 'Max Han', title: '투자 전문가', image: '' },
            { name: 'Penny Freer', title: '투자 전문가', image: '' },
            { name: 'Roy Torbert', title: '투자 전문가', image: '' },
            { name: 'Anup Jain', title: '투자 전문가', image: '' }
          ]
        },
        {
          time: '13:10-13:25',
          title: '스페셜 세션',
          description: 'Building the Industrial Climate Tech Ecosystem Together',
          detailedDescription: '글로벌산업탈탄소허브 김효은 대표가 산업 기후테크 생태계 구축 방안에 대해 발표합니다.',
          speakers: [
            { name: '김효은', title: '글로벌산업탈탄소허브 대표', image: '/2025-summit/speakers/profile/김효은_글로벌산업탈탄소허브.jpg' }
          ]
        },
        {
          time: '13:30-14:40',
          title: '스타트업 피칭',
          description: 'Startup Pitching Stage (8팀)',
          speakers: ['최지영 (코리아스타트업포럼)', '스타트업 8팀']
        },
        {
          time: '15:00-16:00',
          title: '딥다이브 세션 2 - 에너지와 AI',
          description: 'Powering Intelligence: Rethinking Energy for AI Infrastructure',
          speakers: ['홍종호', '오보영', '김종규', '김선교']
        },
        {
          time: '16:10-16:40',
          title: '인사이트 세션 2',
          description: '그린인프라 및 데이터 브리핑',
          speakers: ['김한수 (경기연구원)', '박병규 (시소)']
        },
        {
          time: '16:50-17:50',
          title: '워크숍 / 라운드테이블',
          description: 'Hands-on Workshop & Leaders Round Table',
          speakers: []
        }
      ]
    },
    3: {
      title: 'Reprogramming the Future',
      subtitle: '공동의 미래코드 설계하다',
      sessions: [
        {
          time: '10:00-10:20',
          title: '모닝브리핑',
          description: '1~2일차 랩업 & Open MIC',
          detailedDescription: '지난 이틀간의 세션 내용을 정리하고 참가자들의 자유로운 의견 공유 시간을 갖습니다.',
          speakers: []
        },
        {
          time: '10:20-10:40',
          title: '인사이트 세션 3',
          description: 'Reprogramming Impact',
          detailedDescription: '기후환경에너지비서관 이유진 비서관이 기후테크가 사회에 미치는 실질적 영향에 대해 말씩드립니다.',
          speakers: [
            { name: '이유진', title: '기후환경에너지비서관', image: '/2025-summit/speakers/profile/이유진_기후환경에너지비서관.jpg' }
          ]
        },
        {
          time: '10:50-11:25',
          title: 'Next System Builder',
          description: '새로운 시스템 구축 사례',
          detailedDescription: '미래를 위한 새로운 시스템을 직접 구축하고 있는 전문가와 바이브코딩 팀이 실제 사례를 공유합니다.',
          speakers: [
            { name: '김한수', title: '시스템 빌더', image: '' },
            { name: '바이브코딩 팀', title: '바이브코딩', image: '' }
          ]
        },
        {
          time: '11:25-11:40',
          title: '클로징',
          description: 'Closing Declaration & Open Mic',
          detailedDescription: '3일간의 서밋을 마무리하며 참가자들과 함께 미래에 대한 비전을 선언하고 자유 발언 시간을 갖습니다.',
          speakers: []
        }
      ]
    }
  }

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
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00ffff] scale-x-100 transition-transform duration-300" />
              </Link>
              <Link href="/speakers" className="relative text-white/80 hover:text-[#00ff88] transition-all duration-300 group py-2">
                Speakers
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00ffff] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/past-events" className="relative text-white/80 hover:text-[#00ff88] transition-all duration-300 group py-2">
                Past Events
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00ffff] group-hover:w-full transition-all duration-300" />
              </Link>
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
                <span className="gradient-text-ai">PROGRAM</span>
              </h1>
              <p className="text-[#cecece] text-lg mb-8">
                {language === 'ko' 
                  ? '3일간의 혁신적인 프로그램을 확인하세요'
                  : 'Discover 3 days of innovative programming'
                }
              </p>

              {/* Language Toggle for Timetable Images */}
              <div className="mb-8">
                <a 
                  href={`/2025-summit/timetable/timetable-${language}.jpg`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00ffff] text-black font-bold rounded-lg hover:scale-105 transition-transform"
                >
                  타임테이블 다운로드 ({language === 'ko' ? '한국어' : 'English'})
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Day Tabs */}
        <section className="sticky top-16 bg-black/95 backdrop-blur-sm z-40 border-b border-[#1d1d1f]">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col md:flex-row justify-center gap-4 py-4">
              {dayTabs.map((day) => (
                <button
                  key={day.id}
                  onClick={() => setSelectedDay(day.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedDay === day.id
                      ? 'bg-gradient-to-r from-[#00ff88] to-[#00ffff] text-black scale-105'
                      : 'bg-transparent border border-[#1d1d1f] text-[#cecece] hover:text-white hover:border-[#00ff88]'
                  }`}
                >
                  <div className="text-sm mb-1">DAY {day.id}</div>
                  <div className="font-bold">{day.date}</div>
                  <div className="text-xs mt-1">{day.title}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Program Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              key={selectedDay}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {programs[selectedDay as keyof typeof programs].title}
                </h2>
                <p className="text-[#cecece] text-lg">
                  {programs[selectedDay as keyof typeof programs].subtitle}
                </p>
                <p className="text-[#00ff88] mt-2">
                  📍 {dayTabs[selectedDay - 1].venue}
                </p>
              </div>

              <div className="space-y-6">
                {programs[selectedDay as keyof typeof programs].sessions.map((session, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => openSessionModal(session)}
                    className="p-6 border border-[#1d1d1f] rounded-lg hover:border-[#00ff88] transition-colors bg-black/50 cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="md:w-32 flex-shrink-0">
                        <span className="text-[#00ff88] font-bold">{session.time}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{session.title}</h3>
                        {session.description && (
                          <p className="text-[#cecece] mb-3">{session.description}</p>
                        )}
                        {session.speakers && session.speakers.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {session.speakers.map((speaker: any, idx: number) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-[#1d1d1f] text-[#00ffff] text-sm rounded-full"
                              >
                                {typeof speaker === 'string' ? speaker : speaker.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Special Events */}
              {selectedDay === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-12 p-8 border-2 border-[#00ff88] rounded-lg bg-gradient-to-br from-[#00ff88]/10 to-transparent"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">🎉 웰컴디너</h3>
                  <p className="text-[#cecece]">
                    18:30 - 20:00 | 1일차 행사 후 네트워킹 디너
                  </p>
                </motion.div>
              )}

              {selectedDay === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-12 p-8 border-2 border-[#3258ee] rounded-lg bg-gradient-to-br from-[#3258ee]/10 to-transparent"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">🍽️ 공식 만찬</h3>
                  <p className="text-[#cecece]">
                    18:30 - 20:00 | 서밋 종료 후 페어웰 파티
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>


        {/* Session Detail Modal */}
        <AnimatePresence>
          {isModalOpen && selectedSession && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#333] rounded-xl max-w-5xl w-full max-h-[85vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative p-6 border-b border-[#333]">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-[#cecece] hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <div className="pr-8">
                    <div className="text-[#00ff88] font-bold text-sm mb-2">{selectedSession.time}</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{selectedSession.title}</h2>
                    {selectedSession.description && (
                      <p className="text-[#cecece] text-lg">{selectedSession.description}</p>
                    )}
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 overflow-y-auto flex-1">
                  {/* Detailed Description */}
                  {selectedSession.detailedDescription && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">세션 소개</h3>
                      <p className="text-[#cecece] leading-relaxed">{selectedSession.detailedDescription}</p>
                    </div>
                  )}

                  {/* Speakers */}
                  {selectedSession.speakers && selectedSession.speakers.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-white mb-6">연사진</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {selectedSession.speakers.map((speaker: any, idx: number) => {
                          // Handle both string and object speakers
                          const speakerName = typeof speaker === 'string' ? speaker : speaker.name;
                          const speakerTitle = typeof speaker === 'string' ? '' : speaker.title;
                          const speakerImage = typeof speaker === 'string' ? '' : speaker.image;
                          
                          return (
                            <div key={idx} className="flex flex-col items-center text-center group">
                              {/* Speaker Image */}
                              <div className="w-24 h-24 mb-4 relative">
                                {speakerImage ? (
                                  <Image
                                    src={speakerImage}
                                    alt={speakerName}
                                    width={96}
                                    height={96}
                                    className="w-full h-full rounded-full object-cover border-2 border-[#333] group-hover:border-[#00ff88] transition-colors"
                                  />
                                ) : (
                                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#333] to-[#1a1a1a] border-2 border-[#333] group-hover:border-[#00ff88] transition-colors flex items-center justify-center">
                                    <span className="text-[#00ff88] text-2xl font-bold">
                                      {speakerName.charAt(0)}
                                    </span>
                                  </div>
                                )}
                              </div>
                              
                              {/* Speaker Info */}
                              <h4 className="text-white font-bold text-lg mb-1">{speakerName}</h4>
                              {speakerTitle && (
                                <p className="text-[#00ffff] text-sm">{speakerTitle}</p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
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
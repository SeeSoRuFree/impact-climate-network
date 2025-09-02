'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface SpeakerType {
  name: string
  title?: string
  role?: string
  company?: string
  image?: string
}

interface SessionType {
  time: string
  title: string
  speaker?: string
  speakers?: Array<string | SpeakerType>
  description?: string
  detailedDescription?: string
  tag?: string
}

export default function Program() {
  const [selectedDay, setSelectedDay] = useState(1)
  const [language, setLanguage] = useState<'ko' | 'en'>('ko')
  const [selectedSession, setSelectedSession] = useState<SessionType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openSessionModal = (session: SessionType) => {
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
            { name: '한성숙', title: '중소벤처기업 장관', image: '/images/speakers/한성숙.jpeg' }
          ]
        },
        {
          time: '13:50-14:10',
          title: '오프닝 톡',
          description: 'Why Reprogramming the Future?',
          detailedDescription: '미래를 새롭게 프로그래밍 해야하는 이유와 기후테크의 필요성에 대해 이야기 합니다. 3일간 이어질 첫 신호탄이 되는 시간입니다.',
          speakers: [
            { name: '육심나', title: '카카오 ESG 부사장 / 카카오임팩트 사무총장', image: '/2025-summit/speakers/round/육심나_카카오임팩트_프로필라운드.png' }
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
            { name: '지현영', title: '서울대학교 환경·에너지법정책센터 변호사', image: '/2025-summit/speakers/round/지현영_서울대학교 환경에너지 법정책센터_프로필라운드.png' },
            { name: '황민호', title: '카카오 AI네이티브 전략리더', image: '/2025-summit/speakers/round/황민호_카카오_프로필라운드.png' },
            { name: '김기만', title: '중소벤처기업연구원 부연구위원/ 탄소중립녹색성장위원회 전문위원', image: '/2025-summit/speakers/round/김기만_중소벤처기업연구원_프로필라운드.png' },
            { name: '배여름', title: 'Cleantech Group, Managing Director, APAC', image: '/2025-summit/speakers/round/배여름_cleantech group_프로필라운드.png' },
            { name: '한상엽', title: '소풍벤처스 대표이사', image: '/2025-summit/speakers/round/한상엽_소풍벤처스_프로필라운드.png' },
            { name: '윤신영', title: '한국과학기술미디어센터 미디어국장/과학저널리스트', image: '/2025-summit/speakers/round/윤신영_과학저널리스트_프로필라운드.png' }
          ]
        },
        {
          time: '16:55-17:40',
          title: '패널토크',
          description: '기후AI의 현재와 미래',
          detailedDescription: '이원재 모더레이터의 진행으로 기후AI 분야의 전문가들이 현재와 미래에 대해 토론합니다.',
          speakers: [
            { name: '이원재', title: 'LAB2050 이사장', image: '/2025-summit/speakers/round/이원재_LAB2050_프로필라운드.png' },
            { name: '지현영', title: '서울대학교 환경·에너지법정책센터 변호사', image: '/2025-summit/speakers/round/지현영_서울대학교 환경에너지 법정책센터_프로필라운드.png' },
            { name: '황민호', title: '카카오 AI네이티브 전략리더', image: '/2025-summit/speakers/round/황민호_카카오_프로필라운드.png' },
            { name: '김기만', title: '중소벤처기업연구원 부연구위원/ 탄소중립녹색성장위원회 전문위원', image: '/2025-summit/speakers/round/김기만_중소벤처기업연구원_프로필라운드.png' },
            { name: '배여름', title: 'Cleantech Group, Managing Director, APAC', image: '/2025-summit/speakers/round/배여름_cleantech group_프로필라운드.png' },
            { name: '한상엽', title: '소풍벤처스 대표이사', image: '/2025-summit/speakers/round/한상엽_소풍벤처스_프로필라운드.png' },
            { name: '윤신영', title: '한국과학기술미디어센터 미디어국장/과학저널리스트', image: '/2025-summit/speakers/round/윤신영_과학저널리스트_프로필라운드.png' }
          ]
        },
        {
          time: '17:40-17:50',
          title: '클로징',
          description: '1일차 마무리 및 셔틀버스, 숙소 체크인 안내',
          detailedDescription: '1일차를 마무리하며 2-3일차 행사 일정을 안내합니다.',
          speakers: []
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
            { name: '권순우 (모더레이터)', title: '3PRO TV 디렉터', image: '/2025-summit/speakers/round/권순우_삼프로TV_프로필라운드.png' },
            { name: 'Andrew Chang', title: 'New Energy Nexus Chief Growth Officer', image: '/2025-summit/speakers/round/Andrew Chang_New Energy Nexus.jpg' },
            { name: '한승훈', title: '베이징 금문법률사무소 탄소중립 및 ESG 연구소 부주임', image: '/2025-summit/speakers/round/한승훈_베이징금문_프로필라운드.png' }
          ]
        },
        {
          time: '11:10-12:00',
          title: '딥다이브 세션 1 - 투자',
          description: 'Reprogramming Capital: What Will Make Climate AI Investable?',
          detailedDescription: '글로벌 투자 전문가들이 기후AI 스타트업에 대한 투자 관점과 기준에 대해 논의합니다. 해당 세션은 영어로 진행되며, 동시통역 디바이스가 제공됩니다.',
          speakers: [
            { name: '🇰🇷 Max Han (moderator)', title: 'Sopoong Ventures, CEO', image: '/2025-summit/speakers/round/한상엽_소풍벤처스_프로필라운드.png' },
            { name: '🇬🇧 Penny Freer', title: 'AP Ventures, Chairman', image: '/2025-summit/speakers/round/Anup Jain_BGVentures_프로필라운드.png' },
            { name: '🇺🇸 Roy Torbert', title: 'Third Derivative, Head of Programs', image: '/2025-summit/speakers/round/RoyTorbert_ThirdDerivative_프로필라운드.png' },
            { name: '🇮🇳 Anup Jain', title: 'BlueGreen Ventures, Founding Partner', image: '/2025-summit/speakers/round/Penny Freer_APventures_프로필 라운드.png' }
          ]
        },
        {
          time: '12:00-13:10',
          title: '점심식사',
          description: 'Lunch Break',
          detailedDescription: '참가자들이 함께 점심을 드시며 네트워킹 시간을 가집니다.',
          speakers: []
        },
        {
          time: '13:10-13:25',
          title: '스페셜 세션',
          description: 'Building the Industrial Climate Tech Ecosystem Together',
          detailedDescription: '글로벌산업탈탄소허브 김효은 대표가 산업 기후테크 생태계 구축 방안에 대해 발표합니다.',
          speakers: [
            { name: '김효은', title: '글로벌산업탈탄소허브 대표', image: '/2025-summit/speakers/round/김효은_글로벌산업탈탄소허브_프로필라운드.png' }
          ]
        },
        {
          time: '13:30-14:40',
          title: '스타트업 피칭',
          description: 'Startup Pitching Stage (8팀)',
          speakers: [
            { name: '최지영', title: '코리아스타트업포럼', image: '/2025-summit/speakers/round/최지영_코스포_프로필라운드.png' },
            { name: '스타트업 8팀', title: '', image: '' }
          ]
        },
        {
          time: '15:00-16:00',
          title: '딥다이브 세션 2 - 에너지와 AI',
          description: 'Powering Intelligence: Rethinking Energy for AI Infrastructure',
          speakers: [
            { name: '홍종호', title: '서울대학교 환경대학원 교수', image: '/2025-summit/speakers/round/홍종호_서울대 환경대학원_프로필라운드.png' },
            { name: '오보영', title: '카카오 데이터센터 리드', image: '/2025-summit/speakers/round/오보영_카카오_프로필라운드.png' },
            { name: '김종규', title: '식스티헤르츠 대표', image: '/2025-summit/speakers/round/김종규_식스티헤르츠_프로필라운드.png' },
            { name: '진영규', title: '제주대학교 전기공학과 부교수', image: '/images/speakers/진영규.jpeg' }
          ]
        },
        {
          time: '16:10-16:40',
          title: '인사이트 세션 2 - 기후AI와 데이터',
          description: '그린인프라 및 데이터 브리핑',
          speakers: [
            { name: '김한수', title: '경기연구원 기후환경정보센터 센터장', image: '/2025-summit/speakers/round/김한수_경기연구원_프로필라운드.png' },
            { name: '박병규', title: '시소 대표', image: '/2025-summit/speakers/round/박병규_시소_프로필라운드.png' }
          ]
        },
        {
          time: '16:50-17:50',
          title: '워크숍',
          description: 'Hands-on Workshop (오름홀)',
          detailedDescription: '참가자들이 직접 참여할 수 있는 실습형 워크숍이 진행됩니다.',
          speakers: []
        },
        {
          time: '16:50-17:50',
          title: '라운드테이블',
          description: 'Leaders Round Table',
          detailedDescription: '리더들이 모여 기후테크 생태계의 미래에 대해 심도있는 토론을 진행합니다.',
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
          time: '10:20-10:50',
          title: '인사이트 세션 3',
          description: 'Next System Builder - 새로운 시스템 구축 사례',
          detailedDescription: '미래를 위한 새로운 시스템을 직접 구축하고 있는 전문가들이 실제 사례를 공유합니다. 바이브코딩 결과물 발표, 경기기후플랫폼의 확장, 그리고 기후 분야 비영리 지원 프로젝트 CP1(Climate Philanthropy 1)에 대해 발표합니다.',
          speakers: [
            { name: 'TBD', title: '바이브코딩 결과물 발표자', image: '' },
            { name: '김한수', title: '경기연구원 기후환경정보센터 센터장', image: '/2025-summit/speakers/round/김한수_경기연구원_프로필라운드.png' },
            { name: '최근형', title: '루트임팩트 필란트로피 팀장', image: '/2025-summit/speakers/round/최근형_루트임팩트_프로필라운드.png' }
          ]
        },
        {
          time: '11:00-11:20',
          title: '스페셜 세션',
          description: 'Reprogramming the Future',
          detailedDescription: '이유진 기후환경에너지비서관과 함께 하는 스페셜 세션입니다. 세션 내용은 현장에서 공개됩니다.',
          speakers: [
            { name: '이유진', title: '기후환경에너지비서관', image: '/2025-summit/speakers/round/이유진_대통령실_프로필라운드.png' }
          ]
        },
        {
          time: '11:20-11:30',
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
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF4500] to-[#00CED1] scale-x-100 transition-transform duration-300" />
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
                <span className="gradient-text-ai">PROGRAM</span>
              </h1>
              <p className="text-[#cecece] text-lg mb-8">
                {language === 'ko' 
                  ? '3일간의 혁신적인 프로그램을 확인하세요'
                  : 'Discover 3 days of innovative programming'
                }
              </p>

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
                      ? 'bg-gradient-to-r from-[#FF4500] to-[#00CED1] text-black scale-105'
                      : 'bg-transparent border border-[#1d1d1f] text-[#cecece] hover:text-white hover:border-[#FF4500]'
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
                <p className="text-[#FF4500] mt-2">
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
                    className="p-6 border border-[#1d1d1f] rounded-lg hover:border-[#FF4500] transition-colors bg-black/50 cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="md:w-32 flex-shrink-0">
                        <span className="text-[#FF4500] font-bold">{session.time}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{session.title}</h3>
                        {session.description && (
                          <p className="text-[#cecece] mb-3">{session.description}</p>
                        )}
                        {session.speakers && session.speakers.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {session.speakers.map((speaker: string | SpeakerType, idx: number) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-[#1d1d1f] text-[#00CED1] text-sm rounded-full"
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
              {selectedDay === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-12 p-8 border-2 border-[#FF4500] rounded-lg bg-gradient-to-br from-[#FF4500]/10 to-transparent"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">🎉 웰컴디너</h3>
                  <p className="text-[#cecece]">
                    18:30 - 20:00 | 웰컴디너 네트워킹
                  </p>
                  <p className="text-[#cecece] mt-2">
                    📍 그랜드조선 2F 그랜드볼룸
                  </p>
                </motion.div>
              )}
              {selectedDay === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-12 p-8 border-2 border-[#00CED1] rounded-lg bg-gradient-to-br from-[#00CED1]/10 to-transparent"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">🍽️ 공식 만찬</h3>
                  <p className="text-[#cecece]">
                    18:30 - 20:00 | 공식 만찬
                  </p>
                  <p className="text-[#cecece] mt-2">
                    📍 그랜드조선 제주 1F ARIA
                  </p>
                </motion.div>
              )}

              {selectedDay === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-12 p-8 border-2 border-[#1E90FF] rounded-lg bg-gradient-to-br from-[#1E90FF]/10 to-transparent"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">🍹 네트워킹</h3>
                  <p className="text-[#cecece]">
                    20:00 - 24:00 | 네트워킹 타임
                  </p>
                  <p className="text-[#cecece] mt-2">
                    📍 그랜드조선 제주 5F 루프탑 &apos;피크(PEAK)&apos;
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
                className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#333] rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col"
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
                    <div className="text-[#FF4500] font-bold text-sm mb-2">{selectedSession.time}</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{selectedSession.title}</h2>
                    {selectedSession.description && (
                      <p className="text-[#cecece] text-lg">{selectedSession.description}</p>
                    )}
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 pb-8 overflow-y-auto flex-1">
                  {/* Detailed Description */}
                  {selectedSession.detailedDescription && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">세션 소개</h3>
                      <p className="text-[#cecece] leading-relaxed">{selectedSession.detailedDescription}</p>
                    </div>
                  )}

                  {/* Speakers */}
                  {selectedSession.speakers && selectedSession.speakers.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-6">연사진</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pb-4">
                        {selectedSession.speakers.map((speaker: string | SpeakerType, idx: number) => {
                          // Handle both string and object speakers
                          const speakerName = typeof speaker === 'string' ? speaker : speaker.name;
                          const speakerTitle = typeof speaker === 'string' ? '' : speaker.title;
                          const speakerImage = typeof speaker === 'string' ? '' : speaker.image;
                          
                          return (
                            <div key={idx} className="flex flex-col items-center text-center group">
                              {/* Speaker Image */}
                              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 relative">
                                {speakerImage ? (
                                  <Image
                                    src={speakerImage}
                                    alt={speakerName}
                                    width={96}
                                    height={96}
                                    className="w-full h-full rounded-full object-cover border-2 border-[#333] group-hover:border-[#FF4500] transition-colors"
                                  />
                                ) : (
                                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#333] to-[#1a1a1a] border-2 border-[#333] group-hover:border-[#FF4500] transition-colors flex items-center justify-center">
                                    <span className="text-[#FF4500] text-2xl font-bold">
                                      {speakerName.charAt(0)}
                                    </span>
                                  </div>
                                )}
                              </div>
                              
                              {/* Speaker Info */}
                              <h4 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1">{speakerName}</h4>
                              {speakerTitle && (
                                <p className="text-[#00CED1] text-xs sm:text-sm leading-tight">{speakerTitle}</p>
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
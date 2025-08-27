'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<'attendance' | 'program' | 'travel' | 'etc'>('attendance')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

  const tabs = [
    { id: 'attendance', name: language === 'ko' ? '행사 일반' : 'Event General' },
    { id: 'program', name: language === 'ko' ? '프로그램' : 'Program' },
    { id: 'travel', name: language === 'ko' ? '숙박 및 교통' : 'Accommodation & Transportation' },
    { id: 'etc', name: language === 'ko' ? '기타' : 'Others' }
  ]

  const categorizedFAQs = {
    attendance: [
      {
        id: 1,
        question: language === 'ko' ? "2025 기후테크 스타트업 서밋은 언제, 어디서 개최되나요?" : "When and where is the 2025 Climate Tech Startup Summit being held?",
        answer: language === 'ko' ? "• 개최 기간: 2025년 9월 4일(목) ~ 9월 6일(토), 3일간<br/>• 개최 장소: <br/>&nbsp;&nbsp;- 9월 4일(목): 제주국제컨벤션센터(JEJUICC) 삼다홀<br/>&nbsp;&nbsp;- 9월 5일(금) ~ 6일(토): 그랜드조선 제주 한라홀" : "• Event Period: September 4 (Thu) ~ September 6 (Sat), 2025, 3 days<br/>• Venue: <br/>&nbsp;&nbsp;- September 4 (Thu): Jeju International Convention Center (JEJUICC) Samda Hall<br/>&nbsp;&nbsp;- September 5 (Fri) ~ 6 (Sat): Grand Josun Jeju Halla Hall"
      },
      {
        id: 2,
        question: language === 'ko' ? "참가 신청 절차가 별도로 있나요?" : "Is there a separate registration process for participation?",
        answer: language === 'ko' ? "기후테크 스타트업 서밋은 초청 기반의 비공식 행사로 매년 사전 초청받은 인원에 한해 참석이 가능합니다. 9월4일(DAY1)은 현장의 잔여석에 현장 등록을 통해 참관하실 수 있습니다." : "The Climate Tech Startup Summit is an invitation-based informal event where attendance is limited to pre-invited participants each year. For September 4 (DAY 1), you may attend by registering on-site if there are available seats."
      },
      {
        id: 3,
        question: language === 'ko' ? "행사에 참여하기 위한 별도 참가비가 있나요?" : "Is there a separate participation fee to join the event?",
        answer: language === 'ko' ? "본 서밋은 카카오임팩트의 후원으로 운영되며, 별도의 참가비 없이 진행됩니다." : "This summit is operated with sponsorship from Kakao Impact and proceeds without any separate participation fee."
      },
      {
        id: 4,
        question: language === 'ko' ? "어떤 분들이 참석하나요?" : "Who will be attending?",
        answer: language === 'ko' ? "기후테크 스타트업 대표, 투자자, 정책 입안자,대기업 및 중견기업 담당자, 산업 관계자 등 기후테크 영역의 이해관계자 및 전문가 분들이 참석합니다. 자세한 참석자 정보는 'Speakers'탭에서 확인가능합니다." : "Climate tech startup CEOs, investors, policy makers, representatives from large and mid-sized companies, and industry stakeholders and experts in the climate tech sector will attend. Detailed participant information can be found in the 'Speakers' tab."
      }
    ],
    travel: [
      {
        id: 5,
        question: language === 'ko' ? "숙소 정보와 숙박 지원범위를 알고 싶습니다." : "I would like to know about accommodation information and support coverage.",
        answer: language === 'ko' ? "공식 초청 참석자에 한해 행사 기간(9/4-9/6, 2박)동안의 숙소를 제공합니다.<br/><br/>• 숙소: 그랜드조선 제주 (서귀포시 중문관광로72번길 60)<br/>• 호텔 홈페이지: <a href='https://gjj.josunhotel.com/main.do' target='_blank' style='color: #FF4500; text-decoration: underline;'>https://gjj.josunhotel.com/main.do</a><br/><br/><div style='background: #1a1a1a; border: 1px solid #333; border-radius: 8px; padding: 12px; margin-top: 16px;'><h5 style='color: #FF4500; margin: 0 0 8px 0; font-size: 14px;'>📋 숙박 이용 안내</h5><ul style='margin: 0; padding-left: 0; list-style: none; font-size: 13px;'><li style='color: #cecece; margin-bottom: 6px; padding-left: 12px; position: relative;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 이용하실 객실호수 및 방배정 현황은 호텔 체크인 시 확인하실 수 있습니다.</li><li style='color: #cecece; margin-bottom: 6px; padding-left: 12px; position: relative;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 주최측에서는 행사 기간 중 안내된 객실 비용만 지원하며, 부대 시설 이용 및 룸 서비스 등에 대한 추가 비용에 대해서는 개인 부담을 원칙으로 합니다.</li><li style='color: #cecece; padding-left: 12px; position: relative;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 행사기간 전후로 연박 등 추가숙박을 희망하시는 경우, 호텔측에 개별문의를 통한 예약 및 결제를 부탁드립니다.</li></ul></div>" : "Accommodation is provided only for officially invited participants during the event period (9/4-9/6, 2 nights).<br/><br/>• Accommodation: Grand Josun Jeju (60 Jungmun Tourism Road 72beon-gil, Seogwipo-si)<br/>• Hotel Website: <a href='https://gjj.josunhotel.com/main.do' target='_blank' style='color: #FF4500; text-decoration: underline;'>https://gjj.josunhotel.com/main.do</a><br/><br/><div style='background: #1a1a1a; border: 1px solid #333; border-radius: 8px; padding: 12px; margin-top: 16px;'><h5 style='color: #FF4500; margin: 0 0 8px 0; font-size: 14px;'>📋 Accommodation Usage Guide</h5><ul style='margin: 0; padding-left: 0; list-style: none; font-size: 13px;'><li style='color: #cecece; margin-bottom: 6px; padding-left: 12px; position: relative;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> Room numbers and room assignments can be confirmed during hotel check-in.</li><li style='color: #cecece; margin-bottom: 6px; padding-left: 12px; position: relative;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> The organizers only cover the designated room costs during the event period. Additional costs for facility usage and room service are the individual's responsibility.</li><li style='color: #cecece; padding-left: 12px; position: relative;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> For extended stays or additional accommodation before or after the event period, please contact the hotel directly for reservations and payment.</li></ul></div>"
      },
      {
        id: 6,
        question: language === 'ko' ? "제주국제공항과 행사장을 연결하는 셔틀버스 운영 시간표를 알고 싶습니다." : "I would like to know the shuttle bus schedule connecting Jeju International Airport and the event venue.",
        answer: language === 'ko' ? "<div style=\"margin: 16px 0;\"><div style=\"background: #1a1a1a; border: 1px solid #333; border-radius: 8px; padding: 16px; margin-bottom: 20px;\"><h4 style=\"color: #FF4500; margin-bottom: 12px; font-size: 16px;\">📋 셔틀버스 이용 안내</h4><ul style=\"margin: 0; padding-left: 0; list-style: none;\"><li style=\"color: #cecece; margin-bottom: 8px; padding-left: 16px; position: relative;\"><span style=\"position: absolute; left: 0; color: #00CED1;\">•</span> 모든 셔틀버스는 정시에 출발합니다. 탑승 5분 전에 탑승장소에 도착해주세요.</li><li style=\"color: #cecece; margin-bottom: 8px; padding-left: 16px; position: relative;\"><span style=\"position: absolute; left: 0; color: #00CED1;\">•</span> APEC 행사 기간(9/1~9/6)동안 추가로 운영되는 셔틀버스 정보는 <a href=\"https://asmemm2025.kr/reg/transportation.asp\" target=\"_blank\" style=\"color: #FF4500; text-decoration: underline;\">여기</a>에서 확인하실 수 있습니다.</li><li style=\"color: #cecece; padding-left: 16px; position: relative;\"><span style=\"position: absolute; left: 0; color: #00CED1;\">•</span> 셔틀버스는 무상으로 운영되며, 좌석이 없을 경우 탑승이 제한될 수 있습니다.</li></ul></div><div style=\"margin-bottom: 20px;\"><h4 style=\"color: #FF4500; margin-bottom: 12px;\">📅 9/4(목) 제주공항 → 제주국제컨벤션센터(ICC)</h4><p style=\"color: #00CED1; font-weight: bold; margin-bottom: 12px; font-size: 14px;\">📍 탑승장소: 제주국제공항 1층 5번출구, 리무진버스 탑승장</p><table style=\"width: 100%; border-collapse: collapse; background: #1a1a1a; border-radius: 8px; overflow: hidden;\"><thead style=\"background: #333;\"><tr><th style=\"padding: 12px; text-align: center; color: #00CED1; border-bottom: 2px solid #444;\">출발시간</th><th style=\"padding: 12px; text-align: center; color: #00CED1; border-bottom: 2px solid #444;\">도착시간</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">10:00 <span style=\"color: #FF4500; font-size: 12px;\">(APEC운영)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">11:12</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">10:45 <span style=\"color: #1E90FF; font-size: 12px;\">(자체운영)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">11:45</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">11:20 <span style=\"color: #1E90FF; font-size: 12px;\">(자체운영)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">12:20</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">12:10 <span style=\"color: #FF4500; font-size: 12px;\">(APEC운영)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">13:20</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">14:10 <span style=\"color: #FF4500; font-size: 12px;\">(APEC운영)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">15:22</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">16:10 <span style=\"color: #FF4500; font-size: 12px;\">(APEC운영)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">17:05 (그랜드조선 제주)</td></tr><tr><td style=\"padding: 10px; text-align: center; color: #cecece;\">19:10 <span style=\"color: #FF4500; font-size: 12px;\">(APEC운영)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">20:05 (그랜드조선 제주)</td></tr></tbody></table></div><div style=\"margin-bottom: 20px;\"><h4 style=\"color: #FF4500; margin-bottom: 12px;\">📅 9/6(토) 그랜드조선 제주 → 제주공항</h4><p style=\"color: #00CED1; font-weight: bold; margin-bottom: 12px; font-size: 14px;\">📍 탑승장소: 그랜드조선 본관 입구 우측 간이정류장</p><table style=\"width: 100%; border-collapse: collapse; background: #1a1a1a; border-radius: 8px; overflow: hidden;\"><thead style=\"background: #333;\"><tr><th style=\"padding: 12px; text-align: center; color: #00CED1; border-bottom: 2px solid #444;\">출발시간</th><th style=\"padding: 12px; text-align: center; color: #00CED1; border-bottom: 2px solid #444;\">도착시간</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">7:45 <span style=\"color: #FF4500; font-size: 12px;\">(APEC운영)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">8:40</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">9:45 <span style=\"color: #FF4500; font-size: 12px;\">(APEC운영)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">10:40</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">11:45 <span style=\"color: #FF4500; font-size: 12px;\">(APEC운영)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">12:40</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">12:00 <span style=\"color: #1E90FF; font-size: 12px;\">(자체운영)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">13:00</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">12:30 <span style=\"color: #1E90FF; font-size: 12px;\">(자체운영)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">13:30</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">14:45 <span style=\"color: #FF4500; font-size: 12px;\">(APEC운영)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">15:40</td></tr><tr><td style=\"padding: 10px; text-align: center; color: #cecece;\">16:45 <span style=\"color: #FF4500; font-size: 12px;\">(APEC운영)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">17:40</td></tr></tbody></table></div></div>" : "<div style=\"margin: 16px 0;\"><div style=\"background: #1a1a1a; border: 1px solid #333; border-radius: 8px; padding: 16px; margin-bottom: 20px;\"><h4 style=\"color: #FF4500; margin-bottom: 12px; font-size: 16px;\">📋 Shuttle Bus Usage Guide</h4><ul style=\"margin: 0; padding-left: 0; list-style: none;\"><li style=\"color: #cecece; margin-bottom: 8px; padding-left: 16px; position: relative;\"><span style=\"position: absolute; left: 0; color: #00CED1;\">•</span> All shuttle buses depart on time. Please arrive at the boarding location 5 minutes before departure.</li><li style=\"color: #cecece; margin-bottom: 8px; padding-left: 16px; position: relative;\"><span style=\"position: absolute; left: 0; color: #00CED1;\">•</span> Additional shuttle bus information operated during APEC event period (9/1~9/6) can be found <a href=\"https://asmemm2025.kr/reg/transportation.asp\" target=\"_blank\" style=\"color: #FF4500; text-decoration: underline;\">here</a>.</li><li style=\"color: #cecece; padding-left: 16px; position: relative;\"><span style=\"position: absolute; left: 0; color: #00CED1;\">•</span> Shuttle buses operate free of charge, and boarding may be restricted if seats are unavailable.</li></ul></div><div style=\"margin-bottom: 20px;\"><h4 style=\"color: #FF4500; margin-bottom: 12px;\">📅 9/4 (Thu) Jeju Airport → Jeju International Convention Center (ICC)</h4><p style=\"color: #00CED1; font-weight: bold; margin-bottom: 12px; font-size: 14px;\">📍 Boarding Location: Jeju International Airport 1st Floor Exit 5, Limousine Bus Stop</p><table style=\"width: 100%; border-collapse: collapse; background: #1a1a1a; border-radius: 8px; overflow: hidden;\"><thead style=\"background: #333;\"><tr><th style=\"padding: 12px; text-align: center; color: #00CED1; border-bottom: 2px solid #444;\">Departure Time</th><th style=\"padding: 12px; text-align: center; color: #00CED1; border-bottom: 2px solid #444;\">Arrival Time</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">10:00 <span style=\"color: #FF4500; font-size: 12px;\">(APEC)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">11:12</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">10:45 <span style=\"color: #1E90FF; font-size: 12px;\">(Private)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">11:45</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">11:20 <span style=\"color: #1E90FF; font-size: 12px;\">(Private)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">12:20</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">12:10 <span style=\"color: #FF4500; font-size: 12px;\">(APEC)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">13:20</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">14:10 <span style=\"color: #FF4500; font-size: 12px;\">(APEC)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">15:22</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">16:10 <span style=\"color: #FF4500; font-size: 12px;\">(APEC)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">17:05 (Grand Josun Jeju)</td></tr><tr><td style=\"padding: 10px; text-align: center; color: #cecece;\">19:10 <span style=\"color: #FF4500; font-size: 12px;\">(APEC)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">20:05 (Grand Josun Jeju)</td></tr></tbody></table></div><div style=\"margin-bottom: 20px;\"><h4 style=\"color: #FF4500; margin-bottom: 12px;\">📅 9/6 (Sat) Grand Josun Jeju → Jeju Airport</h4><p style=\"color: #00CED1; font-weight: bold; margin-bottom: 12px; font-size: 14px;\">📍 Boarding Location: Temporary stop to the right of Grand Josun main building entrance</p><table style=\"width: 100%; border-collapse: collapse; background: #1a1a1a; border-radius: 8px; overflow: hidden;\"><thead style=\"background: #333;\"><tr><th style=\"padding: 12px; text-align: center; color: #00CED1; border-bottom: 2px solid #444;\">Departure Time</th><th style=\"padding: 12px; text-align: center; color: #00CED1; border-bottom: 2px solid #444;\">Arrival Time</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">7:45 <span style=\"color: #FF4500; font-size: 12px;\">(APEC)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">8:40</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">9:45 <span style=\"color: #FF4500; font-size: 12px;\">(APEC)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">10:40</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">11:45 <span style=\"color: #FF4500; font-size: 12px;\">(APEC)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">12:40</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">12:00 <span style=\"color: #1E90FF; font-size: 12px;\">(Private)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">13:00</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">12:30 <span style=\"color: #1E90FF; font-size: 12px;\">(Private)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">13:30</td></tr><tr style=\"border-bottom: 1px solid #333;\"><td style=\"padding: 10px; text-align: center; color: #cecece;\">14:45 <span style=\"color: #FF4500; font-size: 12px;\">(APEC)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">15:40</td></tr><tr><td style=\"padding: 10px; text-align: center; color: #cecece;\">16:45 <span style=\"color: #FF4500; font-size: 12px;\">(APEC)</span></td><td style=\"padding: 10px; text-align: center; color: #cecece;\">17:40</td></tr></tbody></table></div></div>"
      }
    ],
    program: [
      {
        id: 8,
        question: language === 'ko' ? "각 날짜별 주요 프로그램 내용은 무엇인가요?" : "What are the main program contents for each day?",
        answer: language === 'ko' ? "<div style='margin: 16px 0;'><div style='background: #1a1a1a; border: 1px solid #333; border-radius: 8px; padding: 16px; margin-bottom: 16px;'><h4 style='color: #FF4500; margin: 0 0 12px 0; font-size: 16px;'>📅 일자별 프로그램</h4><div style='margin-bottom: 16px;'><h5 style='color: #00CED1; margin: 0 0 8px 0; font-size: 14px;'>DAY 1 (9/4) - Beyond the Hype</h5><p style='color: #cecece; margin: 0 0 8px 0; font-size: 14px;'>기술 환상을 넘어서, 기후문제의 본질을 바라보다</p><ul style='margin: 0; padding-left: 0; list-style: none;'><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 13px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 키노트: AI × 기후테크 시스템 전환</li><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 13px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 인사이트 세션: 기후AI 생태계 현재 상황 분석</li></ul></div><div style='margin-bottom: 16px;'><h5 style='color: #00CED1; margin: 0 0 8px 0; font-size: 14px;'>DAY 2 (9/5) - From Hype to Impact</h5><p style='color: #cecece; margin: 0 0 8px 0; font-size: 14px;'>기술이 실현한 변화의 가능성을 구체화하다</p><ul style='margin: 0; padding-left: 0; list-style: none;'><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 13px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 글로벌 케이스 스터디 및 투자 세션</li><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 13px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 스타트업 피칭 (8팀)</li><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 13px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> AI 에너지 인프라 딥다이브</li><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 13px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 실습형 워크숍 (Climate AI 체험)</li><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 13px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 리더스 라운드테이블</li></ul></div><div><h5 style='color: #00CED1; margin: 0 0 8px 0; font-size: 14px;'>DAY 3 (9/6) - Reprogramming the Future</h5><p style='color: #cecece; margin: 0 0 8px 0; font-size: 14px;'>공동의 미래코드 설계하다</p><ul style='margin: 0; padding-left: 0; list-style: none;'><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 13px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 기후 전문가의 스페셜 세션</li><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 13px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 오픈마이크와 공동선언</li></ul></div></div></div>" : "<div style='margin: 16px 0;'><div style='background: #1a1a1a; border: 1px solid #333; border-radius: 8px; padding: 16px; margin-bottom: 16px;'><h4 style='color: #FF4500; margin: 0 0 12px 0; font-size: 16px;'>📅 Daily Program Schedule</h4><div style='margin-bottom: 16px;'><h5 style='color: #00CED1; margin: 0 0 8px 0; font-size: 14px;'>DAY 1 (9/4) - Beyond the Hype</h5><p style='color: #cecece; margin: 0 0 8px 0; font-size: 14px;'>Looking beyond technological fantasies to see the essence of climate issues</p><ul style='margin: 0; padding-left: 0; list-style: none;'><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 13px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> Keynote: AI × Climate Tech System Transformation</li><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 13px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> Insight Session: Current Climate AI Ecosystem Analysis</li></ul></div><div style='margin-bottom: 16px;'><h5 style='color: #00CED1; margin: 0 0 8px 0; font-size: 14px;'>DAY 2 (9/5) - From Hype to Impact</h5><p style='color: #cecece; margin: 0 0 8px 0; font-size: 14px;'>Materializing the potential for change realized by technology</p><ul style='margin: 0; padding-left: 0; list-style: none;'><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 13px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> Global Case Studies and Investment Sessions</li><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 13px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> Startup Pitching (8 teams)</li><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 13px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> AI Energy Infrastructure Deep Dive</li><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 13px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> Hands-on Workshop (Climate AI Experience)</li><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 13px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> Leaders Roundtable</li></ul></div><div><h5 style='color: #00CED1; margin: 0 0 8px 0; font-size: 14px;'>DAY 3 (9/6) - Reprogramming the Future</h5><p style='color: #cecece; margin: 0 0 8px 0; font-size: 14px;'>Designing a common future code</p><ul style='margin: 0; padding-left: 0; list-style: none;'><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 13px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> Climate Expert Special Sessions</li><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 13px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> Open Mic and Joint Declaration</li></ul></div></div></div>"
      },
      {
        id: 9,
        question: language === 'ko' ? "세션은 모두 한국어로 진행되나요?" : "Are all sessions conducted in Korean?",
        answer: language === 'ko' ? "일부 세션은 영어로 진행되며, 1일차 세션은 AI통역이, 2,3일차 세션은 한영/영한 동시통역(디바이스 제공)이 진행됩니다. 특히 글로벌 투자자들이 참여하는 투자 세션과 해외 연사 세션은 영어로 진행됩니다." : "Some sessions are conducted in English, with AI interpretation for Day 1 sessions and simultaneous Korean-English/English-Korean interpretation (devices provided) for Days 2 and 3. Investment sessions with global investors and sessions by overseas speakers are conducted in English."
      },
      {
        id: 10,
        question: language === 'ko' ? "발표 자료나 세션 녹화본을 받을 수 있나요?" : "Can I receive presentation materials or session recordings?",
        answer: language === 'ko' ? "참가자에게는 주요 발표 자료가 제공되며, 일부 세션의 녹화본은 후일 공유될 예정입니다." : "Key presentation materials will be provided to participants, and recordings of some sessions will be shared later."
      },
      {
        id: 11,
        question: language === 'ko' ? "APEC과의 연계는 어떻게 되나요?" : "How is it connected with APEC?",
        answer: language === 'ko' ? "2025 기후테크 스타트업 서밋은 APEC 중소기업 장관회의(9/1-9/5)의 공식 연계 프로그램으로 진행됩니다. APEC 참가자들과의 네트워킹 기회가 제공되며, 국제적인 기후테크 협력 논의에 참여할 수 있습니다." : "The 2025 Climate Tech Startup Summit is conducted as an official connected program of the APEC Small and Medium Enterprises Ministerial Meeting (9/1-9/5). Networking opportunities with APEC participants are provided, and you can participate in international climate tech cooperation discussions."
      }
    ],
    etc: [
      {
        id: 12,
        question: language === 'ko' ? "행사장 내에 주차가 가능한가요?" : "Is parking available at the venue?",
        answer: language === 'ko' ? "<div style='margin: 16px 0;'><div style='background: #1a1a1a; border: 1px solid #333; border-radius: 8px; padding: 16px; margin-bottom: 16px;'><h4 style='color: #FF4500; margin: 0 0 12px 0; font-size: 16px;'>🚗 주차장 이용 안내</h4><div style='margin-bottom: 16px;'><h5 style='color: #00CED1; margin: 0 0 8px 0; font-size: 14px;'>📅 9/4(목) 제주국제컨벤션센터</h5><ul style='margin: 0; padding-left: 0; list-style: none;'><li style='color: #cecece; margin-bottom: 6px; padding-left: 16px; position: relative; font-size: 14px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 주차장은 전면 무료 개방됩니다.</li><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 14px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 3층 지상주차장은 의전 및 지원차량 주차로 사용이 불가하므로 지하주차장을 이용하실 수 있습니다.</li></ul></div><div><h5 style='color: #00CED1; margin: 0 0 8px 0; font-size: 14px;'>📅 9/5(금)-9/6(토) 그랜드조선 제주</h5><ul style='margin: 0; padding-left: 0; list-style: none;'><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 14px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 지상 주차장을 사용하실 수 있습니다.</li></ul></div></div></div>" : "<div style='margin: 16px 0;'><div style='background: #1a1a1a; border: 1px solid #333; border-radius: 8px; padding: 16px; margin-bottom: 16px;'><h4 style='color: #FF4500; margin: 0 0 12px 0; font-size: 16px;'>🚗 Parking Information</h4><div style='margin-bottom: 16px;'><h5 style='color: #00CED1; margin: 0 0 8px 0; font-size: 14px;'>📅 9/4 (Thu) Jeju International Convention Center</h5><ul style='margin: 0; padding-left: 0; list-style: none;'><li style='color: #cecece; margin-bottom: 6px; padding-left: 16px; position: relative; font-size: 14px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> The parking lot is fully open for free.</li><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 14px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> The 3rd floor surface parking lot is reserved for official and support vehicles, so please use the underground parking lot.</li></ul></div><div><h5 style='color: #00CED1; margin: 0 0 8px 0; font-size: 14px;'>📅 9/5 (Fri) - 9/6 (Sat) Grand Josun Jeju</h5><ul style='margin: 0; padding-left: 0; list-style: none;'><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 14px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> You can use the surface parking lot.</li></ul></div></div></div>"
      },
      {
        id: 13,
        question: language === 'ko' ? "식사가 따로 제공되나요?" : "Are meals provided separately?",
        answer: language === 'ko' ? "<div style='margin: 16px 0;'><div style='background: #1a1a1a; border: 1px solid #333; border-radius: 8px; padding: 16px; margin-bottom: 16px;'><h4 style='color: #FF4500; margin: 0 0 12px 0; font-size: 16px;'>🍽️ 식사 제공 일정</h4><p style='color: #cecece; margin: 0 0 16px 0; font-size: 14px;'>행사기간 동안의 식사는 주최측에서 제공합니다.</p><div style='margin-bottom: 16px;'><h5 style='color: #00CED1; margin: 0 0 8px 0; font-size: 14px;'>📅 9/4(목)</h5><ul style='margin: 0; padding-left: 0; list-style: none;'><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 14px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 저녁: 웰컴디너</li></ul></div><div style='margin-bottom: 16px;'><h5 style='color: #00CED1; margin: 0 0 8px 0; font-size: 14px;'>📅 9/5(금)</h5><ul style='margin: 0; padding-left: 0; list-style: none;'><li style='color: #cecece; margin-bottom: 4px; padding-left: 16px; position: relative; font-size: 14px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 조식: 호텔 조식</li><li style='color: #cecece; margin-bottom: 4px; padding-left: 16px; position: relative; font-size: 14px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 중식: 점심 뷔페</li><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 14px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 저녁: 저녁만찬</li></ul></div><div><h5 style='color: #00CED1; margin: 0 0 8px 0; font-size: 14px;'>📅 9/6(토)</h5><ul style='margin: 0; padding-left: 0; list-style: none;'><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 14px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> 조식: 호텔 조식</li></ul></div></div><div style='background: #0f0f0f; border: 1px solid #444; border-radius: 6px; padding: 12px; margin-bottom: 16px;'><p style='color: #cecece; font-size: 13px; margin: 0 0 8px 0;'>• 식사 시간 및 장소에 대한 자세한 안내는 별도로 공지될 예정입니다.</p><p style='color: #FF4500; font-size: 13px; margin: 0; font-weight: bold;'>• 식사 준비에 참고해야하는 알러지 정보나 채식 여부에 대해서는 운영진에게 꼭 사전에 알려주세요.</p></div></div>" : "<div style='margin: 16px 0;'><div style='background: #1a1a1a; border: 1px solid #333; border-radius: 8px; padding: 16px; margin-bottom: 16px;'><h4 style='color: #FF4500; margin: 0 0 12px 0; font-size: 16px;'>🍽️ Meal Provision Schedule</h4><p style='color: #cecece; margin: 0 0 16px 0; font-size: 14px;'>Meals during the event period are provided by the organizers.</p><div style='margin-bottom: 16px;'><h5 style='color: #00CED1; margin: 0 0 8px 0; font-size: 14px;'>📅 9/4 (Thu)</h5><ul style='margin: 0; padding-left: 0; list-style: none;'><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 14px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> Dinner: Welcome Dinner</li></ul></div><div style='margin-bottom: 16px;'><h5 style='color: #00CED1; margin: 0 0 8px 0; font-size: 14px;'>📅 9/5 (Fri)</h5><ul style='margin: 0; padding-left: 0; list-style: none;'><li style='color: #cecece; margin-bottom: 4px; padding-left: 16px; position: relative; font-size: 14px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> Breakfast: Hotel Breakfast</li><li style='color: #cecece; margin-bottom: 4px; padding-left: 16px; position: relative; font-size: 14px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> Lunch: Lunch Buffet</li><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 14px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> Dinner: Evening Banquet</li></ul></div><div><h5 style='color: #00CED1; margin: 0 0 8px 0; font-size: 14px;'>📅 9/6 (Sat)</h5><ul style='margin: 0; padding-left: 0; list-style: none;'><li style='color: #cecece; padding-left: 16px; position: relative; font-size: 14px;'><span style='position: absolute; left: 0; color: #00CED1;'>•</span> Breakfast: Hotel Breakfast</li></ul></div></div><div style='background: #0f0f0f; border: 1px solid #444; border-radius: 6px; padding: 12px; margin-bottom: 16px;'><p style='color: #cecece; font-size: 13px; margin: 0 0 8px 0;'>• Detailed information about meal times and locations will be announced separately.</p><p style='color: #FF4500; font-size: 13px; margin: 0; font-weight: bold;'>• Please inform the organizers in advance about any allergy information or dietary preferences (vegetarian, etc.) that need to be considered for meal preparation.</p></div></div>"
      }
    ]
  }

  const getCurrentFAQs = () => {
    return categorizedFAQs[activeTab] || []
  }

  return (
    <>
      {/* Navigation */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-black/95 to-black backdrop-blur-md border-b border-transparent" 
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,69,0,0.1), rgba(0,206,209,0.1), rgba(30,144,255,0.1))", 
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
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF4500] to-[#00CED1] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/faq" className="relative text-white/80 hover:text-[#FF4500] transition-all duration-300 group py-2">
                FAQ
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF4500] to-[#00CED1] scale-x-100 transition-transform duration-300" />
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
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#FF4500] via-[#00CED1] to-[#1E90FF] bg-clip-text text-transparent">
                  FAQ
                </span>
              </h1>
              <p className="text-[#cecece] text-lg mb-8">
                {language === 'ko' 
                  ? '자주 묻는 질문과 답변을 확인하세요'
                  : 'Find answers to frequently asked questions'
                }
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="sticky top-16 bg-black/95 backdrop-blur-sm z-40 border-b border-[#1d1d1f]">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 py-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as 'attendance' | 'program' | 'travel' | 'etc')
                    setExpandedFAQ(null) // Close any open FAQ when switching tabs
                  }}
                  className={`px-3 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all text-sm md:text-base whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#FF4500] to-[#00CED1] text-black scale-105'
                      : 'bg-transparent border border-[#1d1d1f] text-[#cecece] hover:text-white hover:border-[#FF4500]'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-4">
                {getCurrentFAQs().map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-black/50 to-[#1a1a1a]/50 border border-[#1d1d1f] rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#1d1d1f]/30 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">
                        Q{index + 1}. {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: expandedFAQ === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <svg className="w-5 h-5 text-[#FF4500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {expandedFAQ === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 border-t border-[#1d1d1f]/50">
                            <div 
                              className="text-[#cecece] leading-relaxed pt-4"
                              dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="bg-gradient-to-br from-[#1a1a1a]/50 to-black/50 border border-[#1d1d1f] rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {language === 'ko' ? '더 궁금한 점이 있으신가요?' : 'Have more questions?'}
                </h3>
                <p className="text-[#cecece] mb-6">
                  {language === 'ko' ? '위에서 찾지 못한 질문이 있으시다면 언제든 문의해 주세요.' : 'If you have any questions not found above, please feel free to contact us anytime.'}
                </p>
                <a 
                  href="mailto:impactclimate@sopoong.net"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF4500] to-[#00CED1] text-black font-bold rounded-lg hover:scale-105 transition-transform"
                >
                  {language === 'ko' ? '문의하기' : 'Contact Us'}
                </a>
              </div>
            </motion.div>
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
                  {language === 'ko' ? '서울특별시 성동구 왕십리로2길 20, 카우앤독 4층' : '20, Wangsimni-ro 2-gil, Seongdong-gu, Seoul, Cow & Dog 4th Floor'}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
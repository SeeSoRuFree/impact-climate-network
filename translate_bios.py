#!/usr/bin/env python3
"""
Script to add English translations (bioEn) for all Korean bio fields in speakers.json
"""

import json
import sys

def translate_korean_to_english(korean_text):
    """
    Translate Korean text to English
    This function contains manual translations for each bio field
    """
    translations = {
        "마이크로소프트 sustainability 전략": "Microsoft sustainability strategy",
        
        "안녕하세요. 소풍벤처스에서 투자심사 업무를 맡고 있는 지현석 입니다.\n신재생에너지, 모빌리티의 전동화 트렌드를 포함한 기후테크 영역(카본테크, 클린테크, 에코테크)에 집중하여 투자를 검토하고 있습니다.": "Hello, I'm Hyunseok Ji, responsible for investment review at Sopoong Ventures.\nI am focused on reviewing investments in the climate tech sector (carbon tech, clean tech, eco tech), including renewable energy and mobility electrification trends.",
        
        "Heal the Earth! \n에너지 데이터로 세상을 바꾸겠다는 마음으로 2013년 그리드위즈를 창업해, 수요반응, 에너지 저장장치, 전기차 충전, 재생에너지 등 다양한 분야에서 비즈니스를 만들어왔습니다. \n요즘은 AI 기반의 기후·에너지 기술과 서비스 개발에 푹 빠져 지냅니다. 기술이 세상을 바꾸는 순간을 함께 목격하고, 또 만들어가는 것을 좋아합니다.": "Heal the Earth! \nWith the determination to change the world through energy data, I founded Gridwiz in 2013 and have been building businesses in various fields including demand response, energy storage systems, electric vehicle charging, and renewable energy. \nThese days, I'm deeply passionate about developing AI-based climate and energy technologies and services. I love witnessing and creating the moments when technology transforms the world.",
        
        "에너지IT 소셜벤처 식스티헤르츠의 창업자이자 대표이사 입니다. 식스티헤르츠는 공공데이터를 활용하여 전국 8만개 이상의 태양광, 풍력 발전소를 조사하여 지도 위에 표시하고, AI기술로 하루 전에 발전량을 예측해서 알려주는 \"햇빛바람지도\"를 개발하여 무료로 공개하고 있습니다. 2021년 공공데이터 활용 경진대회에서 대상(대통령상), 소셜벤처 경진대회에서 대상(국무총리상)을 받았습니다, 2023년 미국 CES에서 혁신상을 수상하였고, 2024년 인도-태평양 경제프레임워크(IPEF)로부터 인도-태평양 지역의 100대 기후테크 스타트업으로 선정되었습니다.": "I am the founder and CEO of energy IT social venture 60Hertz. 60Hertz utilizes public data to survey over 80,000 solar and wind power plants across the country, displays them on a map, and has developed the 'SunlightWind Map' that uses AI technology to predict and inform about power generation one day in advance, which is freely available to the public. We received the Grand Prize (Presidential Award) at the 2021 Public Data Utilization Contest and the Grand Prize (Prime Minister's Award) at the Social Venture Contest. We won the Innovation Award at CES 2023 in the United States and were selected as one of the top 100 climate tech startups in the Indo-Pacific region by the Indo-Pacific Economic Framework (IPEF) in 2024.",
        
        "박형건 박사는 미국 실리콘밸리 직접공기포집(DAC) 기후테크 스타트업 Capture6의 부사장이다. 또한 한국의 대표적인 기후 'Think and Do Platform'인 '(사)우리들의 미래'의 선임 자문위원이자 유엔기후변화협약(UNFCCC) 제6.4조 메커니즘 기후정책 전문가로도 활동 중이다. 아울러, 인하대학교 지속가능경영대학원 겸임교수이다. 추가적으로 국제협력단 기후분야 전문위원, 신용보증기금 녹색금융 자문위원, NH-Amundi 자산운용 ESG 외부자문위원으로도 위촉되었다. 박형건 박사는 이전에는 미국의 클라이밋웍스 재단(ClimateWorks Foundation) 국장대행, 스위스 기후테크 스타트업 Climeworks 자문위원, 녹색기후기금(Green Climate Fund) 부국장대행, 탄소중립녹색성장위원회 위원, 녹색성장위원회 전문위원, 기후솔루션 펠로우, 금융감독원 녹색금융 자문위원 등을 역임했다. 기후에 대한 다양한 공로로 경제부총리 겸 기획재정부장관 표창, 금융위원장 표창, 환경부장관, 경기도지사 표창을 수여했다. 박형건 박사는 영국 워릭대학교(University of Warwick)에서 컴퓨터 및 경영학 학사 학위를, 미국 뉴욕대학교(New York University)에서 경영학 MBA 학위를 수여했다. 인하대학교에서 지속가능경영 및 지속가능금융 박사 학위를 취득했다. \"탄소, 사고팔 준비가 되었나요?\"의 공동 저자이다.": "Dr. Park Hyung-geon is Vice President of Capture6, a direct air capture (DAC) climate tech startup in Silicon Valley, USA. He is also a senior advisor to Coalition for Our Common Future, Korea's leading climate 'Think and Do Platform,' and serves as a climate policy expert for the UNFCCC Article 6.4 mechanism. He also serves as an adjunct professor at Inha University Graduate School of Sustainable Management. Additionally, he has been appointed as a climate expert advisor for Korea International Cooperation Agency, green finance advisor for Korea Credit Guarantee Fund, and external ESG advisor for NH-Amundi Asset Management. Previously, Dr. Park served as Acting Director of ClimateWorks Foundation in the US, advisor to Swiss climate tech startup Climeworks, Acting Deputy Director of Green Climate Fund, member of the Carbon Neutrality and Green Growth Committee, expert member of the Green Growth Committee, Climate Solutions Fellow, and green finance advisor for the Financial Supervisory Service. He has received commendations from the Deputy Prime Minister and Minister of Economy and Finance, Chairman of the Financial Services Commission, Minister of Environment, and Governor of Gyeonggi Province for his various contributions to climate action. Dr. Park holds a bachelor's degree in Computer Science and Business from the University of Warwick, UK, an MBA from New York University, USA, and a PhD in Sustainable Management and Sustainable Finance from Inha University. He is co-author of 'Carbon, Are You Ready to Buy and Sell?'",
    }
    
    return translations.get(korean_text, korean_text)

def main():
    speakers_file_path = '/Users/byunggyupark/projects/networkimapct-main-0825-2/public/2025-summit/data/speakers.json'
    
    # Read the speakers.json file
    try:
        with open(speakers_file_path, 'r', encoding='utf-8') as f:
            speakers = json.load(f)
    except Exception as e:
        print(f"Error reading file: {e}")
        return 1
    
    # Process each speaker
    modified_count = 0
    for speaker in speakers:
        if 'bio' in speaker and speaker['bio'] and speaker['bio'] != '-':
            # Check if bioEn already exists
            if 'bioEn' not in speaker:
                # Only add bioEn if bio contains Korean characters or mixed content
                bio_text = speaker['bio']
                if any(ord(char) > 127 for char in bio_text):  # Contains non-ASCII characters
                    translation = translate_korean_to_english(bio_text)
                    speaker['bioEn'] = translation
                    modified_count += 1
                    print(f"Added bioEn for speaker: {speaker.get('name', 'Unknown')}")
    
    # Write back the modified data
    try:
        with open(speakers_file_path, 'w', encoding='utf-8') as f:
            json.dump(speakers, f, ensure_ascii=False, indent=2)
        print(f"Successfully updated {modified_count} speakers with bioEn fields")
    except Exception as e:
        print(f"Error writing file: {e}")
        return 1
    
    return 0

if __name__ == '__main__':
    sys.exit(main())
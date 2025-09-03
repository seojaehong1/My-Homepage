'use client'

import { motion } from 'framer-motion'
import { Building2, GraduationCap } from 'lucide-react'

const experiences = [
  {
    type: 'work',
    title: '시니어 프론트엔드 개발자',
    company: '테크 스타트업',
    period: '2023.03 - 현재',
    icon: Building2,
    achievements: [
      'React 기반 SaaS 플랫폼 프론트엔드 개발 및 유지보수',
      'TypeScript 도입으로 코드 안정성 30% 향상',
      '신입 개발자 멘토링 및 코드 리뷰 진행',
      '사용자 경험 개선으로 고객 만족도 25% 상승'
    ]
  },
  {
    type: 'work',
    title: '풀스택 개발자',
    company: 'IT 솔루션 회사',
    period: '2021.06 - 2023.02',
    icon: Building2,
    achievements: [
      'Node.js 기반 백엔드 API 개발 및 데이터베이스 설계',
      'React를 활용한 관리자 대시보드 개발',
      'AWS 인프라 구축 및 CI/CD 파이프라인 구성',
      '레거시 시스템 마이그레이션 프로젝트 리드'
    ]
  },
  {
    type: 'work',
    title: '주니어 개발자',
    company: '웹 에이전시',
    period: '2020.03 - 2021.05',
    icon: Building2,
    achievements: [
      '기업 웹사이트 및 이커머스 플랫폼 개발',
      'WordPress, PHP 기반 프로젝트 참여',
      '반응형 웹 디자인 구현',
      '웹 접근성 및 SEO 최적화 경험'
    ]
  },
  {
    type: 'education',
    title: '컴퓨터공학과 학사',
    company: '한국대학교',
    period: '2016.03 - 2020.02',
    icon: GraduationCap,
    achievements: [
      '전공 GPA 3.8/4.5',
      '프로그래밍 동아리 회장 활동',
      '해커톤 대회 우수상 수상',
      '졸업 프로젝트: AI 기반 추천 시스템'
    ]
  }
]

export default function Experience() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            경력 & 학력
          </h1>
          <p className="text-lg text-gray-600">
            개발자로서의 성장 과정을 소개합니다
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.type}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                  experience.type === 'work' ? 'bg-blue-600' : 'bg-green-600'
                }`}></div>

                {/* Content */}
                <div className="ml-16 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <experience.icon className={`w-6 h-6 mr-3 ${
                        experience.type === 'work' ? 'text-blue-600' : 'text-green-600'
                      }`} />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {experience.title}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {experience.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

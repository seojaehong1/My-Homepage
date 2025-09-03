'use client'

import { motion } from 'framer-motion'
import { Building2, GraduationCap } from 'lucide-react'

const experiences = [
  {
    type: 'education',
    title: '클라우드 데브옵스 프론트엔드&백엔드 자바 풀스택 개발자 취업캠프',
    company: '중앙정보기술인재개발원',
    period: '2025.07 - 2026.02',
    icon: Building2,
    achievements: [
      '클라우드 기반 DevOps 환경 구축 및 관리',
      'Java Spring Boot를 활용한 백엔드 개발',
      'React, Vue.js를 활용한 프론트엔드 개발',
      'AWS, Docker, Kubernetes를 활용한 클라우드 인프라 구축',
      'CI/CD 파이프라인 구축 및 자동화',
      '마이크로서비스 아키텍처 설계 및 구현'
    ]
  },
  {
    type: 'education',
    title: '전공심화과정',
    company: '동서울대학교',
    period: '2024.03 - 2025.02',
    icon: GraduationCap,
    achievements: [
      '학점: 4.5/4.5 (만점)',
      '심화 전공 과정 이수',
      '프로젝트 기반 실무 교육',
      '산업체 연계 프로젝트 참여'
    ]
  },
  {
    type: 'education',
    title: '컴퓨터공학과 3년제',
    company: '동서울대학교',
    period: '2022.03 - 2024.02',
    icon: GraduationCap,
    achievements: [
      '학점: 4.15/4.5',
      '컴퓨터공학 전공 이수',
      '프로그래밍 기초 및 알고리즘 학습',
      '데이터베이스 설계 및 관리',
      '웹 개발 기초 및 프로젝트 수행'
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

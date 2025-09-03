'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'JAVA 프로젝트',
    description: 'Java와 Spring Framework를 활용한 백엔드 개발 프로젝트입니다. 객체지향 프로그래밍, 디자인 패턴, REST API 설계 및 구현 경험을 포함합니다.',
    image: '/api/placeholder/400/300',
    technologies: ['Java', 'Spring', 'Maven', 'Eclipse', 'MySQL'],
    githubUrl: 'https://github.com/seojaehong1/JAVA',
    demoUrl: '#'
  },
  {
    title: 'Logic Puzzle API',
    description: '논리 퍼즐 게임을 위한 REST API 서비스입니다. 다양한 퍼즐 타입을 지원하며, 사용자 인증, 점수 시스템, 퍼즐 생성 알고리즘을 구현했습니다.',
    image: '/api/placeholder/400/300',
    technologies: ['Java', 'Spring Boot', 'REST API', 'JWT', 'MySQL'],
    githubUrl: 'https://github.com/seojaehong1/logic-puzzle-api',
    demoUrl: '#'
  },
  {
    title: 'Recommendation System',
    description: '사용자 기반 추천 시스템 프로젝트입니다. 머신러닝 알고리즘을 활용하여 개인화된 추천 서비스를 제공하며, 데이터 분석 및 처리 경험을 포함합니다.',
    image: '/api/placeholder/400/300',
    technologies: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn'],
    githubUrl: 'https://github.com/seojaehong1/recommendation-system',
    demoUrl: '#'
  },
  {
    title: '차량 과속 탐지 시스템',
    description: 'Raspberry Pi와 OpenCV, CNN을 활용한 실시간 차량 과속 탐지 시스템입니다. 카메라로 차량을 감지하고 속도를 측정하여 과속 차량을 자동으로 탐지합니다.',
    image: '/api/placeholder/400/300',
    technologies: ['Python', 'OpenCV', 'CNN', 'Raspberry Pi', 'Linux'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    title: '냉장고 관리 앱',
    description: 'Google OCR API와 JWT 인증을 활용한 냉장고 관리 애플리케이션입니다. 음식 사진을 촬영하면 OCR로 텍스트를 인식하고 유통기한을 관리합니다.',
    image: '/api/placeholder/400/300',
    technologies: ['Java', 'Spring', 'Google OCR API', 'JWT', 'MySQL'],
    githubUrl: '#',
    demoUrl: '#'
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            프로젝트
          </h1>
          <p className="text-lg text-gray-600">
            다양한 기술을 활용하여 개발한 프로젝트들을 소개합니다
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30">💻</div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 flex-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl}
                    className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

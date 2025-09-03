'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
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
  },
  {
    title: 'REST API 서비스',
    description: 'Swagger를 활용한 REST API 설계 및 구현 프로젝트입니다. JWT 토큰 인증, ERD 설계, 클래스 다이어그램을 통한 체계적인 백엔드 개발을 진행했습니다.',
    image: '/api/placeholder/400/300',
    technologies: ['Java', 'Spring', 'REST API', 'Swagger', 'JWT', 'MySQL'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    title: 'AI 개발 도구 연동 시스템',
    description: 'Cursor와 Claude AI를 활용한 MVP 서버 구축 및 Git 연동 프로젝트입니다. 프롬프트 엔지니어링을 통해 코드 분석 및 리뷰 자동화 시스템을 구현했습니다.',
    image: '/api/placeholder/400/300',
    technologies: ['Cursor', 'Claude AI', 'Git', 'MVP', 'Prompt Engineering'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    title: '웹 개발 프로젝트',
    description: 'Django와 Python을 활용한 웹 애플리케이션 개발입니다. Docker를 이용한 컨테이너화, AWS를 통한 배포, Terminal을 활용한 서버 관리 경험을 포함합니다.',
    image: '/api/placeholder/400/300',
    technologies: ['Python', 'Django', 'Docker', 'AWS', 'Linux', 'Terminal'],
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

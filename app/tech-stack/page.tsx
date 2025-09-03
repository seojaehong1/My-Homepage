'use client'

import { motion } from 'framer-motion'
import { Monitor, Server, Cloud } from 'lucide-react'

const technologies = [
  { name: 'Java', icon: '☕' },
  { name: 'Spring', icon: '🌱' },
  { name: 'Python', icon: '🐍' },
  { name: 'Django', icon: '🎯' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'C', icon: '⚙️' },
  { name: 'C++', icon: '🔧' },
  { name: 'C#', icon: '🔷' },
  { name: 'PHP', icon: '🐘' },
  { name: 'HTML/CSS', icon: '🌐' },
  { name: 'JSP', icon: '📄' },
  { name: 'REST API', icon: '🔗' },
  { name: 'Swagger', icon: '📚' },
  { name: 'JWT', icon: '🔐' },
  { name: 'MySQL', icon: '🗃️' },
  { name: 'Oracle', icon: '🔶' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'OpenCV', icon: '👁️' },
  { name: 'CNN', icon: '🧠' },
  { name: 'Raspberry Pi', icon: '🍓' },
  { name: 'Google OCR', icon: '👀' },
  { name: 'Eclipse', icon: '🌙' },
  { name: 'PyCharm', icon: '🐍' },
  { name: 'Cursor', icon: '✏️' },
  { name: 'Claude AI', icon: '🤖' },
  { name: 'R', icon: '📊' },
  { name: 'Git', icon: '📋' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Terminal', icon: '💻' },
]

const categories = [
  {
    title: 'Languages & Frameworks',
    icon: Monitor,
    description: 'Java, Spring, Python, Django, JavaScript, C, C++, C#, PHP, R 등 다양한 언어와 프레임워크',
    color: 'bg-blue-50 border-blue-200 text-blue-800',
    iconColor: 'text-blue-600'
  },
  {
    title: 'Web & API Development',
    icon: Server,
    description: 'REST API 설계, Swagger 문서화, JWT 인증, HTML/CSS, JSP를 활용한 웹 개발',
    color: 'bg-green-50 border-green-200 text-green-800',
    iconColor: 'text-green-600'
  },
  {
    title: 'AI & IoT',
    icon: Cloud,
    description: 'OpenCV, CNN, Raspberry Pi를 활용한 AI 프로젝트 및 IoT 개발 경험',
    color: 'bg-purple-50 border-purple-200 text-purple-800',
    iconColor: 'text-purple-600'
  },
  {
    title: 'DevOps & Infrastructure',
    icon: Cloud,
    description: 'Docker, AWS, Linux, Terminal을 활용한 배포 및 인프라 관리',
    color: 'bg-orange-50 border-orange-200 text-orange-800',
    iconColor: 'text-orange-600'
  },
  {
    title: 'Database & Design',
    icon: Monitor,
    description: 'MySQL, Oracle 데이터베이스 및 ERD, 클래스 다이어그램 설계 경험',
    color: 'bg-indigo-50 border-indigo-200 text-indigo-800',
    iconColor: 'text-indigo-600'
  },
  {
    title: 'Development Tools & AI',
    icon: Server,
    description: 'Eclipse, PyCharm, Cursor, Claude AI, Git, Google OCR API 연동 등 최신 개발 도구 및 AI 활용',
    color: 'bg-teal-50 border-teal-200 text-teal-800',
    iconColor: 'text-teal-600'
  }
]

export default function TechStack() {
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
            기술 스택
          </h1>
          <p className="text-lg text-gray-600">
            다양한 기술을 활용하여 프로젝트를 구현합니다
          </p>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="font-medium text-gray-900">{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className={`${category.color} rounded-xl p-8 border-2 hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                <category.icon className={`w-8 h-8 ${category.iconColor} mr-3`} />
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <p className="text-sm leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

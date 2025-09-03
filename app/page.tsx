'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code, Download } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                안녕하세요,{' '}
                <span className="text-blue-600">개발자</span>
                <br />
                서재홍입니다
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                풀스택 개발자로서 사용자 중심의 웹 애플리케이션을 만들고 있습니다. 
                새로운 기술을 배우고 도전하는 것을 즐깁니다.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                프로젝트 보기
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <Download className="w-4 h-4 mr-2" />
                이력서 다운로드
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">서</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4+</div>
            <div className="text-gray-600">개발 경력 (년)</div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
            <div className="text-gray-600">완료 프로젝트</div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">30+</div>
            <div className="text-gray-600">사용 기술</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

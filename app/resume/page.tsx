'use client'

import { motion } from 'framer-motion'
import { Download, Upload, FileText, Eye } from 'lucide-react'
import { useState } from 'react'

export default function Resume() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file)
    }
  }

  const handleDownload = () => {
    // 실제 이력서 다운로드 로직
    const link = document.createElement('a')
    link.href = '/resume.pdf' // 실제 이력서 파일 경로
    link.download = '서재홍_이력서.pdf'
    link.click()
  }

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
            이력서
          </h1>
          <p className="text-lg text-gray-600">
            이력서를 다운로드하거나 업로드할 수 있습니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">이력서 다운로드</h2>
              <p className="text-gray-600 mb-6">
                최신 이력서를 PDF 형태로 다운로드할 수 있습니다.
              </p>
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Download className="w-5 h-5 mr-2" />
                이력서 다운로드
              </button>
            </div>
          </motion.div>

          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">이력서 업로드</h2>
              <p className="text-gray-600 mb-6">
                새로운 이력서를 업로드하여 최신 정보를 유지하세요.
              </p>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <FileText className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-600">
                    파일을 선택하거나 여기에 드래그하세요
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    PDF, DOC, DOCX 파일만 지원됩니다
                  </span>
                </label>
              </div>

              {uploadedFile && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-green-800">
                        {uploadedFile.name}
                      </span>
                    </div>
                    <span className="text-xs text-green-600">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </div>
                </motion.div>
              )}

              <button
                disabled={!uploadedFile}
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <Upload className="w-5 h-5 mr-2" />
                업로드하기
              </button>
            </div>
          </motion.div>
        </div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">이력서 미리보기</h2>
            <button className="inline-flex items-center px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
              <Eye className="w-4 h-4 mr-2" />
              전체 보기
            </button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 min-h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>이력서 미리보기가 여기에 표시됩니다</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

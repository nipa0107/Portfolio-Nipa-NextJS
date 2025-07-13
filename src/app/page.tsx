'use client'

import TypewriterText from './components/TypewriterText'
import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        {/* เมนูลิงก์เปลี่ยนหน้า */}
        <div className="flex justify-center space-x-8 mb-12">
          {/* <Link 
            href="/projects" 
            className="text-sm uppercase tracking-wider px-4 py-1.5 bg-purple-200 rounded-2xl hover:text-white transition-colors duration-300"
          >
            Projects
          </Link>
          <Link 
            href="/about" 
            className="text-sm uppercase tracking-wider px-4 py-1.5 bg-gray-200 rounded-2xl hover:text-purple-300 transition-colors duration-300"
          >
            About Me
          </Link> */}
          <p 
            className="text-sm font-medium uppercase tracking-wider px-4 py-1.5 bg-purple-200 rounded-2xl"
          >
            Welcome to my Portfolio
          </p>
        </div>

        {/* ชื่อ-นามสกุลใช้ TypewriterText */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light">
            <TypewriterText 
              text="NIPA SINTHAISONG" 
              delay={500}
              speed={150}
            />
          </h1>
          
          <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto">
            Frontend Developer passionate about creating beautiful and functional web experiences
          </p>
        </div>

        {/* ดูโปรเจกต์และติดต่องาน */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link 
            href="/projects"
            className="btn-primary inline-flex items-center gap-2"
          >
            View My Projects
            <ArrowRight size={16} /> {/* ไอคอน ArrowRight */}
          </Link>
         
          <Link 
            href="/contact"
            className="px-6 py-3 border dark:border-black rounded-lg hover:text-purple-300 hover:border-purple-300 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>

        {/* ลิงก์ social ทั้งหมด */}
        <div className="flex justify-center space-x-6 pt-8">
          <a 
            href="mailto:nipa010727@gmail.com"
            className="p-2 hover:text-purple-300 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://github.com/nipa0107"
            className="p-2 hover:text-purple-300 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/nipa-sinthaisong"
            className="p-2 hover:text-purple-300 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}
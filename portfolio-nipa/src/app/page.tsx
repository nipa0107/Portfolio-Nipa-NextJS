'use client'

import TypewriterText from './components/TypewriterText'
import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 mb-12">
          <Link 
            href="/projects" 
            className="text-sm uppercase tracking-wider hover:opacity-60 transition-opacity"
          >
            Projects
          </Link>
          <Link 
            href="/about" 
            className="text-sm uppercase tracking-wider hover:opacity-60 transition-opacity"
          >
            About Me
          </Link>
          <Link 
            href="/contact" 
            className="text-sm uppercase tracking-wider hover:opacity-60 transition-opacity"
          >
            Contact
          </Link>
        </div>

        {/* Main Name with Typewriter Effect */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light">
            <TypewriterText 
              text="NIPA SINTHAISONG" 
              delay={500}
              speed={150}
            />
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Frontend Developer passionate about creating beautiful and functional web experiences
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link 
            href="/projects"
            className="btn-primary inline-flex items-center gap-2"
          >
            View My Projects
            <ArrowRight size={16} />
          </Link>
          
          <Link 
            href="/contact"
            className="px-6 py-3 border border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 pt-8">
          <a 
            href="mailto:nipa010727@gmail.com"
            className="p-2 hover:opacity-60 transition-opacity"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://github.com/nipa0107"
            className="p-2 hover:opacity-60 transition-opacity"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/nipa-sinthaisong"
            className="p-2 hover:opacity-60 transition-opacity"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}
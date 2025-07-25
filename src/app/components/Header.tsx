'use client'

import Link from 'next/link'
import { usePathname } from "next/navigation"
import { useState } from 'react'
import { Menu, X } from 'lucide-react'


export default function Header() {
  //สร้างเมนูที่คลิกแล้วแสดง/ซ่อน
  //ใช้ useState เพื่อเก็บสถานะของเมนู (open)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 text-black bg-white border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4 text-sm">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl px-4 font-bold hover:text-purple-200 transition-all duration-300">
            NS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link px-4 py-2 rounded-md transition-colors duration-200 ${
                  pathname === link.href ? 'bg-purple-100 text-black' : 'hover:bg-purple-100'
                }`}
              >
                {link.label}
              </Link>
            ))}

          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            {/* เมื่อคลิกปุ่ม → toggle เมนูแสดง/ซ่อน */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-purple-200 transition-all duration-300 "
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link px-4 py-2 rounded-md ${
                    pathname === link.href ? 'bg-purple-100 text-black' : 'hover:bg-purple-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
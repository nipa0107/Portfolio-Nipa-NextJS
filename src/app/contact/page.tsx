'use client'

import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {

  return (
    <div className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="text-center space-y-4">
        <div className="text-center mb-10">
          <span className="text-sm font-medium bg-purple-200 px-4 py-1.5 rounded-full">Contact</span>
        </div>
        <h1 className="text-4xl sm:text-4xl font-bold tracking-tight">🤝 Let's Connect</h1>
      </div>

      <div className="flex justify-center text-center ">
        <div className="space-y-6 max-w-2xl mx-auto">
          <h2 className="text-2xl text-stone-700 font-semibold mb-6">Get in Touch</h2>
          <div className='flex items-center justify-center'>
            <p className="text-stone-600 mb-8">
              I'm always interested in new opportunities and collaborations.
              Whether you have a project in mind or just want to say hello,
              feel free to reach out!
            </p>
          </div>
          <div className="space-y-4 justify-items-center">
            <div className="flex items-center gap-3">
              <Mail className="text-gray-600 dark:text-gray-400" size={20} />
              <span>nipa010727@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-gray-600 dark:text-gray-400" size={20} />
              <span>095-609-1494</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-gray-600 dark:text-gray-400" size={20} />
              <span>Ubon Ratchathani, Thailand</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
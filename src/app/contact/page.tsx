'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <div className="text-center mb-10">
          <span className="text-sm font-medium bg-purple-200 px-4 py-1.5 rounded-full">Contact</span>
        </div>
        <h1 className="text-4xl sm:text-4xl font-bold tracking-tight">Let's work together on your next project</h1>
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
        
        {/* <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-900 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-900 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-900 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full inline-flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={16} />
            </button>
          </form>
        </div> */}
      </div>
    </div>
  )
}
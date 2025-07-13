'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Building2, CalendarDays } from 'lucide-react'

export default function experience() {
    return (
        <div className="relative">
            <div className="max-w-screen-md mx-auto">
                <div className="text-center mb-12">
                    <span className="text-sm font-medium bg-purple-200 px-4 py-1.5 rounded-full">Experience</span>
                </div>
                <div className="relative">
                    <div className="relative pl-8 not-last:pb-12">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 size-9 bg-sky-100 rounded-full flex items-center justify-center">
                                    <Building2 size={22} className="lucide lucide-building2 size-5 text-sky-500" />
                                </div>
                                <span className="text-lg font-semibold">College of Computing Khon Kaen University</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Teaching Assistant - Cloud Computing and Application  (Part-Time)</h3>
                                <div className="flex items-center gap-2 mt-1 text-sm">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar size-4">
                                        <path d="M8 2v4"></path>
                                        <path d="M16 2v4"></path>
                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path>
                                    </svg> */}
                                    <CalendarDays size={18} />
                                    <span>Nov 2024 - Feb 2025</span>
                                </div>
                            </div>
                            <p className="text-neutral-500">• Assisted the instructor in teaching and provided guidance on best practices for using AWS services (such as EC2, IAM, RDS, VPC, etc.) to over 50 undergraduate students.</p>
                            <p className="text-neutral-500">• Took the lead in organizing the laboratory, provided guidance and resolved issues during weekly lab activities, and delivered detailed feedback to enhance learning outcomes.</p>
                            <div className="flex flex-wrap gap-2 ">
                                <span className='text-xs font-medium bg-stone-100 p-2 rounded-full'>Amazon Web Service</span>
                                <span className='text-xs font-medium bg-stone-100 p-2 rounded-full'>Google Sheet</span>
                            </div>
                            <div className='flex flex-col justify-center lg:flex-row items-center gap-3 mt-6'>
                                <Image
                                className='rounded-xl'
                                src="/TA_Cloud.jpg"
                                alt='TA_Cloud'
                                width={400}
                                height={100} /> 
                                <Image
                                className='rounded-xl'
                                src="/TA_Cloud_Lab.jpg"
                                alt='TA_Cloud'
                                width={400}
                                height={100} /> 
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { link } from 'fs'
import { label } from 'framer-motion/client'

const projects = [
    {
        id: 1,
        title: 'Caregiver Assistant Application for Patients at Home (Home Ward) - Senior Project',
        description: 'Web application for home-based patient care, featuring educational care guides and role-based data management for patients, caregivers, medical personnel, and administrators.',
        technologies: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB'],
        image: '/Homeward-doctor.png',
        // 👇 เปลี่ยนเป็นโครงสร้างใหม่
        links: [
            {
                label: 'Doctor ',
                liveUrl: 'https://homewarddocter.vercel.app',
                githubUrl: 'https://github.com/your-repo/doctor' // <-- แก้เป็นลิงก์ GitHub จริง
            },
            {
                label: 'Admin ',
                liveUrl: 'https://homeward.vercel.app/',
                githubUrl: 'https://github.com/your-repo/admin' // <-- แก้เป็นลิงก์ GitHub จริง
            },
            {
                label: 'Youtube ',
                liveUrl: 'https://youtu.be/0hbjkt3yMcA',
            }
                

        ],
    },
    {
        id: 2,
        title: 'Web Blog',
        description: 'A collaborative task management application with real-time updates',
        technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
        image: '/web-blog.gif',
        // 👇 เปลี่ยนเป็นโครงสร้างใหม่ (แม้จะมีลิงก์เดียว)
        links: [
            {
                label: 'User App', // หรือจะใช้ 'Live Demo' ก็ได้
                liveUrl: 'https://user.example.com',
                githubUrl: 'https://github.com/nipa0107/homeward'
            }
        ]
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description: 'A responsive weather dashboard with location-based forecasts',
        technologies: ['Vue.js', 'TypeScript', 'Chart.js', 'OpenWeather API'],
        image: '/ToDoApp.gif',
        // 👇 เปลี่ยนเป็นโครงสร้างใหม่
        links: [
            {
                label: 'Website', // หรือ 'Demo'
                liveUrl: 'https://example.com',
                githubUrl: 'https://github.com'
            }
        ]
    },
    {
        id: 4,
        title: 'Weather Dashboard',
        description: 'A responsive weather dashboard with location-based forecasts',
        technologies: ['Vue.js', 'TypeScript', 'Chart.js', 'OpenWeather API'],
        image: '/Femme-Review.gif',
        // 👇 เปลี่ยนเป็นโครงสร้างใหม่
        links: [
            {
                label: 'Website', // หรือ 'Demo'
                liveUrl: 'https://example.com',
                githubUrl: 'https://github.com'
            }
        ]
    }
]

export default function Projects() {
    return (
        <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-light">Projects</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    A selection of projects that showcase my skills and experience in frontend development
                </p>
            </div>

            <div className="space-y-12">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col md:flex-row gap-6"
                    >
                        {/* รูปด้านซ้าย */}
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={250}
                                // 👇 แก้ไข className ของ Image โดยลบ w-full และ h-full ออก
                                className="object-cover rounded-sm"
                            />
                        </div>

                        {/* ข้อมูลด้านขวา */}
                        <div className="md:w-1/2 space-y-4">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-xs rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* 👇 ส่วนของลิงก์ที่แก้ไขใหม่ */}
                            <div className="pt-2 space-y-2">
                                {project.links?.map((link, index) => (
                                    <div key={index} className="flex flex-wrap items-center gap-x-4 gap-y-1">
                                        {/* แสดง Label ถ้ามีลิงก์มากกว่า 1 กลุ่ม */}
                                        {project.links.length > 1 && (
                                            <span className="font-semibold text-sm">{link.label}:</span>
                                        )}

                                        {/* แสดง Live URL ถ้ามี */}
                                        {link.liveUrl && (
                                            <a
                                                href={link.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-sm hover:opacity-60 transition-opacity"
                                            >
                                                {/* ถ้ามีลิงก์แค่กลุ่มเดียว อาจจะแสดงเป็น 'Live Demo' */}
                                                {project.links.length === 1 ? 'Demo' : 'Demo'}
                                                <ExternalLink size={14} />
                                            </a>
                                        )}

                                        {/* แสดง GitHub URL ถ้ามี */}
                                        {link.githubUrl && (
                                            <a
                                                href={link.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-sm hover:opacity-60 transition-opacity"
                                            >
                                                {/* ถ้ามีลิงก์แค่กลุ่มเดียว อาจจะแสดงเป็น 'Source Code' */}
                                                {project.links.length === 1 ? 'Source Code' : 'GitHub'}
                                                <Github size={14} />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}
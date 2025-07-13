'use client'

import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: 'Caregiver Assistant Application for Patients at Home (Home Ward) - Senior Project',
        description: 'Web application for home-based patient care, featuring educational care guides and role-based data management for patients, caregivers, medical personnel, and administrators.',
        technologies: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'Figma'],
        image: '/Homeward-doctor.png',
        links: [
            {
                label: 'Doctor ',
                liveUrl: 'https://homewarddocter.vercel.app',
                githubUrl: 'https://github.com/nipa0107/homewarddocter' // <-- แก้เป็นลิงก์ GitHub จริง
            },
            {
                label: 'Admin ',
                liveUrl: 'https://homeward.vercel.app/',
                githubUrl: 'https://github.com/nipa0107/homeward' // <-- แก้เป็นลิงก์ GitHub จริง
            },
            {
                label: 'Youtube ',
                liveUrl: 'https://youtu.be/0hbjkt3yMcA',
            }


        ],
    },
    {
        id: 2,
        title: 'Femme Fashion & Style Website',
        description: 'Developed a responsive website for outfit ideas and styling tips, enhancing the overall user experience.',
        technologies: ['HTML5', 'CSS3', 'Bootstrap5', 'Figma'],
        image: '/Femme-Review.gif',
        links: [
            {
                label: 'Website ',
                liveUrl: 'http://202.28.94.18/wdt65/group/it/it12/webdesign/',
                githubUrl: 'https://github.com/nipa0107/Femme-Website'
            }
        ]
    },
    {
        id: 3,
        title: 'ToDo App',
        description: 'Built a simple ToDo List mobile app, featuring task CRUD operations. Integrated Firebase Authentication for user login and Firestore for real-time task data management.',
        technologies: ['React Native', 'JavaScript', 'Expo Dev', 'Firebase', 'Firestore'],
        image: '/ToDoApp.gif',
        links: [
            {
                label: '',
                liveUrl: '',
                githubUrl: 'https://github.com/nipa0107/ToDo-App'
            }
        ]
    },
    {
        id: 4,
        title: 'ShabuQ',
        description: 'Collaborated in a team to develop a shabu restaurant queue reservation application. The app features a customer queue booking system and an admin table management system.',
        technologies: ['Kotlin', 'Android studio', 'Figma'],
        image: '/ShabuQ.gif',
        links: [
            {
                label: '',
                liveUrl: '',
                githubUrl: 'https://github.com/nipa0107/ShabuQ'
            }
        ]
    },
    {
        id: 5,
        title: 'KKU Live Shuttlebus',
        description: 'Collaborated with a team to design and test a prototype for a KKU shuttle bus app. Created mockups using Adobe XD and conducted usability testing with 8 participants to improve the user experience.',
        technologies:['Adobe XD', 'UX/UI'],
        image:'/KKU-Live-Shuttlebus.png',
        links: [
            {
                label: 'Demo',
                liveUrl: 'https://xd.adobe.com/view/3a23641f-4ff6-4a72-8218-5f27e924254c-6f70/',
                githubUrl: 'https://github.com/nipa0107/KKU-Live-Shuttlebus'
            }
        ]
    }
]

export default function Projects() {
    return (
        <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
                <div className="text-center mb-10">
                    <span className="text-sm font-medium bg-purple-200 px-4 py-1.5 rounded-full">Projects</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Featured Work</h1>
                <p className="text-lg text-stone-500 max-w-2xl mx-auto">
                    A selection of projects that showcase my skills and technical achievements
                </p>
            </div>

            <div className="space-y-12">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className=" bg-white border border-stone-200 rounded-xl overflow-hidden hover:border-stone-400 transition-all duration-300 flex flex-col md:flex-row"
                    >
                        {/* รูปด้านซ้าย */}
                        <div className="w-full md:w-1/2 flex justify-center items-center border-r border-stone-200">
                            <div className="p-4">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={250}
                                    priority
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                        {/* ข้อมูลด้านขวา */}
                        <div className="md:w-1/2 space-y-4 p-5">
                            <h3 className="text-xl text-black font-semibold">{project.title}</h3>
                            <p className="text-neutral-500 text-sm">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 bg-purple-100 text-xs rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* ส่วนของลิงก์ที่แก้ไขใหม่ */}
                            <div className="pt-2 space-y-2">
                                {project.links?.map((link, index) => (
                                    <div key={index} className="flex flex-wrap items-center gap-x-4 gap-y-1">
                                        {/* แสดง Label ถ้ามีลิงก์มากกว่า 1 กลุ่ม */}
                                        {project.links.length > 1 && (
                                            <span className="font-semibold text-sm text-black">{link.label}:</span>
                                        )}

                                        {/* แสดง Live URL ถ้ามี */}
                                        {link.liveUrl && (
                                            <a
                                                href={link.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm text-black bg-stone-100 rounded-full px-2 py-1 hover:bg-stone-200 transition-colors duration-300"
                                            >
                                                <ExternalLink size={14} />
                                                {project.links.length > 0 && 'Live Demo'}
                                                
                                            </a>
                                        )}

                                        {/* แสดง GitHub URL ถ้ามี */}
                                        {link.githubUrl && (
                                            <a
                                                href={link.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm text-black bg-stone-100 rounded-full px-2 py-1 hover:bg-stone-200 transition-colors duration-300"
                                            >
                                                <Github size={14} />
                                                {project.links.length > 0 && 'GitHub'}
                                                
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
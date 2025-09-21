'use client'

import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: 'Senior Project: Caregiver Assistant Application for Patients at Home (Home Ward)',
        position: 'Full-Stack Developer',
        date: 'Jan 2024 - Feb 2025',
        description:
            [
                '• Developed a web application for home-based patient care, featuring educational care guides and role-based data management for patients, caregivers, medical personnel, and administrators.',
                '• Collaborated with the team to design and implement the overall system architecture and data management leveraging the MERN Stack',
                '• Designed an interactive dashboard with real-time data visualization, integrated chat communication, and symptom tracking to help medical personnel monitor patient conditions more effectively.'
            ],
        technologies: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'Figma'],
        image: '/Homeward-Doctor.png',
        links: [
            {
                label: 'Doctor ',
                liveUrl: 'https://homewarddocter.vercel.app',
                githubUrl: 'https://github.com/nipa0107/homewarddocter',


            },
            {
                label: 'Admin ',
                liveUrl: 'https://homeward.vercel.app/',
                githubUrl: 'https://github.com/nipa0107/homeward'
            },
            {
                label: 'Youtube ',
                liveUrl: 'https://youtu.be/0hbjkt3yMcA',
            }


        ],
    },
    {
        id: 2,
        title: 'Academic Project: ToDo App',
        position: 'Mobile App Developer',
        date: 'Mar 2023',
        description:
            [
                '• Developed a simple real-time task management app for everyday users, addressing the complexity found in most existing ToDo applications.',
                '• Built a mobile ToDo List app as a Mobile App Developer, handling both front-end and back-end. Used Firebase Authentication for login and Firestore for real-time CRUD operations.',
                '• Improved task tracking efficiency and gained hands-on experience with real-time app development and user authentication flow.',
            ],
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
        id: 3,
        title: 'Academic Project: ShabuQueue',
        position: 'Android Front-End Developer',
        date: 'Feb 2023',
        description: [
            '• A local shabu restaurant faced long wait times and inefficient paper-based queue management, causing customer dissatisfaction and wasted time. Our team developed a queue reservation app for customers along with an admin-facing table management system.',
            '• I designed UI, database, and front-end using Kotlin and Figma, working in a 7-person team from user research to interface design.',
            // '• This project deepened my understanding of team collaboration in multi-stakeholder environments and taught me how to design user-centered solutions in real-world business contexts.',
        ],
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
        id: 4,
        title: 'Academic Project: Emerald jewelry Web Application',
        position: 'Back-end Developer',
        date: 'Sep 2022',
        description: [
            '• Collaborated with a team explore e-commerce development principles by building a jewelry web application with Laravel and phpMyAdmin, implementing user registration, product listing functionalities and database schema design.',
            // '• This project deepened my understanding of team collaboration in multi-stakeholder environments and taught me how to design user-centered solutions in real-world business contexts.',
        ],
        technologies: ['Laravel', 'PHP','HTML','CSS', 'MySQL', 'phpMyAdmin'],
        image: '/Emerald.png',
        links: [
            {
                label: '',
                liveUrl: '',
                githubUrl: ''
            }
        ]
    },
    {
        id: 5,
        title: 'Academic Project: Femme Fashion & Style Website',
        position: 'Front-end Developer',
        date: 'Sep 2022',
        description:
            [
                '• Developed a responsive website that showcases a wide variety of outfit ideas and styling tips for different fashion preferences.',
                '• I was responsible for the UI design and front-end development, using HTML5, CSS3, Bootstrap 5, and Figma for prototyping and layout planning.',
                '• The final site delivered an improved browsing experience across devices and helped users easily explore style ideas, leading to higher engagement during user testing.',
            ],
        technologies: ['HTML', 'CSS', 'Bootstrap', 'Figma'],
        image: '/Femme-Review.gif',
        links: [
            {
                label: 'Website ',
                liveUrl: 'https://femme-website.vercel.app/',
                githubUrl: 'https://github.com/nipa0107/Femme-Website'
            }
        ]
    },
    {
        id: 6,
        title: 'Academic Project: KKU Live Shuttlebus',
        position: 'UX/UI Designer',
        date: 'March 2022',
        description: [
            '• In my first year, I collaborated with the team to develop a new application to address the issues of the existing KKU Transit app, which lacked accurate real-time vehicle tracking and had a user experience that didn’t meet users needs',
            '• I was responsible for UX/UI design using Adobe XD to create prototypes and interactive designs. The process began with analyzing user pain points gathered through surveys, followed by designing wireframes with a focus on clear and intuitive navigation.',
            '• Testing with a group of 8 real users showed that 70% were able to achieve their goals on the first try. The average satisfaction rating was 4.375 out of 5, and the project received positive feedback. This experience helped me gain a deeper understanding of the importance of context-aware design.'
        ]
        ,
        technologies: ['Adobe XD', 'UX/UI'],
        image: '/KKU-Live-Shuttlebus.png',
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
                        <div className="md:w-1/2 space-y-3 p-4">
                            <h3 className="text-xl text-black font-semibold">{project.title}</h3>
                            <h5 className=" text-neutral-500 font-semibold italic">{project.position} ({project.date})</h5>
                            <div className="text-neutral-500 text-sm ">
                                {Array.isArray(project.description) ? (
                                    project.description.map((paragraph, index) => (
                                        <p key={index} className="mb-2.5">{paragraph}</p>
                                    ))
                                ) : (
                                    <p>{project.description}</p>
                                )}
                            </div>


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
import Image from "next/image"
import {Github, ExternalLink } from 'lucide-react'

export default function About() {
  const stacks = [
    'JavaScript', 'TypeScript','SQL', 'React','React Native', 'Next.js',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap',
    'Node.js', 'Express.js','Laravel', 'MongoDB','MySQL',
    'GitHub','Firebase', 'Vite', 'Cypress','Postman', 'Figma','Adobe XD', 'Jira (Beginner)'
  ]

  const skills = [
    'Teamework and Collaboration','Problem-Solving', 'Communication',
    'Adaptability & Eagerness to Learn', 'Flexibility and Adaptability',
    'Positive Attitude',
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-9">
      <div className="text-center space-y-4">
        <div className="text-center mb-10">
          <span className="text-sm font-medium bg-purple-200 px-4 py-1.5 rounded-full">About</span>
        </div>
        <h1 className="text-4xl sm:text-4xl font-bold tracking-tight">Passionate about building meaningful web experiences</h1>
        <p className="text-lg text-stone-500">
          Get to know more about my background and expertise
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="flex items-center justify-center">
            <Image
              className="rounded-xl"
              src="/ME.png"
              alt="image_me"
              width={250}
              height={250} 
              />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3  ">
            <a 
            href="https://github.com/nipa0107 "
            target="_blank"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-black text-white p-2 rounded-full px-4 py-2 hover:text-white hover:bg-purple-300 transition-all duration-300">
              <Github size={18} />View Github
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="inline-flex items-center justify-center gap-2 text-2xl font-semibold mb-4">Hi!, I&apos;m Nipa 
              <Image width={30} height={30} src="https://em-content.zobj.net/thumbs/120/apple/354/waving-hand_1f44b.png" alt="waving-hand"/>
              </h2>
            <div className="space-y-4 text-stone-600">
              <p className=""> 
                As a recent graduate in Information Technology, I have a strong interest in website development and frontend technologies. I am dedicated to improving my skills in designing and developing user-centric UI/UX and always open to embracing new technologies.
              </p>
              <p>
                I am confident in my analytical thinking, problem-solving abilities, and decision-making skills. With a solid foundation in HTML, CSS, JavaScript, TypeScripts and frameworks such as React and Next.js, I am ready to contribute to a development team and help enhance both performance and user experience.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Tech Stack & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {stacks.map((stack) => (
                <span
                  key={stack}
                  className="px-3 py-1 bg-purple-100 rounded-full text-sm"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
           <div>
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-purple-100 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Certificate</h3>
            <div className="space-y-4 text-stone-600">
              <a
              href="/files/Cer_Intro_to _JIRA.pdf"
              target="_black"
              className="inline-flex items-center justify-center gap-2 hover:text-purple-300 transition-all duration-300">
                Introduction to JIRA <ExternalLink size={18}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import Image from "next/image"
import {Github, Eye } from 'lucide-react'

export default function About() {
  const skills = [
    'JavaScript', 'TypeScript','SQL', 'React','React Native', 'Next.js',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap',
    'Node.js', 'Express.js','Laravel', 'MongoDB','MySQL',
    'GitHub','Firebase', 'Vite', 'Cypress','Postman', 'Figma','Adobe XD',
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-9">
      <div className="text-center space-y-4">
        <div className="text-center mb-10">
          <span className="text-sm font-medium bg-purple-200 px-4 py-1.5 rounded-full">About Me</span>
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
              src="/me.jpg"
              alt="image_me"
              width={230}
              height={230} />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3  ">
            <a 
            href="https://github.com/nipa0107 "
            target="_blank"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-black text-white p-2 rounded-full px-4 py-2 hover:text-white hover:bg-purple-300 transition-all duration-300">
              <Github size={18} />View Github
            </a>
            <a 
            href="/files/Resume2025.pdf"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border border-stone-300 p-2 rounded-full px-4 py-2 hover:bg-stone-200 transition-all duration-300">
              <Eye size={18}/>View Resume
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Hello! I'm Nipa</h2>
            <div className="space-y-4 text-stone-600 ">
              <p>
                I'm a recent Information Technology graduate with a strong interest in both frontend development and software testing.
              </p>
              <p>
                I enjoy creating clean, user-friendly interfaces and also have experience writing test cases and performing automated tests.
              </p>
              <p>
                I’m eager to grow in the tech industry, continuously improve my skills, and contribute to real-world projects. 
                Currently looking for opportunities where I can learn, build, and make a meaningful impact.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
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
        </div>
      </div>
    </div>
  )
}
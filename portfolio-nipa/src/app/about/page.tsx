export default function About() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js',
    'HTML5', 'CSS3', 'Tailwind CSS', 'SASS', 'Node.js',
    'Git', 'Webpack', 'Vite', 'Jest', 'Cypress'
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-light">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Get to know more about my background and expertise
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Profile Photo</span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Hello! I'm Nipa</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a passionate Frontend Developer with 3+ years of experience creating 
                modern, responsive web applications. I love turning complex problems into 
                simple, beautiful solutions.
              </p>
              <p>
                My journey in web development started with curiosity about how websites work, 
                and it has evolved into a career focused on creating exceptional user experiences 
                through clean code and thoughtful design.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or enjoying a good cup of coffee 
                while reading about the latest web development trends.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
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
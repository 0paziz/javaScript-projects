'use client'
import { useState } from 'react'


export default function Home() {
  const [filter, setFilter] = useState('All')

  const projects = [
    {
      title: 'Weather App',
      description: 'API based weather app.',
      image: './images/weather.png',
      liveLink: 'https://0paziz.github.io/Weather-App-using-API/',
      githubLink: 'https://github.com/0paziz/Weather-App-using-API',
      category: 'API',
    },
    {
      title: 'Book Nest',
      description: 'API powered book search app.',
      image: './images/book-nest.png',
      liveLink: 'https://0paziz.github.io/book-nest/',
      githubLink: 'https://github.com/0paziz/book-nest',
      category: 'API',
    },
    {
      title: 'Search Image',
      description: 'Image search via API.',
      image: './images/searchimage.png',
      liveLink: 'https://0paziz.github.io/Search-image',
      githubLink: 'https://github.com/0paziz/Search-image',
      category: 'API',
    },
    {
      title: 'Insure Landing Page',
      description: 'React Native styled landing page.',
      image: './images/insure.png',
      liveLink: 'https://0paziz.github.io/insure-landing-page/',
      githubLink: 'https://github.com/0paziz/insure-landing-page',
      category: 'React',
    },
    {
      title: 'Todo List React App',
      description: 'Simple todo list in React.',
      image: './images/TodoApp.png',
      liveLink: 'https://0paziz.github.io/Todolist-react-app/',
      githubLink: 'https://github.com/0paziz/Todolist-react-app',
      category: 'React',
    },
    {
      title: 'Rock Paper Scissors',
      description: 'Classic game with Vanilla JS.',
      image: './images/rockgame.png',
      liveLink: 'https://0paziz.github.io/Rock-paper-Scissor/',
      githubLink: 'https://github.com/0paziz/Rock-paper-Scissor',
      category: 'Vanilla JS',
    },
    {
      title: 'Contact Form',
      description: 'Form validation with vanilla JavaScript.',
      image: './images/contact.png',
      liveLink: 'https://0paziz.github.io/Contact-form/',
      githubLink: 'https://github.com/0paziz/Contact-form',
      category: 'Vanilla JS',
    },
    {
      title: 'Feedback Rating',
      description: 'Interactive feedback rating app.',
      image: './images/feedbackrating.png',
      liveLink: 'https://0paziz.github.io/feedback-rating/',
      githubLink: 'https://github.com/0paziz/feedback-rating',
      category: 'Vanilla JS',
    },
    {
      title: 'Quiz App',
      description: 'Simple quiz app in vanilla JS.',
      image: './images/quiz.png',
      liveLink: 'https://0paziz.github.io/QuizApp/',
      githubLink: 'https://github.com/0paziz/QuizApp',
      category: 'Vanilla JS',
    },
    {
      title: 'Age Calculator',
      description: 'Calculate age from birth date.',
      image: './images/agecal.png',
      liveLink: 'https://0paziz.github.io/Age-cal/',
      githubLink: 'https://github.com/0paziz/Age-cal',
      category: 'Vanilla JS',
    },
  ]

  const filteredProjects =
    filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <div id='projects' className="bg-gray-100 min-h-screen text-gray-900 px-20">


      <header className="text-center py-10">
        <h2 className="text-3xl font-extrabold mb-2 text-blue-900"> Feutured Projects</h2>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          {['All', 'React', 'API', 'Vanilla JS'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded border cursor-pointer hover:bg-blue-600 hover:text-white ${filter === cat ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-12">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-white shadow rounded-xl overflow-hidden hover:shadow-xl transition">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110 "
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded text-sm"
                >
                 Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

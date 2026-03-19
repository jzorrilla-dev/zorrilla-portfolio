import React, { useState } from 'react'
import { Link } from 'lucide-react'
import GithubIcon from './GitHubIcon'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  link: string // URL de la demo
  repoLink?: string
  previewImage: string // Ruta a la imagen
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: 'PetBook - Plataforma de Adopción de Mascotas',
    description:
      'Una plataforma web completa para la adopción de mascotas, que permite a los usuarios buscar, publicar y adoptar mascotas, además permite avisar el extravío de una mascota.',
    tags: ['Alpine.js', 'Laravel', 'Tailwind', 'PostgreSQL'],
    link: 'https://petbook-project.onrender.com/',
    repoLink: 'https://github.com/jzorrilla-dev/laravel-fullstack-pet-book', // no olvidar añadir repoLink
    previewImage: 'images/previews/petbook-preview.png'
  },
  {
    id: 2,
    title: 'Portafolio Personal (Astro)',
    description:
      'Mi portafolio personal de alta velocidad, construido con Astro para una experiencia de usuario optimizada y excelente SEO.',
    tags: ['Astro', 'React', 'Tailwind', 'TypeScript'],
    link: 'https://eloquent-strudel-8d91ce.netlify.app/',
    repoLink: 'https://github.com/jzorrilla-dev/zorrilla-portfolio',
    previewImage: 'images/previews/portfolio-preview.png'
  },
  {
    id: 3,
    title: 'Landing Page para taller de bombas inyectoras',
    description:
      'Una landing page para un taller de reparación de bombas inyectoras, con información sobre servicios y contacto.',
    tags: ['Astro', 'Vue', 'Tailwind', 'TypeScript'],
    link: 'https://zorrilladiesel.netlify.app',
    repoLink: 'https://github.com/jzorrilla-dev/astro-vue-zorrilla-diesel/tree/master',
    previewImage: 'images/previews/workshop-preview.png'
  }
]

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All')

  // Obtener todos los tags disponibles
  const availableTags = ['All', ...Array.from(new Set(initialProjects.flatMap((p) => p.tags)))]

  // Es preferible no usar useMemo acá a menos que la lista de proyectos sea muy grande
  const filteredProjects =
    filter === 'All'
      ? initialProjects
      : initialProjects.filter((project) => project.tags.includes(filter))
  return (
    <section
      id="proyectos"
      className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">
          Proyectos Destacados
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {availableTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`
                px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200
                ${
                  filter === tag
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-cyan-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-cyan-900'
                }
              `}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.previewImage}
                  alt={`Previsualización del proyecto ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* TAGS DE TECNOLOGÍA */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BOTONES DE ENLACE EXPLÍCITOS */}
                <div className="flex gap-3 mt-auto">
                  {/* Botón de Demo */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                  >
                    <Link size={16} />
                    Demo
                  </a>

                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                      <GithubIcon className="w-5 h-5" />
                      Código
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-xl text-gray-600 dark:text-gray-400 mt-10">
            No se encontraron proyectos con el tag '{filter}'.
          </p>
        )}
      </div>
    </section>
  )
}

export default Projects

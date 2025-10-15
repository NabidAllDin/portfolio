import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

const Projects = () => {
  const projects: Project[] = [
    // {
    //   id: 1,
    //   title: 'E-Commerce Platform',
    //   description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    //   image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    //   demoUrl: '#',
    //   githubUrl: '#',
    // },
    // {
    //   id: 2,
    //   title: 'Task Management App',
    //   description: 'Collaborative task management tool with real-time updates, team workspaces, and deadline tracking.',
    //   image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['TypeScript', 'React', 'Supabase', 'Tailwind'],
    //   demoUrl: '#',
    //   githubUrl: '#',
    // },
    // {
    //   id: 3,
    //   title: 'Social Media Dashboard',
    //   description: 'Analytics dashboard for tracking social media metrics across multiple platforms in real-time.',
    //   image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['React', 'Chart.js', 'REST API', 'PostgreSQL'],
    //   demoUrl: '#',
    //   githubUrl: '#',
    // },
    // {
    //   id: 4,
    //   title: 'Weather Forecast App',
    //   description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
    //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['React', 'OpenWeather API', 'Geolocation'],
    //   demoUrl: '#',
    //   githubUrl: '#',
    // },
    // {
    //   id: 5,
    //   title: 'Fitness Tracker',
    //   description: 'Track workouts, monitor progress, and achieve fitness goals with personalized workout plans.',
    //   image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['React Native', 'Firebase', 'Charts'],
    //   demoUrl: '#',
    //   githubUrl: '#',
    // },
    // {
    //   id: 6,
    //   title: 'Portfolio Generator',
    //   description: 'Create stunning portfolio websites with drag-and-drop interface and customizable templates.',
    //   image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['React', 'TypeScript', 'Tailwind', 'DnD'],
    //   demoUrl: '#',
    //   githubUrl: '#',
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          My <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-cyan-400 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 font-medium transition-colors group/link"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors group/link"
                  >
                    <span>GitHub</span>
                    <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

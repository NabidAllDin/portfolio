import { Github, Linkedin, Twitter, Mail, Facebook } from 'lucide-react';
import nabid from '../nabid.png';

const About = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Tailwind CSS',
    'Python', 'PostgreSQL', 'Git', 'REST APIs'
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/NabidAllDin', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nabid-all-din-645a4038a/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/nabidalldin', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/nabid.all.din', label: 'Facebook' },
    { icon: Mail, href: 'mailto:nabidalldin450@gmail.com', label: 'Email' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          About <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="order-2 md:order-1 animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Full Stack Developer
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate developer with a love for creating elegant solutions to complex problems.
              With expertise in modern web technologies, I specialize in building responsive, user-friendly
              applications that make a difference.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge with the developer community.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-700 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white dark:hover:text-white text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 animate-fade-in-right">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden h-80 flex items-center justify-center">
                <img
                  src={nabid}
                  alt="Nabid"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

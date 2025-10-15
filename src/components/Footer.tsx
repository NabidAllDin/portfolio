import { Github, Linkedin, Twitter, Mail, Heart, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/NabidAllDin', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nabid-all-din-645a4038a/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/nabidalldin', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/nabid.all.din', label: 'Facebook' },
    { icon: Mail, href: 'mailto:nabidalldin950@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 dark:bg-gray-900 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>© {currentYear} Nabid. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of coffee</span>
            </p>
          </div>

          <div className="text-sm text-gray-500">
            <p>Designed & Built by Nabid</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

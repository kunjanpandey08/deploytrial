import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl sm:text-2xl font-bold gradient-text flex items-center space-x-2"
          >
            <img src="/logo.png" alt="Kunjan Pandey" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
            <span className="hidden sm:inline">Kunjan Pandey</span>
            <span className="sm:hidden">Kunjan</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/kunjanpandey08"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className="text-gray-600 hover:text-primary-600"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/kunjanpandey08"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className="text-gray-600 hover:text-primary-600"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="https://instagram.com/kunjanpandey_"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className="text-gray-600 hover:text-primary-600"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              href="mailto:kunjanpandeykp@gmail.com"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className="text-gray-600 hover:text-primary-600"
            >
              <Mail size={20} />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-300"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200">
              <motion.a
                href="https://github.com/kunjanpandey08"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-600 hover:text-primary-600"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/kunjanpandey08"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-600 hover:text-primary-600"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://instagram.com/kunjanpandey_"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-600 hover:text-primary-600"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="mailto:kunjanpandeykp@gmail.com"
                whileHover={{ scale: 1.2 }}
                className="text-gray-600 hover:text-primary-600"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;

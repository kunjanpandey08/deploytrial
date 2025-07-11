import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Have a project in mind or want to discuss opportunities? 
              I'd love to hear from you. Let's create something amazing together!
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={fadeInUp}>
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">Let's Connect</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <motion.a
                  href="mailto:kunjanpandeykp@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center space-y-3 sm:space-y-4 p-4 sm:p-6 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-300"
                >
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Email</h4>
                    <p className="text-gray-600 text-xs sm:text-sm break-all">kunjanpandeykp@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+917477455014"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center space-y-3 sm:space-y-4 p-4 sm:p-6 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-300"
                >
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Phone</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">+91 7477455014</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center space-y-3 sm:space-y-4 p-4 sm:p-6 bg-gray-50 rounded-lg sm:col-span-2 lg:col-span-1"
                >
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Location</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Gangtok, East Sikkim</p>
                  </div>
                </motion.div>
              </div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6 mt-6 sm:mt-8"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 font-semibold text-sm sm:text-base">Available for new projects</span>
                </div>
                <p className="text-green-600 text-xs sm:text-sm mt-2">
                  Currently accepting new client work and interesting opportunities.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

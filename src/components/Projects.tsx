import { motion } from 'framer-motion';

const Projects = () => {
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

  const projects: any[] = [
    // Projects will be added later
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Projects will be added soon. Stay tuned for updates on my work in web development, machine learning, and design.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-xl text-gray-600">Coming Soon!</p>
                <p className="text-gray-500 mt-2">Exciting projects are currently in development.</p>
              </div>
            ) : (
              projects.map((_, index) => (
                // Project cards will be rendered here when projects are added
                <div key={index}></div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "Java", "JavaScript", "C++"]
    },
    {
      title: "Web Development",
      skills: ["React", "Spring Boot", "HTML/CSS", "Node.js"]
    },
    {
      title: "Design",
      skills: ["Photoshop", "Illustrator", "Video Editing", "UI/UX"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "MySQL", "MongoDB", "AWS"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Technologies and tools I work with
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 text-center">
                  {category.title}
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      className="bg-gray-50 px-3 sm:px-4 py-2 rounded-full text-center text-sm sm:text-base text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-300"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

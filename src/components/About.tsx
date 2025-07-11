import { motion } from 'framer-motion';
import { User, Briefcase, GraduationCap, MapPin } from 'lucide-react';

const About = () => {
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

  const experiences = [
    {
      title: "Freelance Designer",
      company: "Self-Employed",
      period: "2019 - Present",
      description: "Creating banners, logos, mock-ups, posters, and video editing for various clients. Developed expertise in graphic design and visual communications."
    },
    {
      title: "Graduated High School",
      company: "Manjusri Public School",
      period: "2022",
      description: "Completed higher secondary education with focus on science and mathematics, laying foundation for technical studies."
    },
    {
      title: "Undergraduate Degree",
      company: "SMIT (Sikkim Manipal Institute of Technology)",
      period: "2022 - 2026",
      description: "Pursuing B.Tech in Computer Science Engineering with focus on Machine Learning, Web Development, and Software Engineering."
    },
    {
      title: "Co-founded PAILA",
      company: "AI Education Initiative",
      period: "2024 - Present",
      description: "Co-founded PAILA project aimed at educating school students on AI applications. Currently in development stage with collaborative approach."
    },
    {
      title: "Government Intern",
      company: "Social Welfare Department, Govt. of Sikkim",
      period: "2025",
      description: "Developing website for TRI (Tribal Research Institute) in Azzamlinzey, contributing to government digitalization initiatives."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Computer Science student and freelance designer passionate about technology,
              machine learning, and creating impactful digital experiences.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-20">
            {/* Personal Info - Now Full Width */}
            <motion.div variants={fadeInUp}>
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
                  Hello! I'm Kunjan Pandey
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  I'm a Computer Science student at Sikkim Manipal Institute of Technology (SMIT) 
                  with a passion for technology and design. Currently pursuing B.Tech CSE with a CGPA of 7.0,
                  I've been actively involved in coding clubs and educational initiatives.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  As a freelance graphic designer since 2019, I've developed expertise in creating 
                  banners, logos, mock-ups, posters, and video editing. I also played a pivotal role 
                  in establishing CODHERS, a coding-focused club aimed at empowering individuals, 
                  particularly women, in tech.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  My interests span across Machine Learning, Web Development, and Design. I'm currently 
                  working on PAILA, a collaborative project aimed at educating school students on AI 
                  and its applications.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
                  <div className="flex items-center space-x-3 justify-center lg:justify-start">
                    <User className="text-primary-600" size={20} />
                    <span className="text-gray-700 text-sm md:text-base">CSE Student</span>
                  </div>
                  <div className="flex items-center space-x-3 justify-center lg:justify-start">
                    <Briefcase className="text-primary-600" size={20} />
                    <span className="text-gray-700 text-sm md:text-base">Freelance Designer</span>
                  </div>
                  <div className="flex items-center space-x-3 justify-center lg:justify-start">
                    <GraduationCap className="text-primary-600" size={20} />
                    <span className="text-gray-700 text-sm md:text-base">SMIT, Sikkim</span>
                  </div>
                  <div className="flex items-center space-x-3 justify-center lg:justify-start">
                    <MapPin className="text-primary-600" size={20} />
                    <span className="text-gray-700 text-sm md:text-base">Gangtok, Sikkim</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <motion.div variants={fadeInUp} className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 gradient-text">
              My Journey
            </h3>
            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative pl-6 sm:pl-8 border-l-2 border-primary-200"
                >
                  <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-primary-600 rounded-full -left-1.5 sm:-left-2 top-0"></div>
                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{exp.title}</h4>
                    <p className="text-primary-600 font-medium mb-2 text-sm sm:text-base">{exp.company}</p>
                    <p className="text-gray-500 text-xs sm:text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

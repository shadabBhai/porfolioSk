import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { FaBriefcase, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { HiMiniCodeBracket, HiMiniDocumentArrowDown } from "react-icons/hi2";
import { GoCommandPalette } from "react-icons/go";
import { CodeBracketIcon } from "@heroicons/react/16/solid";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const HeroSection = () => (
  <motion.section
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="min-h-screen flex items-center justify-center text-center px-4"
  >
    <div className="max-w-4xl mx-auto">
      <motion.h1
        variants={itemVariants}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        Hi, I'm SHADAB KHAN
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="text-xl md:text-2xl mb-8 text-gray-400"
      >
        A passionate developer building awesome things
      </motion.p>
      <motion.div
        variants={itemVariants}
        className="flex justify-center space-x-6"
      >
        <a
          href="https://www.linkedin.com/in/i-am-shadab-khan/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="h-8 w-8 hover:text-blue-500 transition-colors" />
        </a>
        <a
          href="https://github.com/shadabBhai"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="h-8 w-8 hover:text-gray-500 transition-colors" />
        </a>
        <a href="mailto:shadabkhan3992@gmail.com">
          <IoMdMail className="h-8 w-8 hover:text-red-500 transition-colors" />
        </a>
      </motion.div>
    </div>
  </motion.section>
);

export const AboutSection = () => {
  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "Firebase",
    "GitHub",
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="relative lg:w-1/3 group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="lg:w-2/3 space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Passionate full-stack developer with 5+ years of experience in
                creating beautiful and functional web applications. I specialize
                in modern JavaScript frameworks and have a strong eye for design
                and user experience.
              </p>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-2">
                <HiMiniCodeBracket className="h-6 w-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-gray-100">
                  Technical Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gray-900 rounded-full flex items-center gap-2"
                  >
                    <GoCommandPalette className="h-4 w-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Download CV Button */}
            <motion.div variants={itemVariants}>
              <a
                href="https://drive.google.com/file/d/1HLgg62083Z96pD3JjSE4h5B4xsjA5HAQ/view?usp=drive_link"
                download
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <HiMiniDocumentArrowDown className="h-5 w-5" />
                <span className="font-semibold">Download CV</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const ExperienceSection = () => {
  const experiences = [
    {
      company: "Tech Corp",
      role: "Senior Developer",
      duration: "2024 - Present",
      description: "Leading team in building scalable applications",
    },
    {
      company: "Tech Corp",
      role: "Senior Developer",
      duration: "2023 - 2024",
      description: "Leading team in building scalable applications",
    },
    {
      company: "Tech Corp",
      role: "Senior Developer",
      duration: "2021- 2023",
      description: "Leading team in building scalable applications",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <div className="relative space-y-8 before:absolute before:left-9 before:h-full before:w-1 before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-pink-500 md:before:left-1/2 md:before:-translate-x-1/2">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group pl-16 md:pl-0 md:even:pl-16 md:w-1/2 md:odd:self-end md:even:self-start"
            >
              {/* Animated border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-8 bg-gray-800 rounded-xl shadow-2xl hover:bg-gray-750 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-900 rounded-lg">
                    <FaBriefcase className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <IoCalendarNumberSharp className="h-5 w-5 text-purple-400" />
                  <span className="text-sm font-mono text-purple-300">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech?.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ y: -2 }}
                      className="px-3 py-1.5 text-sm bg-gray-900/50 rounded-full border border-gray-700 hover:border-purple-400 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Project 1",
      description: "An amazing web application",
      tech: ["React", "Tailwind", "Node.js"],
      link: "#",
    },
    {
      title: "Project 2",
      description: "An amazing web application",
      tech: ["React", "Tailwind", "Node.js"],
      link: "#",
    },
    {
      title: "Project 3",
      description: "An amazing web application",
      tech: ["React", "Tailwind", "Node.js", "TypeScript"],
      link: "#",
    },
    // Add more projects
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              viewport={{ once: true, margin: "50px" }}
              className="relative group"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Glowing border effect */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

              <motion.a
                href={project.link}
                className="block relative bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-all duration-300 h-full"
                whileHover={{ scale: 1.02 }}
              >
                {/* Project icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                  className="mb-4"
                >
                  <CodeBracketIcon className="h-8 w-8 text-purple-400" />
                </motion.div>

                {/* Title with gradient hover effect */}
                <motion.h3
                  whileHover={{ backgroundSize: "100% 2px" }}
                  className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-300"
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  className="text-gray-300 mb-6 leading-relaxed"
                >
                  {project.description}
                </motion.p>

                {/* Animated tech stack tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + i * 0.05 }}
                      className="px-3 py-1 bg-gray-900/50 rounded-full text-sm border border-gray-700 hover:border-purple-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                {/* Hidden link hover indicator */}
                <motion.div
                  className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: 10 }}
                  animate={{ x: 0 }}
                >
                  ↗
                </motion.div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ContactSection = () => (
  <section className="py-20 px-4 bg-gray-900">
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded font-bold transition-colors"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);

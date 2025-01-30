"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Senior Web Developer",
    company: "Tech Solutions Inc.",
    period: "Jan 2020 - Present",
    description:
      "Lead developer for various high-profile web applications. Implemented modern front-end technologies and improved overall performance.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd.",
    period: "Mar 2017 - Dec 2019",
    description:
      "Developed and maintained multiple web applications. Collaborated with cross-functional teams to deliver projects on time.",
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    period: "Jun 2015 - Feb 2017",
    description:
      "Assisted in the development of responsive websites. Gained experience in modern web technologies and agile methodologies.",
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Work Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-primary mb-2">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience


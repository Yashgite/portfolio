"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Soulputs Technology Solutions Pvt Ltd.",
    period: "Dec 2024 - Present",
    description:
      "Developed and maintained web applications using modern technologies. Worked on the development of a new product from scratch.",
  },
  {
    title: "Full Stack Developer",
    company: "CodElevate Technologies",
    period: "Jun 2024 - July 2024",
    description:
      "Developedd a comprehensive eccomerce website with customer and Admin panel from Scratch. mainly worked on backend using php and mysql.",
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              whileInView={{ opacity: 1, y: 0 }}
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


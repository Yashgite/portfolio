"use client"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

const technologies = [
  {
    category: "Frontend",
    skills: ["Html","Css","Bootstrap","React.js", "Next.js", "JavaScript", "TailwindCSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Php",],
  },
  {
    category: "Databases",
    skills: ["Mysql", "Mongodb","Firebase","PostgreSQL","Prisma"],
  },
  {
    category: "Others/Tools",
    skills: ["VS Code", "Postman", "Git", "GitHub","ShadCn","Prisma"],
  },
]

export default function TechStack() {
  return (
    <div className="container-custom py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Tools and Technologies
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
      </div>
    </div>
  )
}


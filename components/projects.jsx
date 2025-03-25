"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Moviedux",
    description: "a basic movie application implementing feature like search on the base of genere , name and add to wishlist",
    image: "./prj1.png",
    link: "#",
  },
  {
    title: "FoodHub",
    description: "A simple Foodhub Website which is develop by using plain Html and Css",
    image: "./prj2.png",
    link: "https://codesandbox.io/p/sandbox/github/Yashgite/FoodHub",
  },
  // {
  //   title: "Project 3",
  //   description: "A brief description of Project 3",
  //   image: "/react.png",
  //   link: "#",
  // },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={project.link}
                className="block bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


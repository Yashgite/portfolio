"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import ProfileCards from "./ProfileCards"

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <ProfileCards/>
            {/* <Image src="/img1.jpg" alt="Your Name" width={400} height={400} className="rounded-lg shadow-lg" /> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <p className="text-lg mb-4">
              Hello! I'm a passionate web developer and designer with a keen eye for detail and a love for creating
              intuitive, user-friendly interfaces. With several years of experience in the field, I've had the
              opportunity to work on a wide range of projects, from small business websites to large-scale web
              applications.
            </p>
            <p className="text-lg mb-4">
              My expertise lies in front-end development, particularly in React and Next.js. I'm also well-versed in
              modern CSS frameworks like Tailwind CSS, which allows me to create responsive and visually appealing
              designs efficiently.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying a good book. I'm always excited to take on new challenges and collaborate on innovative projects!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About


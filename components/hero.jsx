"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

const Hero = () => {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container-custom text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm Yash
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl mb-8"
        >
          I'm a{" "}
          <TypeAnimation
            sequence={["Web Developer", 2000, "Tech Enthusiast", 2000, "Problem Solver", "Frontend Developer", 2000, 2000, "Creative Thinker", 2000]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
            className="text-primary"
          />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
        >
          Passionate about creating beautiful and functional web experiences. Let's build something amazing together!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/80 transition-colors"
          >
            Hire Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero


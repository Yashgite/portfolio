"use client"

import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="py-8 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} yashgite.dev All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer


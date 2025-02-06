"use client"

import { motion } from "framer-motion"
import Link from "next/link";
import { useState } from "react"
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { ToastContainer,toast } from "react-toastify"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    toast.success("This service are inactive, plz try through linkdin")
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Contact Me
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8">
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
            <p className="mb-4">
              Feel free to reach out to me on social media or through the contact form. I'm always excited to connect
              with fellow developers and potential clients!
            </p>
            <p className="mb-4">
              Want a professional and eye-catching portfolio like this, connect with me! Let's build your perfect online presence.
            </p>
            <div className="flex space-x-4 text-2xl">
            <Link href="https://www.linkedin.com/in/yash-gite"> <CiLinkedin /> </Link>
            <Link href="https://github.com/Yashgite"><IoLogoGithub /></Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e)=> setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e)=> setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e)=> setFormData({...formData, message: e.target.value})}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/80 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact


"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import Link from "next/link"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container-custom py-4">
        <div className="flex items-center lg:justify-around justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link className="border p-3 rounded-full" href="https://drive.google.com/file/d/1WBDe3p5DoVoRb21zTbTGgmW-c5lJP5l2/view?usp=sharing" target="_blank">
              Resume
            </Link>
          </motion.div>
          <div className="space-x-5 hidden lg:block">
            <div className="space-x-4 flex items-center">
              <div className="space-x-4">
                {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}</div>
              <div>
                <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              </div>
            </div>


          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-foreground focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 space-y-2"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark")
                toggleMenu()
              }}
              className="block w-full text-left hover:text-primary transition-colors"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header


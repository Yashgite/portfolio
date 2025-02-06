
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
const inter = Inter({ subsets: ["latin"] })
import MouseMoveEffect from "@/components/mouse-move-effect"
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Yash Gite - Portfolio",
  description: "Web Developer and Designer Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <MouseMoveEffect />
          <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Your Name - Portfolio",
  description: "Web Developer and Designer Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

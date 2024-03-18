import { Outfit } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

//deployement
import { Analytics } from "@vercel/analytics/react"

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Tanya ADISSIN | Portfolio",
  description: "Explorez mon portfolio professionnel pour découvrir mes projets de développement web, incluant des applications full stack créatives et performantes conçues avec C#, .NET, Blazor et React.js. Démonstration de compétences techniques et approche centrée utilisateur en action.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header/>
          {children}
          <Analytics />
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}

import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import { ThemeProvider } from './theme-provider'


const Structur = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  return (

          
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <main className="max-w-7xl mx-auto ">
          <Hero />
      {children}
      <Footer />
      </main>
    </ThemeProvider>
  )
}

export default Structur
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import { motion, useScroll, useSpring } from 'framer-motion'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="loading-screen d-flex justify-content-center align-items-center">
        <motion.div
          className='loading-icon'
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    )
  }

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header />
      <Container fluid className="px-0">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Resume />
        <Contact />
      </Container>
    </>
  )
}

export default App
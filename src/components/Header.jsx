import { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Navbar expand="lg" fixed="top" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar.Brand href="#home" className="fw-fw-bold text-white">
            Sharif Khlief
          </Navbar.Brand>
        </motion.div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {['home', 'about', 'services', 'projects', 'resume', 'contact'].map((item) => (
              <motion.div
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * ['home', 'about', 'services', 'projects', 'resume', 'contact'].indexOf(item) }}
              >
                <Link
                  activeClass="active"
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </motion.div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
import { motion } from 'framer-motion'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-scroll'
import { FiChevronDown } from 'react-icons/fi'
import Profile from '../assets/images/Me.png'
import CV from '../assets/SharifKhlief-CV.pdf'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <Container className="hero-content">
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h6 className="text-accent mb-3">Hello, I'm</h6>
              <h1 className="display-3 fw-bold mb-3">Sharif Khlief</h1>
              <h2 className="h3 mb-3">Full-Stack Developer</h2>
              <p className="lead mb-5">
                Building modern web & mobile applications with React, Node.js, and AI-powered tools
              </p>
              <div className="d-flex gap-3">
                <Link to="contact" smooth={true} duration={500}>
                  <Button variant="primary" className="px-4 py-3">
                    Contact Me
                  </Button>
                </Link>
                <a href={`${CV}#toolbar=0`} target="_blank" rel="noopener noreferrer"className="text-decoration-none">
                  <Button variant="outline-light" className="px-4 py-3">
                    View My Resume
                  </Button>
                </a>
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="floating"
            >
              <div className="bg-sec rounded-circle">
                <img className='my-img' src={Profile} alt="Profile Img" />
              </div>
            </motion.div>
          </Col>
        </Row>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center mt-5"
        >
          <Link to="about" smooth={true} duration={500}>
            <FiChevronDown size={30} className="text-accent" />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero
import { motion } from 'framer-motion'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink } from 'react-icons/fi'
import StudyInEU from '../assets/images/study-europe.png'
import TvurciAfrika from '../assets/images/tvurci-afrika.png'
import BageterieBoulevard from '../assets/images/bageterie-boulevard.png'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const projects = [
    {
      title: 'Bageterie Boulevard',
      url: '#',
      image: BageterieBoulevard,
      description: 'Full-stack B2B application automating corporate food ordering. Built with React frontend, Node.js backend, and features like automated PDF generation and email notifications.',
      tech: 'React, Node.js, Puppeteer, Resend',
      private: true
    },
    {
      title: 'Study in Europe',
      url: 'https://amalalmustaqbal.com/',
      image: StudyInEU,
      description: 'Educational platform built with React helping students navigate European study opportunities. Features responsive design and optimized user experience.',
      tech: 'React, Node.js, Puppeteer, Resend',
      private: false
    },
    {
      title: 'Tvůrčí Afrika',
      url: 'https://www.tvurci-afrika.cz/',
      image: TvurciAfrika,
      description: 'WordPress platform showcasing African art and culture in the Czech Republic. Custom theme development with CMS functionality for content management.',
      tech: 'WordPress, PHP, Custom Theme, CMS',
      private: false
    }
  ]

  return (
    <section id="projects" ref={ref}>
      <Container>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="project-card text-center h-100">
                  {/* Conditional rendering for image link */}
                  {project.private ? (
                    // Private project - no clickable link, just the image
                    <div className="bg-sec project-box">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="img-fluid w-100 h-100 object-cover"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className='project-overlay'>
                        <span className="overlay-text">
                          Private Client Project
                        </span>
                      </div>
                    </div>
                  ) : (
                    // Public project - clickable link
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <div className="bg-sec project-box">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="img-fluid w-100 h-100 object-cover"
                          style={{ objectFit: 'cover' }}
                        />
                        <div className='project-overlay'>
                          <span className="overlay-text">
                            View Project
                          </span>
                        </div>
                      </div>
                    </a>
                  )}
                  
                  <Card.Body className='text-white'>
                    <Card.Title className="h5 mb-2">
                      {project.title} 
                    </Card.Title>
                    
                    <div className="tech-stack mb-2">
                      <small>{project.tech}</small>
                    </div>
                    
                    <Card.Text className="mb-3">
                      {project.description}
                    </Card.Text>
                    
                    <div className="project-actions">
                      {project.private ? (
                        <button className="btn btn-sm btn-outline-light" disabled>
                          <FiExternalLink className="me-1" /> Private Project
                        </button>
                      ) : (
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-sm btn-outline-light"
                        >
                          <FiExternalLink className="me-1" /> Visit Website
                        </a>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects
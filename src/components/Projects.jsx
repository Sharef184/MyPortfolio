import { motion } from 'framer-motion'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import StudyInEU from '../assets/images/study-europe.png'
import TvurciAfrika from '../assets/images/tvurci-afrika.png'
import JohnnyPizza from '../assets/images/johnny-pizza.png'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const projects = [
    {
      title: 'Study in Europe',
      year: '2024',
      url: 'https://amalalmustaqbal.com/',
      image: StudyInEU,
      description: 'An educational platform helping students navigate opportunities for studying in Europe.'
    },
    {
      title: 'Tvůrčí Afrika',
      year: '2025',
      url: 'https://www.tvurci-afrika.cz/',
      image: TvurciAfrika,
      description: 'A creative platform showcasing African art and culture in the Czech Republic.'
    },
    {
      title: 'Johnny Pizza Restaurant',
      year: '2025',
      url: 'https://www.johnny-pizza-restaurant.cz/',
      image: JohnnyPizza,
      description: 'Website for a popular pizza restaurant with online ordering system.'
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
          My Projects
        </motion.h2>
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="project-card h-100">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <div className="bg-sec project-box">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="img-fluid w-100 h-100 object-cover"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </a>
                  <Card.Body className='text-white'>
                    <Card.Title className="h5">{project.title} <span>({project.year})</span></Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-sm btn-outline-light"
                    >
                      Visit Website
                    </a>
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
import { motion } from 'framer-motion'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiLayout, FiSearch, FiPenTool } from 'react-icons/fi'

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const services = [
    {
      title: 'Design',
      icon: <FiPenTool className="service-icon" />,
      description: 'Intuitive, aesthetically pleasing designs focused on user experience. I create wireframes, mockups, and prototypes to ensure each product is both visually appealing and functionally sound.'
    },
    {
      title: 'Code',
      icon: <FiCode className="service-icon" />,
      description: 'Clean, efficient, and scalable code tailored for modern web applications. I develop responsive websites using technologies like React, JavaScript, and modern CSS frameworks.'
    },
    {
      title: 'SEO',
      icon: <FiSearch className="service-icon" />,
      description: 'Strategic Search Engine Optimization to enhance your site\'s visibility. I handle technical SEO, content optimization, and performance improvements to help your website rank higher.'
    },
    {
      title: 'Development',
      icon: <FiLayout className="service-icon" />,
      description: 'Full-stack web development solutions—from front-end user interfaces to back-end systems. I manage the complete development lifecycle to bring ideas to life efficiently and effectively.'
    }
  ]

  return (
    <section id="services" className="bg-sec" ref={ref}>
      <Container>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h2>
        <Row>
          {services.map((service, index) => (
            <Col md={6} lg={3} key={service.title} className="mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="service-card h-100 text-white">
                  <Card.Body className="text-center">
                    {service.icon}
                    <Card.Title className="h4 mb-3">{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
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

export default Services
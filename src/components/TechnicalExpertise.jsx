import { motion } from 'framer-motion'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiCloud, FiDatabase, FiSmartphone, FiTool, FiCpu } from 'react-icons/fi'

const TechnicalExpertise = () => { 
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const expertiseAreas = [
    {
      title: 'Frontend Development',
      icon: <FiSmartphone className="service-icon" />,
      description: 'Building responsive applications with React, React Native, TypeScript, and modern CSS frameworks. Specializing in creating intuitive user experiences and complex state management.'
    },
    {
      title: 'Backend & APIs',
      icon: <FiDatabase className="service-icon" />,
      description: 'Developing scalable Node.js/Express services, REST APIs, and database integrations. Focus on performance, security, and maintainable server-side architecture.'
    },
    {
      title: 'Cloud & DevOps',
      icon: <FiCloud className="service-icon" />,
      description: 'Deployment, containerization with Docker, and CI/CD pipelines on AWS/Google Cloud. Implementing modern DevOps practices for reliable application delivery.'
    },
    {
      title: 'Full-Stack Solutions',
      icon: <FiCode className="service-icon" />,
      description: 'End-to-end application development from concept to deployment. Combining frontend and backend expertise to deliver complete, scalable solutions.'
    },
    {
      title: 'Modern Development Tools',
      icon: <FiTool className="service-icon" />,
      description: 'Proficient with Git, CI/CD, testing frameworks, and AI-assisted development using GitHub Copilot. Embracing tools that enhance productivity and code quality.'
    },
    {
      title: 'Data & Visualization',
      icon: <FiCpu className="service-icon" />,
      description: 'Creating interactive dashboards and data visualizations with D3.js and BI tools like Qlik Sense. Transforming complex data into actionable insights.'
    }
  ]

  return (
    <section id="expertise" className="bg-sec" ref={ref}>
      <Container>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Technical Expertise
        </motion.h2>
        <Row>
          {expertiseAreas.map((area, index) => (
            <Col md={6} lg={4} key={area.title} className="mb-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="expertise-card h-100 text-white">
                  <Card.Body className="text-center">
                    <div className="expertise-icon-wrapper m-3">
                      {area.icon}
                    </div>
                    <Card.Title className="h5">{area.title}</Card.Title>
                    <Card.Text className="small m-5">{area.description}</Card.Text>
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

export default TechnicalExpertise
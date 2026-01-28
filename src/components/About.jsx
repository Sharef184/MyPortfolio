import { motion } from 'framer-motion'
import { Container, Row, Col } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import Profile from '../assets/images/Me3.png'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="about" ref={ref}>
      <Container>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="my-img-box">
                <img className='my-img2' src={Profile} alt="Profile Img" />
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="h4 mb-4">Passionate Web Developer Based in Prague</h3>
              <p className="mb-4">
                I’m passionate about the intersection of design and development. With a diverse skill set, 
                I enjoy the entire process of creating websites from concept to completion.
              </p>
              <p className="mb-4">
                I specialize in building responsive, user-friendly websites using modern technologies. My development approach blends clean, 
                functional code with visually compelling design to deliver seamless digital experiences.
              </p>
              <p>
                I’m continuously expanding my skills and embracing new challenges. With strong communication and leadership abilities, 
                I’ve successfully taken on roles such as Team Leader and Business Development Representative over the past two years.
              </p>
              <div className="d-flex flex-wrap gap-3">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Node.js', 'Git', 'WordPress', 'JIRA', 'AWS', 'Google Cloud' , 'Salesforce', 'Qlik Sense' ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="badge bg-accent text-dark px-3 py-2 text-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
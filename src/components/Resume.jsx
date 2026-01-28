import { motion } from 'framer-motion'
import { Container, Row, Col } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import Cv from '../assets/images/SharifKhlief-CV-Code.png'

const Resume = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="resume" ref={ref}>
      <Container>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My Resume
        </motion.h2>
        <Row>
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className='cv-container'>
                <img src={Cv} alt="CV" className='cv' />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Resume
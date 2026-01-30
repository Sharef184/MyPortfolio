import { motion } from 'framer-motion'
import { Container } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'

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
        
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="h4 mb-4 text-center">Full-Stack Developer Based in Prague</h3>
          
          <div className="about-text">
            <p className="mb-4">
              Full-Stack Developer (Front-End Specialization) with 8+ years of experience building responsive web and mobile applications.
            </p>
            
            <p className="mb-4">
              Specialized in React/React Native ecosystems with recent backend training in Node.js, Docker, and cloud services. 
              Proven track record in delivering scalable solutions for Czech and international clients. Fluent in English, Czech, and Arabic.
            </p>
            
            <p className="mb-4">
              Currently building a full-stack React Native application, implementing real-time features and cloud deployment. 
              Passionate about creating intuitive user experiences and solving complex technical challenges across the stack.
            </p>
            
            <p className="mb-0">
              Proactively integrating AI tools like GitHub Copilot into my workflow to boost efficiency and code quality.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default About
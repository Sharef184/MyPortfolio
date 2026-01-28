import { motion, AnimatePresence } from 'framer-motion'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiGithub, FiFacebook, FiCheckCircle, FiXCircle } from 'react-icons/fi'
import emailjs from 'emailjs-com'
import { useRef, useState } from 'react'

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const formRef = useRef()
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  const validate = (formData) => {
    const nameRegex = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)+$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const newErrors = {}

    if (!nameRegex.test(formData.get('name'))) {
      newErrors.name = 'Please enter your full name (first and last).'
    }

    if (!emailRegex.test(formData.get('email'))) {
      newErrors.email = 'Please enter a valid email address.'
    }

    return newErrors
  }

  const sendEmail = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const validationErrors = validate(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setStatus('sending')

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        setStatus('success')
        setMessage('Thank you! Your message has been sent.')
        formRef.current.reset()

        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 7000)
      },
      (error) => {
        setStatus('error')
        setMessage('Something went wrong. Please try again.')
        console.error(error)

        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 7000)
      }
    )
  }

  return (
    <section id="contact" className="bg-sec" ref={ref}>
      {/* ✅ Centered Alert */}
      <AnimatePresence>
        {status !== 'idle' && message && (
          <motion.div
            key="alert"
            className={`custom-alert ${status === 'success' ? 'alert-success' : 'alert-danger'}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <div className="d-flex align-items-center gap-2">
              {status === 'success' ? (
                <FiCheckCircle size={22} />
              ) : (
                <FiXCircle size={22} />
              )}
              <span>{message}</span>
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={() => {
                setStatus('idle')
                setMessage('')
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Container>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <Row>
          <Col lg={5} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h3 className="h4 mb-4">Contact Information</h3>
              <p className="mb-5">
                I welcome the opportunity to connect. Whether you have questions, ideas, or a project in mind, feel free to reach out.
                I'm always open to collaborating on innovative and meaningful digital solutions.
              </p>
              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-center gap-3 contact-effict">
                  <FiMail className="contact-icon" />
                  <a href="mailto:sharifkhlief@gmail.com" className="a-font-color text-decoration-none">
                    sharifkhlief@gmail.com
                  </a>
                </div>
                <div className="d-flex align-items-center gap-3 contact-effict">
                  <FiPhone className="contact-icon" />
                  <a href="tel:+420606388475" className="a-font-color text-decoration-none">
                    +420 606 388 475
                  </a>
                </div>
                <div className="d-flex align-items-center gap-3 contact-effict">
                  <FiGithub className="contact-icon" />
                  <a href="https://github.com/Sharef184" target="_blank" rel="noopener noreferrer" className="a-font-color text-decoration-none">
                    github.com/Sharef184
                  </a>
                </div>
                <div className="d-flex align-items-center gap-3 contact-effict">
                  <FiFacebook className="contact-icon" />
                  <a href="https://www.facebook.com/shareef.khlef" target="_blank" rel="noopener noreferrer" className="a-font-color text-decoration-none">
                    facebook.com/Sharif.Khlief
                  </a>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Form ref={formRef} onSubmit={sendEmail} noValidate>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formName">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        isInvalid={!!errors.name}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        isInvalid={!!errors.email}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formSubject" className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" name="subject" placeholder="Enter subject" required />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={5} placeholder="Enter your message" required />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
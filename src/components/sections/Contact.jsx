import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiSend, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import Section from '../common/Section';
import Button from '../common/Button';

const ContactContainer = styled.div`
  display: flex;
  gap: 48px;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled(motion.div)`flex: 1;`;
const ContactForm = styled(motion.div)`flex: 1.5;`;
const ContactTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 24px;
  span {
    color: ${({ theme }) => theme.primary};
  }
`;

const ContactText = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 32px;
  line-height: 1.8;
`;

const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const ContactIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary}15;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ContactDetails = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
  p, a {
    color: ${({ theme }) => theme.textSecondary};
    font-size: 0.95rem;
    margin: 0;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const FormGroup = styled.div`margin-bottom: 24px;`;
const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 0.95rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}30;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  resize: vertical;
  min-height: 150px;
  font-size: 1rem;
  font-family: inherit; /* Ensure same font as inputs */
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}30;
  }
`;


const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 24px;
  color: white;
  font-weight: 600;
`;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    const response = await fetch('https://formspree.io/f/mqaqwdgv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <Section id="contact" title="Get In Touch">
      <ContactContainer>
        <ContactInfo
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ContactTitle variants={itemVariants}>
            Let's discuss your <span>project</span>
          </ContactTitle>

          <ContactText variants={itemVariants}>
            Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello. I'm always open to discussing new projects and ideas.
          </ContactText>

          <ContactItems variants={containerVariants}>
            <ContactItem variants={itemVariants}>
              <ContactIcon><FiMapPin /></ContactIcon>
              <ContactDetails>
                <h4>Location</h4>
                <p>Guntur, India</p>
              </ContactDetails>
            </ContactItem>

            <ContactItem variants={itemVariants}>
              <ContactIcon><FiPhone /></ContactIcon>
              <ContactDetails>
                <h4>Phone</h4>
                <p><a href="tel:+917075846355">+91 7075846355</a></p>
              </ContactDetails>
            </ContactItem>

            <ContactItem variants={itemVariants}>
              <ContactIcon><FiMail /></ContactIcon>
              <ContactDetails>
                <h4>Email</h4>
                <p><a href="mailto:vasireddysaipraneeth1605@gmail.com">vasireddysaipraneeth1605@gmail.com</a></p>
              </ContactDetails>
            </ContactItem>
          </ContactItems>
        </ContactInfo>

        <ContactForm
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup variants={itemVariants}>
                <FormLabel htmlFor="name">Your Name</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup variants={itemVariants}>
                <FormLabel htmlFor="email">Your Email</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>

            <FormGroup variants={itemVariants}>
              <FormLabel htmlFor="message">Your Message</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                variant="primary"
                size="large"
                icon={<FiSend />}
                style={{ width: '100%' }}
              >
                Send Message
              </Button>
            </motion.div>

            {success && (
              <SuccessMessage>
                 Message sent successfully!
              </SuccessMessage>
            )}
          </form>
        </ContactForm>
      </ContactContainer>
    </Section>
  );
};

export default Contact;

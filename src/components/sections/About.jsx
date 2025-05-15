import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiDownload, FiUser, FiCalendar, FiMapPin, FiMail, FiEye  } from 'react-icons/fi';
import Section from '../common/Section';
import Button from '../common/Button';
import { useState } from 'react';

const AboutContent = styled.div`
  display: flex;
  gap: 48px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const AboutImageContainer = styled(motion.div)`
  flex: 1;
  position: relative;
  max-width: 300px; /* Limit the image container width */

  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border: 4px solid ${({ theme }) => theme.primary};
    z-index: -1;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 10px 30px ${({ theme }) => theme.shadow};
    display: block;
  }

  @media (max-width: 992px) {
    max-width: 240px;
    margin: 0 auto 40px;
  }
`;


const AboutDetails = styled(motion.div)`
  flex: 1.2;
`;

const AboutTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 24px;

  span {
    color: ${({ theme }) => theme.primary};
  }
`;

const AboutDescription = styled.div`
  margin-bottom: 32px;

  p {
    margin-bottom: 16px;
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.8;
  }
`;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};


const FullscreenIframe = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  margin: 20px;
  padding: 10px 20px;
  background: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
`;

const About = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <Section id="about" title="About Me">
      <AboutContent>
        <AboutImageContainer
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/passport.jpg"
            alt="About me"
          />
        </AboutImageContainer>

        <AboutDetails
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AboutTitle variants={itemVariants}>
            Full Stack Developer & <span>Designer</span>
          </AboutTitle>

          <AboutDescription variants={itemVariants}>
            <p>
              I'm a dedicated full stack developer and an undergraduate Computer Science and Engineering student,
              passionate about building responsive, user-centric web applications. I specialize in modern development
              technologies like Spring Boot, React, and RESTful APIs.
            </p>
            <p>
              My approach blends technical proficiency with continuous learning and creative problem-solving. I strive
              to write clean, maintainable code and build seamless digital experiences that are both functional and
              intuitive.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new tech stacks, participating in hackathons, or staying
              current with the latest trends in software development and full stack technologies.
            </p>
          </AboutDescription>

          <motion.div variants={itemVariants}>
            <Button
              variant="primary"
              icon={<FiEye />}
              onClick={() => setShowResume(true)}
            >
              View Resume
            </Button>
          </motion.div>
        </AboutDetails>
      </AboutContent>

      {showResume && (
        <FullscreenIframe>
          <CloseButton onClick={() => setShowResume(false)}>Close Resume</CloseButton>
          <iframe
            src="/files/Resume.pdf"
            width="100%"
            height="100%"
            style={{ border: 'none', flexGrow: 1 }}
            title="Resume Fullscreen"
          />
        </FullscreenIframe>
      )}
    </Section>
  );
};

export default About;

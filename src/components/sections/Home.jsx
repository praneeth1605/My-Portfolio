import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Section from '../common/Section';
import Button from '../common/Button';

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 80px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding-top: 120px;
  }
`;

const HeroContent = styled(motion.div)`
  flex: 1;
  max-width: 600px;
  
  @media (max-width: 768px) {
    order: 2;
    margin-top: 32px;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 16px;
  
  @media (max-width: 992px) {
    font-size: 3rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2.5rem;
  }
  
  span {
    color: ${({ theme }) => theme.primary};
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 10px;
      left: 0;
      width: 100%;
      height: 8px;
      background: ${({ theme }) => theme.primary}40;
      z-index: -1;
    }
  }
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 24px;
  
  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 32px;
  line-height: 1.6;
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 16px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  box-shadow: 0 2px 10px ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const HeroImage = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 32px;
  }
  
  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    z-index: 1;
  }
`;

const BackgroundShape = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary}20;
  z-index: 0;
  
  &.shape1 {
    top: -50px;
    right: 50px;
    width: 200px;
    height: 200px;
  }
  
  &.shape2 {
    bottom: 0;
    left: 60%;
    width: 350px;
    height: 350px;
  }
`;

const scrollDown = {
  y: [0, 10, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: 'loop'
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Home = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Section id="home">
      <HeroContainer>
        <HeroContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroTitle variants={itemVariants}>
            Hi, I'm <span>Vasireddy Venkata Sai Praneeth</span>
          </HeroTitle>
          <HeroSubtitle variants={itemVariants}>
            Full Stack Developer
          </HeroSubtitle>
          <HeroDescription variants={itemVariants}>
            I build robust, full-stack web applications with a focus on clean code, responsive design, and seamless user experiences.
Specializing in Spring Boot, I turn ideas into scalable, high-performance solutions.
Let’s collaborate to transform your vision into a powerful digital product.
          </HeroDescription>
          
          <HeroButtons variants={itemVariants}>
            <Button 
              variant="primary" 
              size="large"
              onClick={handleContactClick}
              icon={<FiArrowRight />}
              iconPosition="right"
            >
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              size="large"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </HeroButtons>
          
          <SocialLinks variants={itemVariants}>
            <SocialIcon 
              href="https://github.com/praneeth1605" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <FiGithub />
            </SocialIcon>
            <SocialIcon 
              href="https://www.linkedin.com/in/vasireddy-venkata-sai-praneeth/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </SocialIcon>
            <SocialIcon 
               href="mailto:vasireddysaipraneeth1605@gmail.com" 
               target="_blank" 
               rel="noopener noreferrer"
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.95 }}
               aria-label="Email"
            >
              <FiMail />
            </SocialIcon>
          </SocialLinks>
        </HeroContent>
        
        <HeroImage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BackgroundShape 
            className="shape1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <BackgroundShape 
            className="shape2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <img 
            src="/images/Hero Image.jpeg" 
            alt="Professional portrait" 
          />
        </HeroImage>
      </HeroContainer>
    </Section>
  );
};

export default Home;
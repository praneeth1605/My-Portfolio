import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const SectionContainer = styled(motion.section)`
  padding: 80px 0;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 48px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 64px;
    height: 4px;
    background: ${({ theme }) => theme.primary};
    border-radius: 2px;
  }
`;

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Section = ({ id, title, children, ...props }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <SectionContainer
      id={id}
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      {...props}
    >
      <SectionContent>
        {title && (
          <SectionTitle
            variants={titleVariants}
            className="section-title"
          >
            {title}
          </SectionTitle>
        )}
        {children}
      </SectionContent>
    </SectionContainer>
  );
};

export default Section;
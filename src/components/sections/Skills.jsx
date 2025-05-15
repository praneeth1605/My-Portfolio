import { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { motion } from 'framer-motion';

const skillsData = [
  "HTML", "CSS", "JavaScript", "React.js", "JSP", "JSF", "Servlets",

  "Java", "Spring", "SpringBoot", "MySQL", "SQL", "Hibernate",

  "DevOps", "Git", "GitHub", "Jenkins", "Postman", "Maven", 
];

const toolsData = [
  { name: "Java", image: "/images/java.png" },
  { name: "Spring Boot", image: "/images/spring.png" },
  { name: "React.js", image: "/images/react.png" },
  { name: "MySQL", image: "/images/mysql.png" },
  { name: "Jenkins", image: "/images/jenkins.png" },
  { name: "Git", image: "/images/git.png" }
  
];

// Styled components
const Section = styled.section`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.background};
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
  position: relative;

  &::after {
    content: '';
    width: 60px;
    height: 4px;
    background-color: ${({ theme }) => theme.primary};
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  max-width: 750px;
  margin: 0 auto;
`;

const Tag = styled(motion.span)`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 2px 6px ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.cardHover};
    color: white;
    transform: translateY(-2px);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.card};
  padding: 2rem 1rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px ${({ theme }) => theme.shadow};
    border-color: ${({ theme }) => theme.primary};
  }
`;

const IconWrapper = styled.div`
  background-color: black;
  border-radius: 50%;
  padding: 1rem;
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconImage = styled.img`
  max-width: 75%;
  max-height: 75%;
`;

const ToolName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

// Component
export const Skills = () => {
  const theme = useTheme();

  return (
    <Section id="skills">
      <div className="container">
        <Title>Skills & Tech Stack</Title>

        <TagsContainer>
          {skillsData.map((skill, i) => (
            <Tag
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </Tag>
          ))}
        </TagsContainer>
        
        <br/>
        <br/>
        <br/>

        <Grid>
          {toolsData.map((tool, i) => (
            <Card
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconWrapper>
                <IconImage src={tool.image} alt={tool.name} />
              </IconWrapper>
              <ToolName>{tool.name}</ToolName>
            </Card>
          ))}
        </Grid>
      </div>
    </Section>
  );
};
export default Skills;
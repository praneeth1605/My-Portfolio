import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';
import Section from '../common/Section';
import Card from '../common/Card';
import Button from '../common/Button';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  background: ${({ active, theme }) => active ? theme.primary : theme.card};
  color: ${({ active, theme }) => active ? 'white' : theme.text};
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({ active, theme }) => active ? 
    `0 4px 15px ${theme.primary}50` : 
    `0 2px 10px ${theme.shadow}`};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ active, theme }) => active ? theme.primary : theme.cardHover};
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 32px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const MoreProjectsContainer = styled.div`
  text-align: center;
  margin-top: 48px;
`;

const projectsData = [
  {
    id: 1,
    title: 'Enterprise Resource Planning (ERP)',
    description: 'A web-based ERP application designed for educational institutions to manage students, academics, and administration efficiently through role-based access.',
    image: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-erp-illustration_23-2149379505.jpg?semt=ais_hybrid&w=740',
    category: 'web',
    tags: ['JSP', 'Spring Boot', 'Java', 'MySQL'],
    githubLink: 'https://github.com/praneeth1605/Erp-Management-System',
  },
  {
    id: 2,
    title: 'Placement Management System ',
    description: 'A comprehensive Placement Management System designed to streamline student registrations, job postings, interview scheduling, and placement tracking for educational institutions.',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQHbGvAPeTCCSg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1722995801658?e=2147483647&v=beta&t=-jcVs8vUbA7MtkyflmthqvuLCTp6UcI2jfRp7IrhaQo',
    category: 'web',
    tags: ['JSP', 'Java EE', 'Servlets', 'JSF','MySQL'],
    githubLink: 'https://github.com/praneeth1605/Placement-Tracking-And-Activity-Management-System',
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'A visually stunning travel blog design with custom animations, interactive maps, and optimized image galleries.',
    image: '/images/Task.png',
    category: 'web',
    tags: ['JSP', 'Spring Boot', 'MySQL', 'DevOps', 'Git', 'Jenkins'],
    liveLink: '#',
    githubLink: '#',
  },
  
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === filter);
  
  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  
  const handleShowMore = () => {
    setVisibleProjects(prev => prev + 3);
  };
  
  return (
    <Section id="projects" title="My Projects">
      <ProjectsContainer>
        
        
        <AnimatePresence mode="wait">
          <ProjectsGrid
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {displayedProjects.map((project) => (
              <Card
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
                footer={
                  <ProjectButtons>
                    <Button 
                      size="small" 
                      variant="outline"
                      icon={<FiGithub />}
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      Code
                    </Button>

                  </ProjectButtons>
                }
                whileHover={{ y: -10 }}
              />
            ))}
          </ProjectsGrid>
        </AnimatePresence>
        
        {visibleProjects < filteredProjects.length && (
          <MoreProjectsContainer>
            <Button 
              variant="outline" 
              icon={<FiFilter />}
              onClick={handleShowMore}
            >
              Load More Projects
            </Button>
          </MoreProjectsContainer>
        )}
      </ProjectsContainer>
    </Section>
  );
};

export default Projects;
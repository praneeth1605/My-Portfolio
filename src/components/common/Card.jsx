import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px ${({ theme }) => theme.shadow};
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    ${CardContainer}:hover & {
      transform: scale(1.05);
    }
  }
`;

const CardContent = styled.div`
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text};
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 16px;
  flex: 1;
`;

const CardFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

const CardTag = styled.span`
  background: ${({ theme }) => `${theme.primary}20`};
  color: ${({ theme }) => theme.primary};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Card = ({ 
  image, 
  title, 
  description, 
  tags, 
  footer,
  ...props 
}) => {
  return (
    <CardContainer
      variants={cardVariants}
      {...props}
    >
      {image && (
        <CardImage>
          <img src={image} alt={title} />
        </CardImage>
      )}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        
        {tags && tags.length > 0 && (
          <CardTags>
            {tags.map((tag, index) => (
              <CardTag key={index}>{tag}</CardTag>
            ))}
          </CardTags>
        )}
        
        {footer && <CardFooter>{footer}</CardFooter>}
      </CardContent>
    </CardContainer>
  );
};

export default Card;
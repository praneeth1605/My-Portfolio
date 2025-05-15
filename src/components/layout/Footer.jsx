import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.card};
  padding: 48px 0 24px;
  color: ${({ theme }) => theme.text};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  max-width: 300px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.primary};
  
  span {
    color: ${({ theme }) => theme.accent};
  }
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const FooterTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 16px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: ${({ theme }) => theme.primary};
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 8px;
  
  a {
    color: ${({ theme }) => theme.textSecondary};
    transition: color 0.3s ease;
    display: inline-block;
    
    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: translateX(3px);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.border};
  margin: 16px 0;
`;

const Copyright = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
  margin-top: 16px;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterSection>
            <FooterLogo>
              Port<span>folio</span>
            </FooterLogo>
            <FooterText>
              A showcase of my skills, projects, and professional experience.
              Let's work together to build something amazing.
            </FooterText>
            <SocialLinks>
              <SocialIcon href="https://github.com/praneeth1605" aria-label="GitHub">
                <FiGithub />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/vasireddy-venkata-sai-praneeth/" aria-label="LinkedIn">
                <FiLinkedin />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Twitter">
                <FiTwitter />
              </SocialIcon>
              <SocialIcon href="mailto:vasireddysaipraneeth1605@gmail.com" aria-label="Email">
                <FiMail />
              </SocialIcon>
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#home">Home</a></FooterLink>
              <FooterLink><a href="#about">About Me</a></FooterLink>
              <FooterLink><a href="#skills">Skills</a></FooterLink>
              <FooterLink><a href="#projects">Projects</a></FooterLink>
              <FooterLink><a href="#certifications">Certifications</a></FooterLink>
              <FooterLink><a href="#contact">Contact</a></FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Contact</FooterTitle>
            <FooterText>
              Feel free to reach out to me for collaborations or just a friendly chat.
            </FooterText>
            <FooterText>
              <strong>Email:</strong> vasireddysaipraneeth1605@gmail.com
            </FooterText>
            <FooterText>
              <strong>Location:</strong> Guntur, India
            </FooterText>
          </FooterSection>
        </FooterTop>
        
        <Divider />
        
        <Copyright>
          © {currentYear} Vasireddy Venkata Sai Praneeth. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme, scrolled }) => 
    scrolled ? theme.card : 'transparent'};
  box-shadow: ${({ theme, scrolled }) => 
    scrolled ? `0 2px 10px ${theme.shadow}` : 'none'};
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  
  span {
    color: ${({ theme }) => theme.accent};
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  margin: 0 16px;
  color: ${({ theme, active }) => active ? theme.primary : theme.text};
  font-weight: ${({ active }) => active ? '600' : '400'};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ active }) => active ? '100%' : '0'};
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.card};
  box-shadow: 0 2px 5px ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 75vw;
  max-width: 300px;
  background: ${({ theme }) => theme.card};
  padding: 24px;
  z-index: 1001;
  box-shadow: -2px 0 10px ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
`;

const MobileNavLinks = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
`;

const MobileNavLink = styled.a`
  margin: 16px 0;
  font-size: 1.2rem;
  color: ${({ theme, active }) => active ? theme.primary : theme.text};
  font-weight: ${({ active }) => active ? '600' : '400'};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ activeSection, setActiveSection, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavContainer scrolled={scrolled}>
      <NavContent>
        <Logo onClick={() => handleNavClick('home')}>
          Port<span>folio</span>
        </Logo>
        
        <NavLinks>
          {navItems.map(item => (
            <NavLink 
              key={item.id}
              href={`#${item.id}`}
              active={activeSection === item.id}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              {item.label}
            </NavLink>
          ))}
          
          <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </ThemeToggle>
        </NavLinks>
        
        <MobileMenuToggle 
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu />
        </MobileMenuToggle>
      </NavContent>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <Overlay 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <CloseButton 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <FiX />
              </CloseButton>
              
              <Logo onClick={() => handleNavClick('home')}>
                Port<span>folio</span>
              </Logo>
              
              <MobileNavLinks>
                {navItems.map(item => (
                  <MobileNavLink 
                    key={item.id}
                    href={`#${item.id}`}
                    active={activeSection === item.id}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    {item.label}
                  </MobileNavLink>
                ))}
                
                <ThemeToggle 
                  onClick={toggleTheme} 
                  style={{ marginTop: '16px', alignSelf: 'flex-start' }}
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? <FiMoon /> : <FiSun />}
                </ThemeToggle>
              </MobileNavLinks>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

export default Navbar;
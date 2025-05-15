import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { lightTheme, darkTheme } from './styles/themes';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import ScrollToTop from './components/common/ScrollToTop';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

function App() {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section[id]');
    
    setIsScrolling(true);
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        if (!isScrolling) {
          setActiveSection(section.getAttribute('id'));
        }
      }
    });
    
    // Debounce scrolling state
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <AppContainer>
        <Navbar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          theme={theme} 
          toggleTheme={toggleTheme} 
        />
        <Main>
          <AnimatePresence mode="wait">
            <Home id="home" />
            <About id="about" />
            <Skills id="skills" />
            <Projects id="projects" />
            <Certifications id="certifications" />
            <Contact id="contact" />
          </AnimatePresence>
        </Main>
        <Footer />
        <ScrollToTop />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
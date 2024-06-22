// src/App.tsx
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';

const App = () => {
  return (
    
    <Box bg={'#222831'}>
      <Navbar />
      <Box id="about" >
        {/* Embed the About component */}
        <About />
      </Box>
      <Box id="education">
        {/* Embed the Education component */}
        <Education />
      </Box>
      <Box id="projects">
        {/* Embed the Projects component */}
        <Projects />
      </Box>
      <Box id="skills">
        {/* Embed the Projects component */}
        <Skills />
      </Box>
    </Box>
  );
};

export default App;

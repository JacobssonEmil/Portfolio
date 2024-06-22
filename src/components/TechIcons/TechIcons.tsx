import React from 'react';
import { Avatar, Box, Image, Tooltip, Wrap, WrapItem } from '@chakra-ui/react';

const TechIcons = () => {
  const icons = [
    { src: './images/JavaScript.png', alt: 'JavaScript' },
    { src: './images/React.png', alt: 'React' },
    { src: './images/Nodejs.png', alt: 'Node.js' },
    { src: './images/Python.png', alt: 'Python' },
    { src: './images/MySQL.png', alt: 'MySQL' },
    { src: './images/MongoDB.png', alt: 'MongoDB' },
    { src: './images/Git.png', alt: 'Git' },
    { src: './images/Bootstrap.png', alt: 'Bootstrap' },
    { src: './images/Kotlin.png', alt: 'Kotlin' },
    { src: './images/JetpackCompose.png', alt: 'JetpackCompose' }
];

  return (
    <Wrap spacing={'30'} justify="center" maxW={600}>

      {icons.map((icon, index) => (
       <Tooltip label={icon.alt} key={index} hasArrow>
        <WrapItem key={index}>
          <Box p="4" boxShadow='dark-lg' rounded='md' bg="#EEEEEE" borderRadius="50">
            <Image src={icon.src} alt={icon.alt} boxSize={8}/>
          </Box>
        </WrapItem>
        </Tooltip>
      ))}
      
    </Wrap>
  );
};

export default TechIcons;

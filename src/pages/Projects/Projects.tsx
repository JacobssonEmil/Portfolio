import {
    Box,
    Container,
    Heading,
    Text,
    Flex,
    Link,
    chakra,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Stack,
    Image,
    Badge,
  } from '@chakra-ui/react';
  import { FaGithub } from 'react-icons/fa';
  import ProjectCardMedlemma from '../../components/ProjectCard/ProjectCardMedlemma'
  
  function Project() {
    return [
      <Container maxWidth="1200px" marginTop="120px">
        <Box>
          <Heading size="lg">
            <chakra.span
              borderBottom="3px solid #2b6cb0"
              display="inline-block"
              paddingBottom="4px"
            >
              Projects
            </chakra.span>
          </Heading>
  
          <ProjectCardMedlemma/>
          
        </Box>
      </Container>
    ]
  }
  
  export default Project;
  
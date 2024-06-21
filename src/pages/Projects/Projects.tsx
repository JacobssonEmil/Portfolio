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
    SimpleGrid,
  } from '@chakra-ui/react';
  import { FaGithub } from 'react-icons/fa';
  import ProjectCardMedlemma from '../../components/ProjectCards/ProjectCardMedlemma'
  import ProjectCardSmartHouse from '../../components/ProjectCards/ProjectCardSmartHouse'
  
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
            <ProjectCardSmartHouse/>
          
        </Box>
      </Container>
    ]
  }
  
  export default Project;
  
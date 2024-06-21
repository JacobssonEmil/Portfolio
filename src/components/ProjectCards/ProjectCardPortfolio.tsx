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
    Highlight
  } from '@chakra-ui/react';
  import { FaGithub } from 'react-icons/fa';
  
  function ProjectCardPortfolio() {
      return (
          <Card maxW='sm' overflow="hidden" bg={'#2c5282'} height={350} width={350} display='flex' flexDirection='column'
            _hover={{
            transform: 'scale(1.05)', 
            transition: 'transform 0.3s ease-in-out',
        }}>
              <Image
                  src='/images/Portfolio.png'
                  alt='Smart House'
                  objectFit={'cover'}
                  height={175}
                  
              />
              
              <Stack mt='0' spacing='3' p={5} height={120} overflow={'hidden'}>
                  <Heading size='md' color={'white'}>Portfolio</Heading>
                  <Text color={'white'}>
                  A digital portfolio developed using React and ChakraUI.
                  </Text>
              </Stack>
  
              {/* Ensuring that the footer sticks to the bottom */}
              <Flex flexGrow={1} />
  
              <CardFooter>
                  <Flex justifyContent="space-between" width="100%">
                      <ButtonGroup spacing='2'>
                          <Link href='https://github.com/JacobssonEmil' isExternal>
                              <FaGithub size="30" color="white"/>
                          </Link>
                      </ButtonGroup>
                      <ButtonGroup spacing='2'>
                          <Link href='#' isExternal>
                              <Badge bg={'#C6F6D5'}>Live Demo</Badge>
                          </Link>
                      </ButtonGroup>
                  </Flex>
              </CardFooter>
          </Card>
      );
  }
  
  export default ProjectCardPortfolio;
  
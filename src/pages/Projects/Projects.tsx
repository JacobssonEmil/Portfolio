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
          <Card maxW='sm' mt={50}>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Medlemma</Heading>
                <Text>
                  En app för att hantera dina medlemskap i butiker. Med hjälp av denna app kan användaren enkelt samla, organisera och hantera alla sina medlemskap i olika butiker på ett effektivt sätt. Användaren kan också smidigt visa upp sina medlemskort direkt från sin mobil vid behov
                </Text>
                <Text color='#2b6cb0'>
                  2023
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Flex justifyContent="space-between" width="100%">
                <ButtonGroup spacing='2'>
                  <Link href='https://github.com/JacobssonEmil' isExternal>
                    <FaGithub size="30" color="#181717"/>
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
        </Box>
      </Container>
    ]
  }
  
  export default Project;
  
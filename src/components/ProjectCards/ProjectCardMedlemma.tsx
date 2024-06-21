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

function ProjectCardMedlemma(){

    return(

        <Card maxW='sm' overflow="hidden" bg={'#F7FAFC'}> 
            <Image
                src='/images/Andriod.jpg'
                alt='Medlemma'
            
                _hover={{
                transform: 'scale(1.05)', 
                transition: 'transform 0.3s ease-in-out', 
                }}
            />
            
            <Stack mt='0' spacing='3' p={5}>
            <Text color='#2b6cb0'>
                2023
                </Text>
                <Heading size='md'>Medlemma</Heading>
                <Text>
                En app för att hantera dina medlemskap i butiker. Med hjälp av denna app kan användaren enkelt samla, organisera och hantera alla sina medlemskap i olika butiker på ett effektivt sätt. Användaren kan också smidigt visa upp sina medlemskort direkt från sin mobil vid behov
                </Text>
                
            </Stack>
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
    )
}

export default ProjectCardMedlemma;
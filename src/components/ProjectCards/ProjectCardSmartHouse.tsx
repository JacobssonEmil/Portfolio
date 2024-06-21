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

function ProjectCardSmartHouse(){

    return(

        <Card maxW='sm' overflow="hidden" bg={'#F7FAFC'}> 
            <Image
                src='/images/SmartHouse.jpg'
                alt='Smart House'
            
                _hover={{
                transform: 'scale(1.05)', 
                transition: 'transform 0.3s ease-in-out', 
                }}
            />
            
            <Stack mt='0' spacing='3' p={5}>
            <Text color='#2b6cb0'>
                2024
                </Text>
                <Heading size='md'>Smart House</Heading>
                <Text>
                En webbplats och mobilapp för att fjärrstyra enheter i ett prototyphus. Användarna får tillgång till en intuitiv gränssnittslösning för att styra husets belysning, fönster och säkerhetssystem, samt läsa av data från husets sensorer, allt från en och samma plats.
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

export default ProjectCardSmartHouse;
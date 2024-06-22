import { Box, Container, Flex, Heading, chakra, Text, Image } from '@chakra-ui/react';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import Technologies from '../../components/TechIcons/TechIcons';

function Skills() {
    return [
        <Container maxWidth="1200px" marginTop="160px" >

            <Heading size="lg" color={'#EEEEEE'}>
                <chakra.span
                    borderBottom="3px solid #00ADB5"
                    display="inline-block"
                    paddingBottom="4px"
                >
                    <Flex><Box mt={1}><FaScrewdriverWrench color="#EEEEEE" /></Box>
                        <Text ml={2}>Technologies and Tools</Text></Flex>
                </chakra.span>
            </Heading>

            
            <Flex direction="row" wrap="wrap" justifyContent="center" mt={50}>
                <Image src='/images/Education.png' alt='Education' boxSize="350px" objectFit="cover" alignSelf="center" />
                <Box color={'#EEEEEE'} textAlign={'center'} mt={10}>
                    <Technologies/>
                    <Text mt={10}>⭐ Bygger responsiva webbapplikationer (SPA) i React.js.</Text>
                    <Text>⭐ Bygger mobilapplikationer i Kotlin och Jetpack Compose.</Text>
                    <Text>⭐ Bygger API:er i Javascript och Node.js.</Text>
                </Box>
            </Flex>

            



        </Container>
    ];
}

export default Skills;

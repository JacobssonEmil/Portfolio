import { Box, Container, Flex, Heading, chakra, Text, Image, Center } from '@chakra-ui/react';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import Technologies from '../../components/TechIcons/TechIcons';

function Skills() {
    return [
        <Container maxWidth="1200px" marginTop="200px">
            <Heading size="lg" color={'#EEEEEE'}>
                <chakra.span
                    borderBottom="3px solid #00ADB5"
                    display="inline-block"
                    paddingBottom="4px"
                >
                    <Flex>
                        <Box mt={1}><FaScrewdriverWrench color="#EEEEEE" /></Box>
                        <Text ml={2}>Technologies and Tools</Text>
                    </Flex>
                </chakra.span>
            </Heading>

            <Flex 
                direction={{ base: "column", xl: "row" }}  // Adjusts direction based on the screen size
                wrap="wrap"
                justifyContent={{ base: "center", md: "space-between" }} // Centers items on smaller screens
                mt={50}
                alignItems="center" // Ensures items are aligned centrally vertically
            >
                <Image mb={10} src='/images/image.png' alt='Education' boxSize="350px" objectFit="cover" />
                <Box color={'#EEEEEE'} textAlign={'center'} mt={{ base: 0, md: 10 }}>
                    <Technologies/>
                    <Text mt={10}>⭐ Building responsive web applications (SPA) in React.js.</Text>
                    <Text>⭐ Building mobile applications in Kotlin and Jetpack Compose.</Text>
                    <Text>⭐ Building APIs in JavaScript and Node.js.</Text>
                </Box>
            </Flex>
        </Container>
    ];
}

export default Skills;

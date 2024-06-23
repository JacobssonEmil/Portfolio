import { EmailIcon } from '@chakra-ui/icons';
import { Box, Container, Heading, Text, Flex, Link, Highlight, Divider } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function About() {
    return (
        <Container maxWidth="600px" marginTop="200px" color={'#EEEEEE'}>
            <Box textAlign="center" >
                <Heading size="3xl">Hey! I am Emil</Heading>
                <Text marginTop="8" fontSize="2xl">
                    <Highlight query='fullstack developer' styles={{ px: '2', py: '0.5', rounded: 'full', bg: '#00ADB5', color: '#EEEEEE' }}>
                        {"I am a passionate fullstack developer from Sweden, Turning your ideas into reality."}
                    </Highlight>
                </Text>
                <Box marginTop={10}>
                    <Flex justifyContent="center">
                        <Link href='https://www.linkedin.com/in/emiljacobsson/' isExternal><FaLinkedin size="30" color="#0A66C2" style={{ marginRight: "40px" }} /></Link>
                        <Link href='https://github.com/JacobssonEmil' isExternal><FaGithub size="30" color="#181717" style={{ marginRight: "40px" }} /></Link>
                        <Link href="mailto:emil@jacobsson.com" isExternal><EmailIcon boxSize="30" /></Link>
                    </Flex>
                </Box>
            </Box>

            

        </Container>
    );
}

export default About;

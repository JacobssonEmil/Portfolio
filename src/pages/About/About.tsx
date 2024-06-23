import { EmailIcon } from '@chakra-ui/icons';
import { Box, Container, Heading, Text, Flex, Link, Highlight, Divider } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function About() {
    return (
        <Container maxWidth="600px" marginTop="200px" color={'#EEEEEE'}>
            <Box textAlign="center" >
                <Heading size="3xl">Hey! I am Emil</Heading>
                <Text marginTop="8" fontSize="2xl">
                    <Highlight query={['fullstack developer', 'responsive', 'user-friendly applications']} styles={{ px: '2', py: '0', rounded: 'full', bgGradient: 'linear(to-r, #6EE7B7, #00ADB5, #3B82F6)', color: '#222831' }}>
                        {"I am a passionate fullstack developer from Sweden, who enjoys creating responsive and user-friendly applications. Always eager to learn new technologies and apply them in projects."}
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

import { Box, Container, Flex, Heading, chakra, Text } from '@chakra-ui/react';
import { FaCode } from 'react-icons/fa';
import { FaScrewdriverWrench } from 'react-icons/fa6';

function Skills() {
    return [
        <Container maxWidth="1200px" marginTop="160px">
            <Box>
                <Heading size="lg" color={'#EEEEEE'}>
                    <chakra.span 
                        borderBottom="3px solid #00ADB5"
                        display="inline-block"
                        paddingBottom="4px"
                    >
                        <Flex><Box mt={1}><FaScrewdriverWrench color="#EEEEEE"/></Box>
                        <Text ml={2}>Technologies and Tools</Text></Flex>
                    </chakra.span>
                </Heading>
            </Box>
        </Container>
    ];
}

export default Skills;

import { Box, Container, Flex, Heading, chakra, Text } from '@chakra-ui/react';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import Technologies from '../../components/TechIcons/TechIcons';

function Skills() {
    return [
        <Container maxWidth="1200px" marginTop="160px">
            
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
            
            <Technologies/>
        </Container>
    ];
}

export default Skills;

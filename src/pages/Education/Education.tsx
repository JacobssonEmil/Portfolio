import { Box, Flex, Card, CardBody, Container, Heading, chakra, Text, Image, Divider } from '@chakra-ui/react';
import { GiGraduateCap } from 'react-icons/gi';
import Kristianstad from '../../components/EducationCards/KristianstadCard';
import NtiCard from '../../components/EducationCards/NtiCard';
import { FaGraduationCap } from 'react-icons/fa';

function Education() {
    return (
        <Container maxWidth="1200px" marginTop="160px">
            <Box>
                <Heading size="lg" color={'#EEEEEE'}>
                    <chakra.span
                        borderBottom="3px solid #00ADB5"
                        display="inline-block"
                        paddingBottom="4px"
                    >
                        <Flex><Box mt={1}><FaGraduationCap color="#EEEEEE"/></Box>
                        <Text ml={2}>Education</Text></Flex>
                    </chakra.span>
                </Heading>
            </Box>

            <Flex direction={['column', 'column', 'row']} align="flex-start" justify="space-between" mt={50}>
                <Box>

                    <Kristianstad/>
                    <NtiCard/> 
                </Box>

                {/* <Image src='/images/Education.png' alt='Education' boxSize="350px" objectFit="cover" alignSelf="center" />*/}
            </Flex>

        </Container>
    );
}

export default Education;

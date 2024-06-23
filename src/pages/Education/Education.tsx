import { Box, Flex, Container, Heading, chakra, Text, Image } from '@chakra-ui/react';
import Kristianstad from '../../components/EducationCards/KristianstadCard';
import NtiCard from '../../components/EducationCards/NtiCard';
import { FaGraduationCap } from 'react-icons/fa';

function Education() {
    return (
        <Container maxWidth="1200px" marginTop="200px">
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

            <Flex 
                direction={{ base: "column", lg: "row" }}  // Adjusts direction based on the screen size
                wrap="wrap"
                justifyContent={{ base: "center", md: "space-between" }} // Centers items on smaller screens
                mt={50}
                alignItems="center" // Ensures items are aligned centrally vertically
            >
                <Box mb={10}>
                    <Kristianstad/>
                    <NtiCard/> 
                </Box>

                <Image src='/images/Education.gif' alt='Education' boxSize="450px" objectFit="cover" alignSelf="center"/>
            </Flex>

        </Container>
    );
}

export default Education;

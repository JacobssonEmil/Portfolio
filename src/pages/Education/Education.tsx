import { Box, Flex, Container, Heading, chakra, Text, Image } from '@chakra-ui/react';
import EducationCard from '../../components/EducationCard/EducationCard';
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
                direction={{ base: "column", lg: "row" }}
                wrap="wrap"
                justifyContent={{ base: "center", md: "space-between" }}
                mt={50}
                alignItems="center" 
            >
                <Box mb={10}>
                    <EducationCard title='Bachelor Program in Software
                    Development' name='Högskolan Kristianstad, Kristianstad' date='Aug 2021 - Jun 2024'/>
                    <EducationCard title='Technology Program' name='NTI Gymnasiet, Helsingborg' date='Aug 2017 - Jun 2020'/>
                </Box>

                <Image src='/images/Education.gif' alt='Education' maxBlockSize="450px" objectFit="cover" alignSelf="center"/>
            </Flex>

        </Container>
    );
}

export default Education;

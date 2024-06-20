import { Box, Card, CardBody, Container, Heading, chakra, Text, Badge } from '@chakra-ui/react';
import { GiGraduateCap } from 'react-icons/gi';

function Education() {
    return [
        <Container maxWidth="1100px" marginTop="120px">
            <Box>
                <Heading size="lg">
                    <chakra.span 
                        borderBottom="3px solid #2b6cb0"
                        display="inline-block"
                        paddingBottom="4px"
                    >
                        Education
                    </chakra.span>
                </Heading>
            </Box>

        <Card maxWidth={500} marginTop={50}>
            <CardBody padding={7}>
            <GiGraduateCap></GiGraduateCap>
                <Heading size={'md'}>Bachelor Programme in Software
                Development</Heading>
                <Text color={'#2b6cb0'} marginTop={2}>Kristianstad Högskola, Kristianstad </Text>
                <Text marginTop={2}>August 2021 - June 2024</Text>
            </CardBody>
        </Card>
        <Card maxWidth={500} marginTop={50}>
            <CardBody>
                <GiGraduateCap></GiGraduateCap>
                <Heading size={'md'}>Technology program</Heading>
                <Text color={'#2b6cb0'} marginTop={2}>NTI gymnasiet, Helsingborg</Text>
                <Text marginTop={2}>August 2021 - June 2024</Text>
            </CardBody>
        </Card>

        

        </Container>
    ];
}

export default Education;

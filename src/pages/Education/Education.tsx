import { Box, Flex, Card, CardBody, Container, Heading, chakra, Text, Image } from '@chakra-ui/react';
import { GiGraduateCap } from 'react-icons/gi';

function Education() {
    return (
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

            <Flex direction={['column', 'column', 'row']} align="flex-start" justify="space-between" mt={50}>
                <Box>
                    <Card maxWidth={500} mb={50}>
                        <CardBody padding={7}>
                            <GiGraduateCap />
                            <Heading size={'md'}>Bachelor Programme in Software Development</Heading>
                            <Text color={'#2b6cb0'} mt={2}>Kristianstad Högskola, Kristianstad</Text>
                            <Text mt={2}>August 2021 - June 2024</Text>
                        </CardBody>
                    </Card>
                    <Card maxWidth={500}>
                        <CardBody padding={7}>
                            <GiGraduateCap />
                            <Heading size={'md'}>Technology program</Heading>
                            <Text color={'#2b6cb0'} mt={2}>NTI gymnasiet, Helsingborg</Text>
                            <Text mt={2}>August 2017 - June 2020</Text>
                        </CardBody>
                    </Card>
                </Box>
                
                <Image src='/images/Education.png' alt='Education' boxSize="350px" objectFit="cover" alignSelf="center" />
            </Flex>
        </Container>
    );
}

export default Education;

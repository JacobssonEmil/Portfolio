import { Box, Container, Heading, chakra } from '@chakra-ui/react';

function Skills() {
    return [
        <Container maxWidth="1100px" marginTop="120px">
            <Box>
                <Heading size="lg">
                    <chakra.span 
                        borderBottom="3px solid #2b6cb0"
                        display="inline-block"
                        paddingBottom="4px"
                    >
                        Technologies and Tools
                    </chakra.span>
                </Heading>
            </Box>
        </Container>
    ];
}

export default Skills;

import { Box, Container, Heading, Text, Flex, Link, chakra } from '@chakra-ui/react';

function Project(){
    return[
        <Container maxWidth="1200px" marginTop="120px">
        <Box>
            <Heading size="lg">
                <chakra.span 
                    borderBottom="3px solid #2b6cb0"
                    display="inline-block"
                    paddingBottom="4px"
                >
                    Projects
                </chakra.span>
            </Heading>
        </Box>
    </Container>
    ]
}

export default Project;
import {
    Box,
    Container,
    Heading,
    Text,
    Flex,
    Link,
    chakra,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Stack,
    Image,
    Badge,
    SimpleGrid,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import ProjectCardMedlemma from '../../components/ProjectCards/ProjectCardMedlemma';
import ProjectCardSmartHouse from '../../components/ProjectCards/ProjectCardSmartHouse';

function Project() {
    return [
        <Container maxWidth="1200px" marginTop="160px">
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

                <Flex direction="row" wrap="wrap" justifyContent="space-between" mt={50}>
                    <ProjectCardMedlemma/>
                    <ProjectCardSmartHouse/>
                </Flex>
            </Box>
        </Container>
    ];
}

export default Project;

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

import ProjectCardMedlemma from '../../components/ProjectCards/ProjectCardMedlemma';
import ProjectCardSmartHouse from '../../components/ProjectCards/ProjectCardSmartHouse';
import ProjectCardPortfolio from '../../components/ProjectCards/ProjectCardPortfolio';
import MedlemmaModal from '../../components/ProjectCards/MedlemmaModal'


ProjectCardPortfolio

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
                    <ProjectCardSmartHouse/>
                    
                    <ProjectCardMedlemma/>
                    <ProjectCardPortfolio/>
                    
                </Flex>
            </Box>

            
        </Container> 
    ];
}

export default Project;

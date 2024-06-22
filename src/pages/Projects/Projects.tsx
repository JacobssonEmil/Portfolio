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
    Center,
} from '@chakra-ui/react';

import ProjectCardMedlemma from '../../components/ProjectCards/ProjectCardMedlemma';
import ProjectCardSmartHouse from '../../components/ProjectCards/ProjectCardSmartHouse';
import ProjectCardPortfolio from '../../components/ProjectCards/ProjectCardPortfolio';
import MedlemmaModal from '../../components/ProjectCards/MedlemmaModal'


ProjectCardPortfolio

function Project() {

    
    return [
        <Container maxWidth="1200px" marginTop="160px">
            
                <Heading size="lg">
                    <chakra.span
                        borderBottom="3px solid #2b6cb0"
                        display="inline-block"
                        paddingBottom="4px"
                    > 
                        Projects
                    </chakra.span>
                </Heading>

                <Flex direction="row" wrap="wrap" justifyContent="center">
                    
                    <ProjectCardSmartHouse/>
                    <Center marginRight={125} marginLeft={125}>
                    <ProjectCardMedlemma/>
                    </Center>
                    <ProjectCardPortfolio/>
                    
                </Flex>
            

            
        </Container> 
    ];
}

export default Project;

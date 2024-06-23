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

import ProjectCardMedlemma from '../../components/ProjectCards/Medlemma/ProjectCardMedlemma';
import ProjectCardSmartHouse from '../../components/ProjectCards/SmartHouse/ProjectCardSmartHouse';
import ProjectCardPortfolio from '../../components/ProjectCards/Portfolio/ProjectCardPortfolio';
import { FaCode } from 'react-icons/fa';



function Project() {


    return [
        <Container maxWidth="1200px" marginTop="190px">

            <Heading size="lg" color={'#EEEEEE'}>
                <chakra.span
                    borderBottom="3px solid #00ADB5"
                    display="inline-block"
                    paddingBottom="4px">
                    <Flex>
                        <Box mt={1}>
                            <FaCode color="#EEEEEE" />
                        </Box>
                        <Text ml={2}>Projects</Text>
                    </Flex>
                </chakra.span>
            </Heading>

            <Flex direction="row" wrap="wrap" justifyContent="center">
                <ProjectCardSmartHouse />
                <Center marginRight={59} marginLeft={59}>
                    <ProjectCardMedlemma />
                </Center>
                <ProjectCardPortfolio />
            </Flex>


        </Container>
    ];
}

export default Project;

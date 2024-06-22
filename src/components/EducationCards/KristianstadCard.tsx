import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { GiGraduateCap } from "react-icons/gi";

function Kristianstad() {
    return (
        <Card maxWidth={500} mb={50} bg={'#EEEEEE'} boxShadow='dark-lg' rounded='md'>
            <CardBody padding={7}>
                
                <Heading size={'md'}  color={'#393E46'}>Bachelor Programme in Software Development</Heading>
                <Text color={'#393E46'} mt={2}>Kristianstad Högskola, Kristianstad</Text>
                <Text mt={2}  color={'#393E46'}>August 2021 - June 2024</Text>
            </CardBody>
        </Card>
    )
}

export default Kristianstad;
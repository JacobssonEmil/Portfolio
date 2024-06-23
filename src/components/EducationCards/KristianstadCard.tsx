import { Card, CardBody, Heading, Text, Box } from "@chakra-ui/react";
import { GiGraduateCap } from "react-icons/gi";

function KristianstadCard() {
    return (
        <Card maxWidth={500} bgGradient='linear(to-r, #6EE7B7, #00ADB5, #3B82F6)' boxShadow='dark-lg' rounded='md' overflow='hidden' mb={5} _hover={{
            transform: 'scale(1.03)',
            transition: 'transform 0.2s',
        }}>
            

            <CardBody padding={7} position="relative">
                <Box color={'white'} display="flex" alignItems="center">
                    <GiGraduateCap size="30" />
                    <Heading size={'md'} ml={3}>Bachelor Programme in Software
                    Development</Heading>
                </Box>
                
                <Text mt={4}>Högskolan Kristianstad, Kristianstad</Text>
                <Text mt={2}>Aug 2021 - Jun 2024</Text>

            </CardBody>
        </Card>
    )
}

export default KristianstadCard;

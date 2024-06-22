import { Card, CardBody, Heading, Text } from "@chakra-ui/react"
import { GiGraduateCap } from "react-icons/gi"

function NtiCard() {
    return (
        <Card maxWidth={500} bg={'#EEEEEE'} boxShadow='dark-lg' rounded='md'>
            <CardBody padding={7}>
                
                <Heading size={'md'} color={'#393E46'}>Technology program</Heading>
                <Text color={'#393E46'} mt={2}>NTI gymnasiet, Helsingborg</Text>
                <Text mt={2} color={'#393E46'}>August 2017 - June 2020</Text>
            </CardBody>
        </Card>
    )
}

export default NtiCard
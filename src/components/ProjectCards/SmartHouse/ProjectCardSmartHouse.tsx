import {
    Heading,
    Text,
    Flex,
    Link,
    ButtonGroup,
    Card,
    CardFooter,
    Stack,
    Image,
    useDisclosure,
    Button
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import SmartHouseModal from './SmartHouseModal';
import { useEffect, useState } from 'react';

function ProjectCardSmartHouse() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjusted to a common mobile breakpoint

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Updated to a common mobile breakpoint
        };

        window.addEventListener('resize', handleResize);
        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Card
            maxW='sm'
            boxShadow='dark-lg'
            rounded='lg'
            mt={50}
            overflow="hidden"
            bgGradient='linear(to-b, #393E46, #222831)'
            color='#EEEEEE'
            height={350}
            width={350}
            display='flex'
            flexDirection='column'
            _hover={isMobile ? {} : {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease-in-out',
            }}
            sx={{
                '@media screen and (max-width: 1050px)': {
                    transform: 'scale(1.05)',
            transition: 'transform 0.3s ease-in-out',
                }
            }}
        >
                <Image
                    src='/images/SmartHouse.jpg'
                    alt='Smart House'
                    objectFit='cover'
                    height={175}
                />
                <Stack mt='0' spacing='3' p={5} height={120} overflow='hidden'>
                    <Heading size='md' onClick={onOpen} cursor='pointer' _hover={{
                        color: '#00ADB5'
                    }}>
                        Smart Home
                    </Heading>
                    <Text>
                        A website and mobile app for remotely controlling devices in a prototype house.
                    </Text>
                </Stack>

                <Flex flexGrow={1} />

                <CardFooter>
                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                        <ButtonGroup spacing='2'>
                            <Link href='https://github.com/SoftwareEngineering-Group2' isExternal>
                                <Button
                                    leftIcon={<FaGithub />}
                                    variant='outline'
                                    color='#EEEEEE'
                                    size='sm'
                                    _hover={{

                                        borderColor: '#00ADB5'
                                    }}
                                >
                                    GitHub
                                </Button>
                            </Link>
                        </ButtonGroup>
                        <ButtonGroup spacing='2' justifySelf="flex-end">
                            <Button
                                className='btnWiggle'
                                onClick={onOpen}
                                size='sm'
                                bgGradient='linear(to-r, #6EE7B7, #00ADB5, #3B82F6)'
                                color={'#222831'}
                                _hover={{
                                    bgGradient: 'linear(to-r, #6EE7B7, #00ADB5, #78A0CC)'  // Subtly adjusted ending color
                                }}
                            >
                                More Info
                            </Button>

                        </ButtonGroup>
                    </Flex>
                </CardFooter>
            </Card>
            <SmartHouseModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </>
    );
}

export default ProjectCardSmartHouse;

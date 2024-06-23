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
import PortfolioModal from './PortfolioModal';

function ProjectCardPortfolio() {
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                _hover={{
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease-in-out',
                }}
            >
                <Image
                    src='/images/Portfolio.png'
                    alt='Smart House'
                    objectFit='cover'
                    height={175}
                />
                <Stack mt='0' spacing='3' p={5} height={120} overflow='hidden'>
                    <Heading size='md' onClick={onOpen} cursor='pointer' _hover={{
                        color: '#00ADB5'
                    }}>
                        Portfolio
                    </Heading>
                    <Text>
                        A portfolio website designed to showcase my projects.
                    </Text>
                </Stack>

                <Flex flexGrow={1} />

                <CardFooter>
                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                        <ButtonGroup spacing='2'>
                            <Link href='https://github.com/JacobssonEmil' isExternal>
                                <Button
                                    leftIcon={<FaGithub />}
                                    variant='outline'
                                    color='#EEEEEE'
                                    size='sm'
                                    _hover={{

                                        borderColor: '#00ADB5' // subtle border color change
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
            <PortfolioModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </>
    );
}

export default ProjectCardPortfolio;

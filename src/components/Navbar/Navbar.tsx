// src/components/Navbar/Navbar.tsx
import { Box, Flex, Text, IconButton, HStack, Stack, useDisclosure,  Container, Avatar, Menu, MenuButton, MenuItem, MenuList, Link } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, EmailIcon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Links = [{ name: 'About', ref: 'about' }, { name: 'Education', ref: 'education' }, { name: 'Projects', ref: 'projects' }, { name: 'Technologies and Tools', ref: 'skills' }, { name: 'Contact', ref: 'footer' }];

const NavLink = ({ children, to }: { children: React.ReactNode, to: string }) => (
  <Box
    as="a"
    href={`#${to}`}
    p={2}
    rounded={'md'}
    _hover={{
      textDecoration: 'underline',
      textDecorationColor: '#00ADB5',
      textDecorationThickness: '2px'
    }}
  >
    {children}
  </Box>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxWidth={1400} color={'#EEEEEE'}>
      <Box bg={'transparent'} px={0}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon color={'#EEEEEE'} /> : <HamburgerIcon boxSize="24px" color={'#EEEEEE'} />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            backgroundColor="transparent"
            _hover={{ bg: 'transparent' }}
            _active={{ bg: 'transparent' }}
            _focus={{ boxShadow: 'none' }}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map(link => (
                <NavLink key={link.name} to={link.ref}>{link.name}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton>
                <Avatar size='sm' name='Emil Jacobsson' src='/images/Profilbild.jpeg' />
                <ChevronDownIcon boxSize={6}></ChevronDownIcon>
              </MenuButton>
              <MenuList bg={'#EEEEEE'}>
                <Link href='https://www.linkedin.com/in/emiljacobsson/' isExternal color={'#393E46'} _hover={{
                  textDecoration: 'underline',
                  textDecorationColor: '#00ADB5',
                  textDecorationThickness: '2px'
                }}><MenuItem bg={'#EEEEEE'}><Flex marginEnd={2}><FaLinkedin color='#0A66C2' /></Flex><Text color={'#393E46'}>Linkedin</Text></MenuItem></Link>
                <Link href='https://github.com/JacobssonEmil' isExternal color={'#393E46'} _hover={{
                  textDecoration: 'underline',
                  textDecorationColor: '#00ADB5',
                  textDecorationThickness: '2px'
                }}><MenuItem bg={'#EEEEEE'}><Flex marginEnd={2}><FaGithub color='#181717' /></Flex><Text color={'#393E46'}>Github</Text></MenuItem></Link>
                <Link href="mailto:emil@jacobsson.com" isExternal color={'#393E46'} _hover={{
                  textDecoration: 'underline',
                  textDecorationColor: '#00ADB5',
                  textDecorationThickness: '2px'
                }}><MenuItem bg={'#EEEEEE'}><EmailIcon marginTop={1} marginEnd={2} color={'black'} /><Text color={'#393E46'}>Email</Text></MenuItem></Link>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen && (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => (
                <NavLink key={link.name} to={link.ref}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
      <hr></hr>
    </Container>

  );
};

export default Navbar;
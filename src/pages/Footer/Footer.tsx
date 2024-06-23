import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Icon,
  Link,
  Flex,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Center
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaMailBulk, FaMailchimp, FaPhone } from 'react-icons/fa';
import { FaLetterboxd, FaMessage } from 'react-icons/fa6';
import { EmailIcon } from '@chakra-ui/icons';

const Footer = () => {
  return (
    <Box
      bg={'#222831'}
      color={'#EEEEEE'}>
      <Container as={Stack} maxW={'1200px'} py={10} mt={150}>
        <VStack spacing={4}>
          <Wrap justify="center" spacingX="30px" >
            <WrapItem>
              <Link href="#about" color={'#00ADB5'} _hover={{ color: '#EEEEEE' }}>About</Link>
            </WrapItem>
            <WrapItem>
              <Link href="#education" color={'#00ADB5'} _hover={{ color: '#EEEEEE' }}>Education</Link>
            </WrapItem>
            <WrapItem>
              <Link href="#projects" color={'#00ADB5'} _hover={{ color: '#EEEEEE' }}>Projects</Link>
            </WrapItem>
            <WrapItem>
              <Link href="#skills" color={'#00ADB5'} _hover={{ color: '#EEEEEE' }}>Technologies and Tools</Link>
            </WrapItem>
          </Wrap>
          <Text mt={5}>Contact me directly at: <Link href="mailto:emil@jacobsson.com" color={'#00ADB5'} _hover={{ textDecoration: 'underline' }}>emil@jacobsson.com</Link></Text>
          <HStack spacing={5}>
            <Link href="https://Github.com" isExternal>
              <Icon as={FaGithub} boxSize={6} color={'#EEEEEE'} _hover={{ color: '#00ADB5' }} />
            </Link>
            <Link href="https://Linkedin.com" isExternal>
              <Icon as={FaLinkedin} boxSize={6} color={'#EEEEEE'} _hover={{ color: '#00ADB5' }} />
            </Link>
            <Link href="mailto:emil@jacobsson.com" isExternal>
              <EmailIcon boxSize={6} color={'#EEEEEE'} _hover={{ color: '#00ADB5' }} />
            </Link>
            <Link href="tel:0733299999">
              <Icon as={FaPhone} boxSize={6} color={'#EEEEEE'} _hover={{ color: '#00ADB5' }} />
            </Link>
            
          </HStack>
        </VStack>
        <Box pt={5}>
          <Text fontSize={'sm'} color={'#393E46'}>
            © 2024 by Emil Jacobsson. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

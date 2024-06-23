import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Link,
  Badge,
  ButtonGroup,
  Flex,
  Stack,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

interface SmartHouseoModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const PortfolioModal: React.FC<SmartHouseoModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent ml={2} mr={2}>
          <ModalHeader>Portfolio</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
            A portfolio website designed to showcase my projects.</Text>
            <Stack marginTop="4" direction="row" wrap="wrap" spacing={2}>
              <Badge colorScheme="purple">TypeScript</Badge>
              <Badge colorScheme="blue">React</Badge>
              <Badge colorScheme="red">ChakraUI</Badge>
              <Badge colorScheme="pink">React</Badge>
              <Badge colorScheme="yellow">CSS</Badge>
            </Stack>
          </ModalBody>
  
          <ModalFooter>
            <ButtonGroup spacing="2">
              <Link href='https://github.com/JacobssonEmil' isExternal>
                <Flex align="center">
                  <FaGithub size="30"/>
                  <Text marginLeft="2">Github</Text>
                </Flex>
              </Link>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PortfolioModal;

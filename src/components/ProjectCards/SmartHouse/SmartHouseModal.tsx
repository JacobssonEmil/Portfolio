import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Link,
    Badge,
    ButtonGroup,
    Flex,
  } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
  
  interface SmartHouseoModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  }
  
  const SmartHouseModal: React.FC<SmartHouseoModalProps> = ({ isOpen, onOpen, onClose }) => {
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Smart House</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>An app for managing your store memberships. With this app, users can easily collect, organize, and manage all their memberships in various stores efficiently. Users can also smoothly display their membership cards directly from their mobile when needed.</Text>
            </ModalBody>
  
            <ModalFooter>
            <ButtonGroup spacing='2'>
                          <Link href='https://github.com/JacobssonEmil' isExternal>
                          <Flex>
                              <FaGithub size="30"/>
                                <Link marginLeft={2} >Github</Link>
                              </Flex>
                          </Link>
                      </ButtonGroup>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  
  export default SmartHouseModal;
  
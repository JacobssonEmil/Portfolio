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
  } from '@chakra-ui/react';
  
  interface MedlemmaModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  }
  
  const MedlemmaModal: React.FC<MedlemmaModalProps> = ({ isOpen, onOpen, onClose }) => {
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Medlemma</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>An app for managing your store memberships. With this app, users can easily collect, organize, and manage all their memberships in various stores efficiently. Users can also smoothly display their membership cards directly from their mobile when needed.</Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  
  export default MedlemmaModal;
  
import React, { useState, useEffect } from 'react';
import { Box, Fade, Icon, useDisclosure } from '@chakra-ui/react';
import { BsArrowDown } from 'react-icons/bs';  // Using react-icons for the arrow icon

const ScrollIndicator = () => {
    const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0 && isOpen) {
                onClose();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen, onClose]);

    return (
        <Box
            display={'block'}
            sx={{
                '@media screen and (max-width: 1050px)': {
                    display: 'none',
                }
            }}
            position="fixed"
            bottom="20px"
            left="50%"
            transform="translateX(-50%)"
            zIndex="tooltip"
            animation="bounce 2s infinite"
        >
            <Fade in={isOpen}>
                <Icon as={BsArrowDown} w={8} h={8} color="gray.600" />
            </Fade>
        </Box>
    );
};

export default ScrollIndicator;

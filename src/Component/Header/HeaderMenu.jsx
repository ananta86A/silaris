import { Box, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, useMediaQuery, MenuItem, MenuDivider } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const HeaderMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

    // Only render the menu on mobile (less than 600px)
    if (isLargerThan600) {
        return null; // Hide the menu on desktop
    }

    return (
        <Box >
            <IconButton
                icon={<HamburgerIcon />}
                onClick={onOpen}
                variant='outline'
                aria-label='Open menu'
            />
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>File</DrawerHeader>
                        <DrawerBody>
                            <MenuItem onClick={onClose}>New File</MenuItem>
                            <MenuItem onClick={onClose}>New Window</MenuItem>
                            <MenuDivider />
                            <MenuItem onClick={onClose}>Open...</MenuItem>
                            <MenuItem onClick={onClose}>Save File</MenuItem>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Box>
    );
}

export default HeaderMenu;

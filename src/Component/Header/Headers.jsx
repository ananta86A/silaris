import {
    Box,
    HStack,
    Image,
    Input,
    Text,
    useBreakpointValue,
    Spacer,
    Flex,
    IconButton,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    VStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import photo from "../../assets/SectionBanner/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Headers = () => {
    const isLargeScreen = useBreakpointValue({ base: false, md: true });
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        onClose();
    };

    return (
        <Box
            h="80px"
            //boxShadow="dark-lg"
            borderBottom={'1px solid gray'}
            rounded="md"
            bg="white"
            my={["5px", "0px"]}
            position="sticky"
            top="0"
            zIndex="sticky"
            px={["10px", "50px"]}
        >
            <Flex alignItems="center" gap="2" h="100%">
                <Box>
                    <Image w="100px" src={photo} alt="Logo" />
                </Box>
                <Spacer />
                {isLargeScreen ? (
                    <HStack gap="7" alignItems="center">
                        <Link to='/'><Text _hover={{ color: "red" }} color={"#000000"}>Home</Text></Link>
                        <Link to='aboutus'><Text _hover={{ color: "red" }} color={"#000000"}>About</Text></Link>
                        <Link to='destop'><Text _hover={{ color: "red" }} color={"#000000"}>Products</Text></Link>
                        <Menu>

                            <MenuButton variant="link" color={"#000000"} _hover={{ textDecoration: "none", color: "red" }}>
                                Business Segments<ChevronDownIcon fontSize={"20px"} />
                            </MenuButton>
                            <MenuList>
                                <Link to='/segment1'><MenuItem>Segment 1</MenuItem></Link>
                                <Link to='/segment2'><MenuItem>Segment 2</MenuItem></Link>
                                <Link to='/segment3'><MenuItem>Segment 3</MenuItem></Link>
                            </MenuList>
                        </Menu>
                        <Link to='/contact'><Text _hover={{ color: "red" }}>Contact</Text></Link>
                        <Box w="250px" h="40px">
                            <Input
                                borderRadius="20px"
                                h="30px"
                                type="text"
                                color="black"
                                placeholder="Search..."
                                border="none"
                                borderBottom={"1px solid gray"}

                            />
                        </Box>
                    </HStack>
                ) : (
                    <Flex alignItems="center" w={["50%", "80%"]}>
                        <Input

                            borderRadius="0"
                            border="none"
                            borderBottom="2px solid"
                            h={["30px", "30px"]}
                            color="black"
                            placeholder="Search..."
                            _placeholder={{
                                color: "gray.400",
                                fontSize: "sm",
                                position: "relative",
                                bottom: "-5px",
                            }}
                            focusBorderColor="gray.500"
                            sx={{
                                '&::placeholder': {
                                    bottom: '0px',
                                },
                            }}
                        />
                        <IconButton
                            aria-label="Open menu"
                            icon={<HamburgerIcon />}
                            onClick={onOpen}
                            ml="10px"
                        />
                    </Flex>
                )}
            </Flex>

            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack align="start" spacing="4">
                            <Text onClick={() => handleNavigate('/')}>Home</Text>
                            <Text onClick={() => handleNavigate('/aboutus')}>About</Text>
                            <Text onClick={() => handleNavigate('/products')}>Products</Text>
                            <Text onClick={() => handleNavigate('/segment1')}>Business Segments</Text>
                            <Text onClick={() => handleNavigate('/contact')}>Contact</Text>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Headers;

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
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { HamburgerIcon } from "@chakra-ui/icons";
import photo from "../../assets/SectionBanner/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Headers = () => {
    const isLargeScreen = useBreakpointValue({ base: false, md: true });
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate()
    const onClose1 = () => {
        navigate('contact')
        console.log("skdfjsdf")
    }

    return (
        <Box
            h={"80px"}
            boxShadow="dark-lg"
            rounded="md"
            bg="white"
            my={["5px", "0px"]}

        >
            <Flex alignItems="center" gap="2">
                <Box>
                    <Image w={"100px"} mx={["10px", "50px"]} src={photo} />
                </Box>
                <Spacer />
                {isLargeScreen ? (
                    <HStack>
                        <HStack gap={["2", "7"]}>
                            <Text _hover={{ color: "red " }}>Home</Text>
                            <Link to='/aboutus'><Text _hover={{ color: "red " }}>About</Text></Link>
                            <Text _hover={{ color: "red " }}>Products</Text>
                            <Text _hover={{ color: "red " }}>Business Segments</Text>
                            <Link to='/contact'>     <Text _hover={{ color: "red " }}>Contact</Text></Link>
                        </HStack>
                        <Box w={["100%", "25%"]} h="40px" mx={["5px", "20px"]} borderRadius="40px">
                            <Input
                                borderRadius="20px"
                                h="30px"
                                my="5px"
                                type="text"
                                color="black"
                                placeholder="Search.."
                            />
                        </Box>
                    </HStack>
                ) : (
                    <Flex alignItems="center">
                        <IconButton
                            aria-label="Open menu"
                            icon={<HamburgerIcon />}
                            onClick={onOpen}
                            mx="10px"
                        />
                        <IconButton
                            aria-label="Search"
                            icon={<CiSearch />}
                            onClick={onOpen}
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
                            <Input
                                borderRadius="20px"
                                h="30px"
                                type="text"
                                color="black"
                                placeholder="Search.."
                            />
                            <Text onClick={onClose}>Home</Text>
                            <Text onClick={onClose}>About</Text>
                            <Text onClick={onClose}>Products</Text>
                            <Text onClick={onClose}>Business Segments</Text>

                            <Text onClick={onClose1}>Contact</Text>

                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Headers;

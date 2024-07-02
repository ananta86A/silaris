import { Box, HStack, Image, Input, Text, useBreakpointValue, Spacer, Flex, ButtonGroup, Button, VStack } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import photo from "../../assets/SectionBanner/logo.png"

const Headers = () => {
    // Use useBreakpointValue to conditionally render elements
    const showMenu = useBreakpointValue({ base: false, md: true });

    return (
        <Box h={"80px"} boxShadow='dark-lg' p='2' rounded='md' bg='white'>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box>
                    <Image w={"100px"} mx={"50px"} src={photo} />
                </Box>
                <Spacer />
                <HStack>
                    <Box><HStack gap={[2, 7]}
                    >
                        <Text >Home</Text>
                        <Text>About</Text>
                        <Text>Products</Text>
                        <Text >Business Segments</Text>
                        <Text>Contact</Text>
                    </HStack></Box>
                    <Box w={["100%", "25%"]} h='40px' mx={"20px"} borderRadius={"40px"}>


                        <Input borderRadius={"20px"} h={["30px", "30px"]} my={"5px"} type="text" color={'black'} placeholder="Search.." />


                    </Box>
                </HStack>
            </Flex>

        </Box>

    );
}

export default Headers;

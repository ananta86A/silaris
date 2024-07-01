import { Box, HStack, Image, Input, Text, useBreakpointValue, Spacer } from "@chakra-ui/react";

const Headers = () => {
    // Use useBreakpointValue to conditionally render elements
    const showMenu = useBreakpointValue({ base: false, md: true });

    return (
        <Box w="100%" maxW="100%" mx="auto" px={["2", "12"]} my={["15px", "5px"]} >
            <HStack>
                {/* Image */}
                <Box w={["30%", "10%"]} h='40px'>
                    <Image

                        mx={["5px", "10px"]}


                        boxSize='50px'
                        src='https://static.vecteezy.com/system/resources/thumbnails/011/883/296/small/modern-graphic-leaf-abstrack-with-water-drop-colorful-logo-good-for-technology-logo-fruits-logo-fresh-logo-nature-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg'
                        alt='Dan Abramov'
                    />
                </Box>

                {/* Spacer to push the search bar to the right */}


                {/* Search Bar */}


                {/* Navigation Menu */}
                {showMenu && (
                    <Box w="60%" h='40px' >
                        <HStack gap={[2, 20]} mx={"200px"} >
                            <Text >Home</Text>
                            <Text>About</Text>
                            <Text>Services</Text>
                            <Text>Contact</Text>
                        </HStack>
                    </Box>
                )}

                <Box w={["100%", "30%"]} h='40px'>
                    <Input h={["30px", "30px"]} my={"5px"} type="text" color={'black'} placeholder="Search.." />
                </Box>
            </HStack>
        </Box>
    );
}

export default Headers;

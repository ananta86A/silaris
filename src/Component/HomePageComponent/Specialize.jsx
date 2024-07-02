import { Box, Button, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import photo from "../../assets/SectionBanner/lastbanner.png"
import { LuChevronRightCircle } from "react-icons/lu";

const Specialize = () => {
    return (
        <Box w="100%" maxW="100%" mx="auto" px={["2", "12"]} my={["15px", "5px"]}>
            <VStack>
                <Box w={"100%"} bg={"#5B834B "} h={"300px"} >
                    <VStack>
                        <Box w={"100%"} h={"100px"}  >
                            <Text my={"15px"} fontSize={"40px"} color={"white"} fontWeight={600}>We Specialize in:</Text>
                        </Box>
                        <Box w={["100%", "100%"]} maxW="100%" mx="auto" px={["2", "12"]} my={["15px", "5px"]}>
                            <HStack>
                                <Box w='100%' h='150px' >
                                    <Image
                                        borderRadius='full'
                                        boxSize='150px'
                                        src='https://static.vecteezy.com/system/resources/thumbnails/011/883/296/small/modern-graphic-leaf-abstrack-with-water-drop-colorful-logo-good-for-technology-logo-fruits-logo-fresh-logo-nature-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg'
                                        alt='Dan Abramov'
                                    />
                                    <Text mx={"30px"}>Dummy Logo</Text>
                                </Box>
                                <Box w='100%' h='150px' >
                                    <Image
                                        borderRadius='full'
                                        boxSize='150px'
                                        src='https://static.vecteezy.com/system/resources/thumbnails/011/883/296/small/modern-graphic-leaf-abstrack-with-water-drop-colorful-logo-good-for-technology-logo-fruits-logo-fresh-logo-nature-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg'
                                        alt='Dan Abramov'
                                    />
                                    <Text mx={"30px"}>Dummy Logo</Text>
                                </Box>
                                <Box w='100%' h='150px' >
                                    <Image
                                        borderRadius='full'
                                        boxSize='150px'
                                        src='https://static.vecteezy.com/system/resources/thumbnails/011/883/296/small/modern-graphic-leaf-abstrack-with-water-drop-colorful-logo-good-for-technology-logo-fruits-logo-fresh-logo-nature-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg'
                                        alt='Dan Abramov'
                                    />
                                    <Text mx={"30px"}>Dummy Logo</Text>
                                </Box>
                                <Box w='100%' h='150px' >
                                    <Image
                                        borderRadius='full'
                                        boxSize='150px'
                                        src='https://static.vecteezy.com/system/resources/thumbnails/011/883/296/small/modern-graphic-leaf-abstrack-with-water-drop-colorful-logo-good-for-technology-logo-fruits-logo-fresh-logo-nature-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg'
                                        alt='Dan Abramov'
                                    />
                                    <Text mx={"30px"}>Dummy Logo</Text>
                                </Box>
                                <Box w='100%' h='150px'>
                                    <Image
                                        borderRadius='full'
                                        boxSize='150px'
                                        src='https://static.vecteezy.com/system/resources/thumbnails/011/883/296/small/modern-graphic-leaf-abstrack-with-water-drop-colorful-logo-good-for-technology-logo-fruits-logo-fresh-logo-nature-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg'
                                        alt='Dan Abramov'
                                    />
                                    <Text mx={"30px"}>Dummy Logo</Text>
                                </Box>
                                <Box w='100%' h='150px' >
                                    <Image
                                        borderRadius='full'
                                        boxSize='150px'
                                        src='https://static.vecteezy.com/system/resources/thumbnails/011/883/296/small/modern-graphic-leaf-abstrack-with-water-drop-colorful-logo-good-for-technology-logo-fruits-logo-fresh-logo-nature-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg'
                                        alt='Dan Abramov'
                                    />
                                    <Text mx={"30px"}>Dummy Logo</Text>
                                </Box>
                            </HStack>
                        </Box>
                    </VStack>
                </Box>
                <Flex
                    justifyContent={"center"}
                    w="100%"
                    h="850px" // Define a height for visibility

                    style={{
                        backgroundImage: `url(${photo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Flex align={"center"} w={'40%'} >
                        <VStack>
                            <Text fontWeight={900} textAlign={"center"} fontSize={"40px"} >So many choices, so much
                                to smile about</Text>
                            <Text textAlign={"center"} fontSize={"24px"}>Discover more about our products, their nutrition
                                information and where to buy.</Text>
                            <Button my={"10px"} paddingLeft={'30px'} borderRadius={"40px"} w={"45%"} colorScheme='teal' size='md'>
                                Explore categories
                                <Box padding={'15px'}><LuChevronRightCircle /></Box>
                            </Button>
                        </VStack>
                    </Flex>
                </Flex>

            </VStack>
        </Box >
    )
}

export default Specialize
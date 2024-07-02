import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import photo from "../../assets/SectionBanner/topbanner.jpg"
import { LuChevronRightCircle } from "react-icons/lu";
import { FaPlayCircle } from "react-icons/fa";
const TopBanner = () => {
    return (
        <Box w="100%" maxW="100%" mx="auto" px={["2", "12"]} my={["15px", "5px"]}  >
            <VStack >
                <Box w={"100%"}>
                    <Image w={"100%"} h={"auto"} src={photo} />
                </Box>

                <Box w={"100%"} >
                    <HStack  >

                        <Box w="50%" h='500px' maxW={["100%"]} mx="auto" px={["2", "12"]} my={["15px", "20px"]}>
                            <VStack>

                                <Box w={"100%"} >
                                    <HStack>
                                        <Box><FaPlayCircle /></Box>
                                        <Box fontWeight={600} fontSize={"20px"}>Community IMPACT</Box>
                                    </HStack>

                                </Box>
                                <Box h='30px' w={"100%"} >
                                    <Text
                                        fontWeight={"600"}
                                        fontSize={["15px", "30px"]}
                                        color={"Green"}>
                                        How Phrase inspired</Text>
                                </Box>
                                <Box h='350px' w={"100%"} my={["2px", "10px"]}>
                                    <Text fontSize={["10px", "16px"]}>A paragraph is a series of sentences that are organized and coherent, and are all
                                        related to a single topic. Almost every piece of writing you do that is longer than
                                        a few sentences should be organized into paragraphs. This is because paragraphs show
                                        a reader where the subdivisions of an essay begin and end, and thus help the reader see
                                        the organization of the essay and grasp its main points.
                                        A paragraph is a series of sentences that are organized and coherent, and are all
                                        related to a single topic. Almost every piece of writing you do that is longer than
                                        a few sentences should be organized into paragraphs. This is because paragraphs show
                                        a reader where the subdivisions of an essay begin and end, and thus help the reader see
                                        the organization of the essay and grasp its main points.
                                        A paragraph is a series of sentences that are organized and coherent, and are all
                                        related to a single topic. Almost every piece of writing you do that is longer than
                                        a few sentences should be organized into paragraphs. </Text>
                                </Box>

                                <Box h='30px' w={"100%"} my={"10px"} >
                                    <Button my={"10px"} color={"#E7F0DC"} borderRadius={"40px"} w={"35%"} bg={"#597445"} size='md'>
                                        Read More...
                                        <Box mx={"20px"}><LuChevronRightCircle /></Box>
                                    </Button>
                                </Box>
                            </VStack>

                        </Box>
                        <Box w="50%" h='500px' maxW={["100%"]} mx="auto" px={["2", "12"]} my={["15px", "20px"]} >
                            <Image w={"100%"} borderRadius={"10px"} h={"500px"} src='https://iowaagliteracy.wordpress.com/wp-content/uploads/2017/11/spraying-corn.jpg?w=640' alt='Dan Abramov' />
                        </Box>

                    </HStack>
                </Box>
            </VStack>
        </Box>
    )
}

export default TopBanner
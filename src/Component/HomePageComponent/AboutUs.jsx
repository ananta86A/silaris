import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import photo from "../../assets/SectionBanner/banner.jpg"
import { LuChevronRightCircle } from "react-icons/lu";
const AboutUs = () => {
    return (
        <Box w="100%" maxW="100%" mx="auto" px={["2", "12"]} my={["15px", "5px"]}>

            <Box w={"100%"} >
                <HStack  >


                    <Box w="50%" h='500px' maxW={["100%"]} mx="auto" px={["2", "12"]} my={["15px", "20px"]} >
                        <Image w={"100%"} borderRadius={"10px"} h={"500px"} src={photo} />
                    </Box>
                    <Box w="50%" h='500px' maxW={["100%"]} mx="auto" px={["2", "12"]} my={["15px", "20px"]}>
                        <VStack>
                            <Box h='30px' w={"100%"} >
                                <Text
                                    fontWeight={"600"}
                                    fontSize={["15px", "35px"]}
                                    color={"Green"}>
                                    About Us</Text>
                            </Box>
                            <Box h='350px' w={"100%"} my={["2px", "18px"]}>
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
                            <Box h='30px' w={"100%"} >
                                <Button my={"10px"} color={"#E7F0DC"} borderRadius={"40px"} w={"35%"} bg={"#597445"} size='md'>
                                    Read More...
                                    <Box mx={"20px"}><LuChevronRightCircle /></Box>
                                </Button>
                            </Box>

                        </VStack>

                    </Box>

                </HStack>
            </Box >


        </Box >
    )
}

export default AboutUs
import { Box, Button, HStack, Image, Text, VStack, Stack } from '@chakra-ui/react'
import React from 'react'
import photo from "../../assets/SectionBanner/banner.jpg"
import { LuChevronRightCircle } from "react-icons/lu";

const AboutUs = () => {
    return (
        <Box w="100%" px={["4", "8", "12"]} py={["4", "8", "12"]}>
            <Stack
                direction={["column", "column", "row"]}
                spacing={["4", "8", "12"]}
                align="center"
                justify="center"
            >
                <Box w={["100%", "100%", "50%"]} maxW="500px" mx="auto">
                    <Image w="100%" borderRadius="10px" h="auto" src={photo} alt="About Us" />
                </Box>
                <Box w={["100%", "100%", "50%"]} maxW="500px" mx="auto">
                    <VStack spacing="4" align="start">
                        <Box>
                            <Text
                                fontWeight="600"
                                fontSize={["20px", "25px", "35px"]}
                                color="#597445"
                                fontFamily={"inter"}
                            >
                                About Us
                            </Text>
                        </Box>
                        <Box>
                            <Text fontFamily={"inter"} fontSize={["12px", "14px", "16px"]} textAlign="justify">
                                A paragraph is a series of sentences that are organized and coherent, and are all
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
                                a few sentences should be organized into paragraphs.
                            </Text>
                        </Box>
                        <Box>
                            <Button color="#E7F0DC" borderRadius="40px" bg="#597445" size="md" rightIcon={<LuChevronRightCircle />}>
                                Read More...
                            </Button>
                        </Box>
                    </VStack>
                </Box>
            </Stack>
        </Box>
    )
}

export default AboutUs

import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import photo from "../../assets/SectionBanner/topbanner.jpg"
import photo1 from "../../assets/SectionBanner/img1.jpg"
import photo2 from "../../assets/SectionBanner/img2.jpg"
import photo3 from "../../assets/SectionBanner/img3.jpg"
import { LuChevronRightCircle } from "react-icons/lu";
import { FaPlayCircle } from "react-icons/fa";

const TopBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };
    return (
        <Box>
            <VStack spacing={4}>

                <Box w={"100%"} my={["20px", "5px"]}>
                    <Image w={"100%"} h={["200px", "500px"]} src={photo} />
                </Box>

                <Box w={"100%"}>
                    <VStack spacing={4} px={4}>
                        <HStack w={"100%"} spacing={4} flexDirection={["column", "row"]}>
                            <Box w={["100%", "50%"]} h='auto' maxW={["100%", "50%"]} mx="auto">
                                <VStack spacing={4} align="start" w="100%">
                                    <HStack>
                                        <FaPlayCircle />
                                        <Text fontFamily={"inter"} fontWeight={600} fontSize={["16px", "20px"]}>Community IMPACT</Text>
                                    </HStack>

                                    <Text
                                        fontFamily={"inter"}
                                        fontWeight={"600"}
                                        fontSize={["15px", "30px"]}
                                        color={"green"}>
                                        How Phrase inspired
                                    </Text>

                                    <Text fontSize={["12px", "16px"]} fontFamily={"inter"}>
                                        A paragraph is a series of sentences that are organized and coherent, and are all
                                        related to a single topic. Almost every piece of writing you do that is longer than
                                        a few sentences should be organized into paragraphs. This is because paragraphs show
                                        a reader where the subdivisions of an essay begin and end, and thus help the reader see
                                        the organization of the essay and grasp its main points. A paragraph is a series of sentences
                                        that are organized and coherent, and are all related to a single topic. Almost every piece
                                        of writing you do that is longer than a few sentences should be organized into paragraphs.
                                        This is because paragraphs show a reader where the subdivisions of an essay begin and end,
                                        and thus help the reader see the organization of the essay and grasp its main points.
                                    </Text>

                                    <Button
                                        color={"#E7F0DC"}
                                        borderRadius={"40px"}
                                        w={"auto"}
                                        bg={"#597445"}
                                        size='md'
                                        fontFamily={"inter"}
                                    >
                                        Read More...
                                        <Box mx={"10px"}>
                                            <LuChevronRightCircle />
                                        </Box>
                                    </Button>
                                </VStack>
                            </Box>

                            <Box w={["100%", "50%"]} maxW={["100%", "50%"]} mx="auto">
                                <Image w={"100%"} borderRadius={"10px"} h={["200px", "500px"]} src='https://iowaagliteracy.wordpress.com/wp-content/uploads/2017/11/spraying-corn.jpg?w=640' alt='Dan Abramov' />
                            </Box>
                        </HStack>
                    </VStack>
                </Box>
            </VStack>
        </Box>
    )
}

export default TopBanner

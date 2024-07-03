import { Box, Button, Flex, Grid, GridItem, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { LuChevronRightCircle } from "react-icons/lu";
import photo from "../../assets/SectionBanner/lastbanner.png"
import photo1 from "../../assets/SectionBanner/logo1.png"
import photo2 from "../../assets/SectionBanner/logo2.png"
import photo3 from "../../assets/SectionBanner/logo3.png"
import photo4 from "../../assets/SectionBanner/logo4.png"
import photo5 from "../../assets/SectionBanner/logo5.png"
import photo6 from "../../assets/SectionBanner/logo6.png"

const Specialize = () => {
    return (
        <Box >
            <VStack spacing={[4, 8]}>
                {/* Specialize Section */}
                <Box w="100%" bg="#5B834B" py={[4, 8]} >
                    <VStack spacing={[2, 4]}>
                        <Box w={"100%"}>
                            <Text fontFamily={"inter"} fontSize={["20px", "36px"]} color="white" fontWeight={600} mx={"40px"} >
                                We Specialize in:
                            </Text>
                        </Box>
                        <Grid templateColumns={["repeat(3, 1fr)", "repeat(6, 1fr)"]} fontFamily={"inter"} gap={[2, 4]} w="100%" px={[2, 5]}>
                            {[
                                { src: photo1, text: "Specialized commodity trading and sourcing." },
                                { src: photo2, text: "Purees and Concentrates" },
                                { src: photo3, text: "Agrochemicals" },
                                { src: photo4, text: "Organic Fertilizers and Pesticides" },
                                { src: photo5, text: "Chemical Fertilizers" },
                                { src: photo6, text: "Retail food products." },
                            ].map((item, index) => (
                                <GridItem key={index} w="100%" textAlign="center">
                                    <Image
                                        borderRadius="full"
                                        boxSize={["50px", "100px"]}
                                        src={item.src}
                                        alt={`Specialize ${index + 1}`}
                                        mx="auto"
                                    />
                                    <Text mt={2} fontSize={["10px", "14px"]}>
                                        {item.text}
                                    </Text>
                                </GridItem>
                            ))}
                        </Grid>
                    </VStack>
                </Box>

                {/* Banner Section */}
                <Flex
                    my={["-6", "-8"]}

                    justifyContent="center"
                    alignItems="center"
                    w="100%"
                    h={["320px", "900px"]}
                    bgImage={`url(${photo})`}
                    bgSize="cover"
                    bgPosition="center"
                    bgRepeat="no-repeat"
                >
                    <VStack
                        spacing={[2, 4]}
                        w={["90%", "50%"]}
                        textAlign="center"
                        p={[4, 0]}
                    >
                        <Text
                            fontWeight="bold"
                            fontSize={["20px", "36px"]}
                            color="black"
                            fontFamily={"inter"}
                        >
                            So many choices, so much to smile about
                        </Text>
                        <Text
                            fontSize={["14px", "20px"]}
                            color="black"
                            fontFamily={"inter"}
                        >
                            Discover more about our products, their nutrition information and where to buy.
                        </Text>
                        <Button
                            h={"50px"}
                            mt={2}
                            borderRadius="40px"
                            w={["70%", "215px"]}
                            bg={"#597445"}
                            color={"white"}
                            size="md"

                            gap={"25px"}


                            rightIcon={<LuChevronRightCircle />}
                            fontFamily={"inter"}
                        >
                            Explore categories
                        </Button>
                    </VStack>
                </Flex>


            </VStack>
        </Box>
    )
}

export default Specialize

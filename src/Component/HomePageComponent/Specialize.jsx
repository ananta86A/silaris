import { Box, Button, Flex, Grid, GridItem, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { LuChevronRightCircle } from "react-icons/lu";
import photo from "../../assets/SectionBanner/lastbanner.png"
import photo8 from "../../assets/SectionBanner/logo7.png"
import photo9 from "../../assets/SectionBanner/logo8.png"
import photo0 from "../../assets/SectionBanner/logo9.png"
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
                        <Grid templateColumns={["repeat(3, 1fr)", "repeat(6, 1fr)"]} color={"white"} fontFamily={"inter"} mt={"17px"} gap={[2, 4]} w="100%" px={[2, 5]}>
                            {[
                                { src: photo8, text: "Specialized Commodity Trading And Sourcing." },
                                { src: photo9, text: "Purees And Concentrates" },
                                { src: photo0, text: "Agrochemicals" },
                                { src: photo4, text: "Organic Fertilizers And Pesticides" },
                                { src: photo5, text: "Chemical Fertilizers" },
                                { src: photo6, text: "Retail Food Products." },
                            ].map((item, index) => (
                                <GridItem key={index} w="100%" textAlign="center">
                                    <Image
                                        borderRadius="full"
                                        boxSize={["50px", "70px"]}
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
                    // my={["-6", "-8"]} // Adjusts top and bottom margins for different screen sizes
                    justifyContent="center"
                    alignItems="center"
                    w="100%" // Full width
                    h={["320px", "1000px"]} // Height adjusted for mobile and larger screens
                    bgImage={`url(${photo})`} // Dynamic background image
                    bgSize="cover"
                    bgPosition="center"
                    bgRepeat="no-repeat"
                >
                    <VStack
                        spacing={[2, 4]} // Adjust spacing between children elements for different screen sizes
                        w={["90%", "50%"]} // Width adjusted for mobile and larger screens
                        textAlign="center"
                        p={[4, 0]} // Padding for mobile and larger screens
                    >
                        <Text
                            fontWeight="bold"
                            fontSize={["20px", "36px"]} // Font size adjusted for mobile and larger screens
                            color="black"
                            fontFamily={"inter"} // Font family
                        >
                            So Many Choices, So Much To Smile About
                        </Text>
                        <Text
                            fontSize={["14px", "20px"]} // Font size adjusted for mobile and larger screens
                            color="black"
                            fontFamily={"inter"} // Font family
                        >
                            Discover More About Our Products, Their Nutrition Information And Where To Buy.
                        </Text>
                        <Button
                            h={"50px"} // Fixed height
                            mt={2}
                            borderRadius="40px" // Rounded corners
                            w={["70%", "215px"]} // Width adjusted for mobile and larger screens
                            bg={"#597445"} // Background color
                            color={"white"} // Text color
                            size="md" // Button size
                            gap={"25px"} // Gap between text and icon
                            rightIcon={<LuChevronRightCircle />} // Icon to the right of the text
                            fontFamily={"inter"} // Font family
                        >
                            Explore Categories
                        </Button>
                    </VStack>
                </Flex>



            </VStack>
        </Box>
    )
}

export default Specialize

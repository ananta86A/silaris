import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import photo from "../assets/SectionBanner/about-top.png";
import photo1 from "../assets/SectionBanner/img7.png";
import photo2 from "../assets/SectionBanner/about-img.png";
import { LuChevronRightCircle } from "react-icons/lu";

const AboutUs = () => {
    return (
        <Box>
            <VStack spacing={4}>
                {/* Top Banner */}
                <Box w="100%">
                    <Image src={photo} w="100%" />
                </Box>

                {/* Main Content */}
                <Box w="100%" my={-5}>
                    {/* Section 1 */}
                    <HStack
                        bg="#E7F0DC"
                        h={["auto", "376px"]}
                        direction={["column", "row"]}
                        spacing={4}
                        p={[4, 0]}
                    >
                        <Box
                            w={["100%", "50%"]}
                            h="300px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                        >
                            <Text
                                fontSize={["20px", "32px"]}
                                width={['auto', '256px']}
                                fontFamily="inter"
                            >
                                Global Leader in Convenient Foods and Beverages
                            </Text>
                        </Box>
                        <Box w={["100%", "50%"]} h="auto" p={[4, 8]}>
                            <Text fontSize={["10px", "15px"]} fontFamily="inter">
                                PepsiCo products are enjoyed by consumers more than one billion times a day in more than 200 countries and territories around the world.
                                PepsiCo generated more than $91 billion in net revenue in 2023, driven by a complementary beverage and convenient foods portfolio that includes Lay's,
                                Doritos, Cheetos, Gatorade, Pepsi-Cola, Mountain Dew, Quaker and SodaStream. PepsiCo's product portfolio includes a wide range of enjoyable foods and beverages,
                                including many iconic brands that generate more than $1 billion each in estimated annual retail sales.
                            </Text>
                        </Box>
                    </HStack>

                    {/* Section 2 */}
                    <VStack w="100%" spacing={5}>
                        <Box w="100%" textAlign="center" my={5} color="#597445">
                            <Text fontWeight={700} fontFamily="inter" fontSize={["24px", "40px"]}>
                                Pepsi-Cola & Frito-Lay, a perfect match since 1965
                            </Text>
                        </Box>

                        {/* PepsiCo Section */}
                        <VStack w="80%" spacing={10}>
                            <HStack
                                direction={["column", "row"]}
                                w="100%"
                                spacing={4}
                                align="center"

                            >
                                <Box w={["100%", "50%"]} textAlign="center">
                                    <Text fontFamily="inter" color="#597445" fontSize={["20px", "40px"]}>
                                        PepsiCo Beverages North America
                                    </Text>
                                    <Text p={[4, 6]} fontFamily="inter" fontSize={["10px", "20px"]}>
                                        With roots dating back to 1898, PepsiCo Beverages North America (PBNA) is one of the largest beverage companies in North America today, generating more than $27 billion in net revenue in 2023.
                                    </Text>
                                    <Box mx="auto" w="fit-content">
                                        <Button
                                            color="#E7F0DC"
                                            borderRadius="40px"
                                            bg="#597445"
                                            size="md"
                                            rightIcon={<LuChevronRightCircle />}
                                        >
                                            Read More...
                                        </Button>
                                    </Box>
                                </Box>
                                <Box w={["100%", "52%"]} >
                                    <Image src={photo2} w="100%" />
                                </Box>
                            </HStack>

                            {/* Frito-Lay Section */}
                            <HStack
                                my={"-40px"}

                                direction={["column", "row"]}
                                w="100%"
                                spacing={4}
                                align="center"
                            >
                                <Box w={["100%", "51%"]} display={["none", "block"]}>
                                    <Image src={photo2} w="100%" />
                                </Box>
                                <Box w={["100%", "50%"]} textAlign="center">
                                    <Text fontFamily="inter" color="#597445" fontSize={["20px", "40px"]}>
                                        Frito-Lay North America
                                    </Text>
                                    <Text p={[4, 6]} fontFamily="inter" fontSize={["10px", "20px"]}>
                                        In 1932, Herman W. Lay began a potato chip business in Nashville, Tennessee. Soon after that, he purchased the manufacturer and formed H.W. Lay & Company. In 1961, the company merged with the Frito Company,
                                        becoming Frito-Lay Inc., and in 1965, Frito-Lay Inc. merged with Pepsi-Cola to form PepsiCo.
                                    </Text>
                                    <Box mx="auto" w="fit-content">
                                        <Button
                                            color="#E7F0DC"
                                            borderRadius="40px"
                                            bg="#597445"
                                            size="md"
                                            rightIcon={<LuChevronRightCircle />}
                                        >
                                            Read More...
                                        </Button>
                                    </Box>
                                </Box>
                                <Box w={["100%", "50%"]} display={["block", "none"]}>
                                    <Image src={photo2} w="100%" />
                                </Box>
                            </HStack>
                        </VStack>
                    </VStack>

                    {/* Background Section */}
                    <Box mt={"50px"}>
                        <iframe style={{ width: "100%", height: "800px" }} src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.4283323321315!2d75.10714867444108!3d32.5414118959915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c195fcc03b383%3A0x2d866086585d539b!2sIGC%20phase%203%20Sidco%20samba%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1720081469057!5m2!1sen!2sin' />
                    </Box>
                </Box>
            </VStack>
        </Box>
    );
};

export default AboutUs;

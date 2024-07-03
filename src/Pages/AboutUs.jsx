import { Box, Button, Flex, Image, Text, VStack, HStack, Stack } from '@chakra-ui/react';
import React from 'react';
import photo from "../assets/SectionBanner/about-top.png";
import photo1 from "../assets/SectionBanner/img7.png";
import photo2 from "../assets/SectionBanner/about-img.png";
import { LuChevronRightCircle } from "react-icons/lu";

const AboutUs = () => {
    return (
        <Box>
            <VStack spacing={6} align="stretch">
                {/* Section Banner */}
                <Box>
                    <Image src={photo} alt="Section Banner" />
                </Box>

                {/* Main Content */}
                <Box>
                    <Stack direction={["column", "row"]} bg="#E7F0DC" spacing={6}>
                        {/* Left Column */}
                        <Box flex={1} display="flex" alignItems="center" justifyContent="center">
                            <Text fontSize={["24px", "32px"]} width={['auto', '256px']} fontFamily="inter" textAlign="center">
                                Global Leader in Convenient Foods and Beverages
                            </Text>
                        </Box>

                        {/* Right Column */}
                        <Box flex={1} p={["0px", "50px"]}>
                            <Text fontSize="15px" fontFamily="inter" textAlign="justify">
                                PepsiCo products are enjoyed by consumers more than one billion times a day in more than 200 countries and territories around the world.
                                PepsiCo generated more than $91 billion in net revenue in 2023, driven by a complementary beverage and convenient foods portfolio that includes Lay's,
                                Doritos, Cheetos, Gatorade,
                                Pepsi-Cola, Mountain Dew, Quaker and SodaStream. PepsiCo's product portfolio includes a wide range of enjoyable foods and beverages,
                                including many iconic brands that generate more than $1 billion each in estimated annual retail sales.
                            </Text>
                        </Box>
                    </Stack>
                </Box>

                {/* PepsiCo Beverages North America */}
                <Box>
                    <Stack direction={["column", "row"]} spacing={6}>
                        <Box flex={1}>
                            <Text fontSize={["24px", "40px"]} fontWeight={700} fontFamily="inter" textAlign="center" color="#597445">
                                Pepsi-Cola & Frito-Lay, a perfect match since 1965
                            </Text>
                            <Text fontSize={["16px", "20px"]} fontFamily="inter" textAlign="center" p={["20px", "30px"]}>
                                With roots dating back to 1898, PepsiCo Beverages North America (PBNA) is one of the largest beverage companies in North America today,
                                generating more than $27 billion in net revenue in 2023.
                            </Text>
                            <Flex justify="center" mt={6}>
                                <Button color="#E7F0DC" bg="#597445" size="md" borderRadius="40px" rightIcon={<LuChevronRightCircle />}>
                                    Read More...
                                </Button>
                            </Flex>
                        </Box>
                        <Box flex={1}>
                            <Image src={photo2} alt="PepsiCo Beverages North America" />
                        </Box>
                    </Stack>
                </Box>

                {/* Frito-Lay North America */}
                <Box>
                    <Stack direction={["column", "row"]} spacing={6}>
                        <Box flex={1}>
                            <Text fontSize={["24px", "40px"]} fontWeight={700} fontFamily="inter" textAlign="center" color="#597445">
                                Frito-Lay North America
                            </Text>
                            <Text fontSize={["16px", "20px"]} fontFamily="inter" textAlign="center" p={["20px", "30px"]}>
                                In 1932, Herman W. Lay began a potato chip business in Nashville, Tennessee. Soon after that, he purchased the manufacturer and formed H.W. Lay & Company. In 1961, the company merged with the Frito Company,
                                becoming Frito-Lay Inc., and in 1965, Frito-Lay Inc. merged with Pepsi-Cola to form PepsiCo.
                            </Text>
                            <Flex justify="center" mt={6}>
                                <Button color="#E7F0DC" bg="#597445" size="md" borderRadius="40px" rightIcon={<LuChevronRightCircle />}>
                                    Read More...
                                </Button>
                            </Flex>
                        </Box>
                        <Box flex={1}>
                            <Image src={photo2} alt="Frito-Lay North America" />
                        </Box>
                    </Stack>
                </Box>

                {/* Background Image */}
                <Box w="100%" h="500px" backgroundImage={`url(${photo1})`} backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" />
            </VStack>
        </Box>
    );
};

export default AboutUs;

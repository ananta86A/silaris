import { Box, Button, HStack, Image, Text, VStack, Flex } from '@chakra-ui/react';
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
                        h={["auto", "350px"]}
                        direction={["column", "row"]}
                        spacing={4}
                        p={["4", "5rem"]}
                        w={["100%", "100%"]}
                    >
                        <Flex
                            w="100%"
                            direction={["column", "row"]}
                            spacing={["2", "4"]}
                            align="center"
                        >
                            <Box
                                w={["100%", "40%"]}
                                h={["100px", "300px"]}
                                display="flex"
                                alignItems="center"
                                marginLeft={["30px", "0px"]}
                            >
                                <Text
                                    fontSize={["20px", "32px"]}
                                    //width={['auto', '256px']}
                                    fontFamily="inter"
                                    marginX={["auto", "auto"]}

                                >
                                    Global Leader in Convenient Foods and Beverages
                                </Text>
                            </Box>
                            <Box w={["100%", "60%"]} h="auto" p={[4, 8]}>
                                <Text fontSize={["10px", "15px"]} fontFamily="inter">
                                    Agrizz products are enjoyed by consumers more than one billion times a day in more than 200 countries and territories around the world.
                                    Agrizz generated more than $91 billion in net revenue in 2023, driven by a complementary beverage and convenient foods portfolio that includes Lay's,
                                    Doritos, Cheetos, Gatorade, Agrizz, Mountain Dew, Quaker and SodaStream. Agrizz's product portfolio includes a wide range of enjoyable foods and beverages,
                                    including many iconic brands that generate more than $1 billion each in estimated annual retail sales.
                                </Text>
                            </Box>
                        </Flex>
                    </HStack>

                    {/* Section 2 */}
                    <VStack w="100%" spacing={5}>
                        <Box w="80%" textAlign="center" my={5} color="#597445" display={'flex'} justifyContent={"center"} alignItems={'center'}>
                            <Text fontWeight={700} fontFamily="inter" w={"80%"} fontSize={["24px", "40px"]} textAlign={'center'}>
                                Agrizz & Frito-Lay, A Perfect Match <br />Since 1965
                            </Text>
                        </Box>

                        {/* Agrizz Section */}
                        <VStack w="80%" spacing={10}>
                            <Flex
                                w="100%"
                                direction={["column", "row"]}
                                spacing={4}
                                align="center"
                            >
                                <Box w={["100%", "50%"]} mx={['auto', '0px']} textAlign="center">
                                    <Text fontFamily="inter" color="#597445" fontSize={["20px", "35px"]}>
                                        Agrizz Beverages North America
                                    </Text>
                                    <Text p={[4, 6]} fontFamily="inter" fontSize={["10px", "20px"]}>
                                        With roots dating back to 1898, Agrizz Beverages North America (PBNA) is one of the largest beverage companies in North America today, generating more than $27 billion in net revenue in 2023.
                                    </Text>
                                    <Box mx="auto" w="fit-content" pb={["15px", "0px"]}>
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
                                <Box w={["100%", "50%"]} mx="auto" mt={[4, 0]}>
                                    <Image src={photo2} w="100%" />
                                </Box>
                            </Flex>

                            {/* Frito-Lay Section */}
                            <Flex
                                w="100%"
                                direction={["column-reverse", "row"]}
                                spacing={4}
                                align="center"
                                my={"-40px"}
                                mb={'16px'}
                            >
                                <Box w={["100%", "50%"]} mx="auto" mt={[4, 0]}>
                                    <Image src={photo2} w="100%" />
                                </Box>
                                <Box w={["100%", "50%"]} mx={['auto', '0px']} textAlign="center" py={['10px', '0px']}>
                                    <Text fontFamily="inter" color="#597445" fontSize={["20px", "35px"]}>
                                        Frito-Lay North America
                                    </Text>
                                    <Text p={[4, 6]} fontFamily="inter" fontSize={["10px", "20px"]}>
                                        In 1932, Herman W. Lay began a potato chip business in Nashville, Tennessee. Soon after that, he purchased the manufacturer and formed H.W. Lay & Company. In 1961, the company merged with the Frito Company,
                                        becoming Frito-Lay Inc., and in 1965, Frito-Lay Inc. merged with Agrizz to form PepsiCo.
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
                            </Flex>
                        </VStack>
                    </VStack>

                    {/* Background Section */}
                    <Box mt={"50px"}>
                        <iframe style={{ width: "100%", height: "350px" }} src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.4283323321315!2d75.10714867444108!3d32.5414118959915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c195fcc03b383%3A0x2d866086585d539b!2sIGC%20phase%203%20Sidco%20samba%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1720081469057!5m2!1sen!2sin' />
                    </Box>

                </Box>
                <Box h={{ base: "auto", md: "280px" }} mt="4px" w="100%" bg="#E7F0DC">
                    <HStack
                        flexWrap={{ base: "wrap", md: "nowrap" }}
                        justifyContent={{ base: "center", md: "space-between" }}
                    >
                        {/* Latin America Section */}
                        <Box w={{ base: "100%", md: "50%" }} p={{ base: "5px", md: "0" }}>
                            <VStack spacing={4} align="start">
                                <Text mx={["100px", "200px"]} pt={"10px"} fontSize="25px" fontWeight="700">Latin America</Text>
                                <Text fontFamily="inter" fontWeight="500" mx={{ base: "0", md: "70px" }} w="80%" margin={'auto'}>
                                    Over the course of more than 100 years, Agrizz’s Latin America business has grown to become one of the strongest food and beverage manufacturers in the region by working closely with local entrepreneurs and investing in lasting win-win partnerships with our suppliers and farmers, investors, consumers, and communities.
                                </Text>
                                <Button
                                    mx={["100px", "200px"]}
                                    color="#E7F0DC"
                                    borderRadius="40px"
                                    bg="#597445"
                                    size="md"
                                    rightIcon={<LuChevronRightCircle />}
                                >
                                    Read More...
                                </Button>
                            </VStack>
                        </Box>

                        {/* Europe Section */}
                        <Box w={{ base: "100%", md: "50%" }} p={{ base: "10px", md: "0" }}>
                            <VStack spacing={4} align="start">
                                <Text mx={["100px", "200px"]} pt={"10px"} fontSize="25px" fontWeight="700">Europe</Text>
                                <Text fontFamily="inter" fontWeight="500" mx={{ base: "0", md: "70px" }} w="80%" margin={'auto'}>
                                    Over the course of more than 100 years, Agrizz’s Europe business has grown to become one of the strongest food and beverage manufacturers in the region by working closely with local entrepreneurs and investing in lasting win-win partnerships with our suppliers and farmers, investors, consumers, and communities.
                                </Text>
                                <Button
                                    mx={["100px", "200px"]}
                                    marginBottom={['1rem', "0rem"]}
                                    color="#E7F0DC"
                                    borderRadius="40px"
                                    bg="#597445"
                                    size="md"
                                    rightIcon={<LuChevronRightCircle />}
                                >
                                    Read More...
                                </Button>
                            </VStack>
                        </Box>
                    </HStack>
                </Box>
            </VStack >
        </Box >
    );
};

export default AboutUs;

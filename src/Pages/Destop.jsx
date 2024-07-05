import { Box, Button, Flex, HStack, Image, Text, VStack, } from '@chakra-ui/react'

import React from 'react'
import photo2 from "../assets/SectionBanner/about-img.png";
import topdestop from "../assets/SectionBanner/Desktop.png";
import { LuChevronRightCircle } from "react-icons/lu";

const Destop = () => {
    return (
        <Box>
            <VStack spacing={4}>
                {/* Top Banner */}
                <Box w="100%">
                    <Image src={topdestop} w="100%" />
                </Box>

                {/* Main Content */}
                <Box w="100%" my={-5}>
                    {/* Section 1 */}
                    {/* <HStack
                        bg="#E7F0DC"
                        h={["auto", "376px"]}
                        direction={["column", "row"]}
                        spacing={4}
                        p={[4, 0]}
                    >
                        <Box
                            w={["100%", "50%"]}
                            //h="300px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                        //flexDirection={["row", 'row']}
                        >
                            <Text
                                fontSize={["20px", "32px"]}
                                width={['80%', '70%']}
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
                    </HStack> */}

                    {/* Section 2 */}
                    <VStack w="100%" spacing={5} mb={['35px', '60px']}>
                        <Box w={['80%', "60%"]} textAlign="center" my={5} color="#597445" py={['0px', '15px']}>
                            <Text fontWeight={700} fontFamily="inter" w={"100%"} fontSize={["24px", "40px"]}>
                                Agrizz & Frito-Lay, a perfect match since 1965
                            </Text>
                        </Box>

                        {/* PepsiCo Section */}
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
                                <Box w={["100%", "50%"]} mx={['auto', '0px']} textAlign="center" py={['15px', '0px']}>
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
                </Box>
            </VStack>
        </Box>
    )
}

export default Destop
import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import photo from "../assets/SectionBanner/about-top.png"
import photo1 from "../assets/SectionBanner/img7.png"
import photo2 from "../assets/SectionBanner/about-img.png"
import { LuChevronRightCircle } from "react-icons/lu";
const AboutUs = () => {
    return (
        <Box>
            <VStack>
                <Box>
                    <Image src={photo} />
                </Box>
                <Box w={"100%"} my={"-5"}>
                    <HStack bg={"#E7F0DC"} h={"376px"} >
                        <Box w={"100%"} h={"300px"} display={"flex"} alignItems={'center'} justifyContent={"center"}>
                            <Text fontSize={"32px"} width={['auto', '256px']} fontFamily={"inter"}>Global Leader in
                                Convenient Foods and
                                Beverages</Text>
                        </Box>
                        <Box w={"100%"} h={"300px"} >
                            <Text fontSize={"15px"} p={"50px"} fontFamily={"inter"}>
                                PepsiCo products are enjoyed by consumers more than one billion times a day in more than 200 countries and territories around the world.
                                PepsiCo generated more than $91 billion in net revenue in 2023, driven by a complementary beverage and convenient foods portfolio that includes Lay's,
                                Doritos, Cheetos, Gatorade,
                                Pepsi-Cola, Mountain Dew, Quaker and SodaStream. PepsiCo's product portfolio includes a wide range of enjoyable foods and beverages,
                                including many iconic brands that generate more than $1 billion each in estimated annual retail sales.
                            </Text>
                        </Box>


                    </HStack>
                    <Box w={"100%"}>

                        <VStack w={"100%"}>
                            <Box w={"40%"} textAlign={"center"} my={"20px"} color={"#597445"}>
                                <Text fontWeight={700} fontFamily={"inter"} fontSize={"40px"}>Pepsi-Cola & Frito-Lay, a
                                    perfect match since 1965</Text>
                            </Box>
                            <Box w={"80%"} h={"920px"} >
                                <VStack>
                                    <Box w={"100%"}>
                                        <HStack>
                                            <Box w={"50%"}>
                                                <Text textAlign={"center"} fontFamily={"inter"} fontSize={"40px"}>PepsiCo BeveragesNorth America</Text>
                                                <Text p={"30px"} textAlign={"center"} fontFamily={"inter"} fontSize={"20px"}>With roots dating back to 1898, PepsiCo Beverages North America (PBNA) is one
                                                    of the largest beverage companies in North America today,
                                                    generating more than $27 billion in net revenue in 2023.</Text>
                                                <Box mx={"220px"}>
                                                    <Button color="#E7F0DC" borderRadius="40px" bg="#597445" size="md" rightIcon={<LuChevronRightCircle />}>
                                                        Read More...
                                                    </Button>
                                                </Box>
                                            </Box>
                                            <Box w={"50%"} >
                                                <Image src={photo2} />
                                            </Box>
                                        </HStack>
                                    </Box>
                                    <Box w={"100%"}>

                                        <HStack>
                                            <Box w={"50%"}>
                                                <Image my={"-2"} ml={"15px"} src={photo2} />
                                                {/* <Text textAlign={"center"} fontFamily={"inter"} fontSize={"40px"}>Frito-Lay North
                                                    America</Text>
                                                <Text p={"30px"} textAlign={"center"} fontFamily={"inter"} fontSize={"20px"}>In 1932, Herman W. Lay began a potato chip business in Nashville, Tennessee. Soon after that, he purchased the manufacturer and formed H.W. Lay & Company. In 1961, the company merged with the Frito Company,
                                                    becoming Frito-Lay Inc., and in 1965, Frito-Lay Inc. merged with Pepsi-Cola to form PepsiCo.</Text>
                                                <Box mx={"220px"}>
                                                    <Button color="#E7F0DC" borderRadius="40px" bg="#597445" size="md" rightIcon={<LuChevronRightCircle />}>
                                                        Read More...
                                                    </Button>
                                                </Box> */}
                                            </Box>
                                            <Box w={"50%"} my={"-2"}>
                                                <Text textAlign={"center"} fontFamily={"inter"} fontSize={"40px"}>Frito-Lay North
                                                    America</Text>
                                                <Text p={"30px"} textAlign={"center"} fontFamily={"inter"} fontSize={"20px"}>In 1932, Herman W. Lay began a potato chip business in Nashville, Tennessee. Soon after that, he purchased the manufacturer and formed H.W. Lay & Company. In 1961, the company merged with the Frito Company,
                                                    becoming Frito-Lay Inc., and in 1965, Frito-Lay Inc. merged with Pepsi-Cola to form PepsiCo.</Text>
                                                <Box mx={"220px"}>
                                                    <Button color="#E7F0DC" borderRadius="40px" bg="#597445" size="md" rightIcon={<LuChevronRightCircle />}>
                                                        Read More...
                                                    </Button>
                                                </Box>
                                                {/* <Image src={photo2} /> */}
                                            </Box>
                                        </HStack>
                                    </Box>
                                </VStack>

                            </Box>
                        </VStack>
                    </Box>
                    <Box justifyContent={"center"}
                        w="100%"
                        h="1150px" // Define a height for visibility

                        style={{
                            backgroundImage: `url(${photo1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}>

                    </Box>
                </Box>
            </VStack >
        </Box >
    )
}

export default AboutUs
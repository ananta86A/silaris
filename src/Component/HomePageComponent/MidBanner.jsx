import { Box, Flex, HStack, Image, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import photo from "../../assets/SectionBanner/midbanner.jpg"
import { LuChevronRightCircle } from "react-icons/lu";

const MidBanner = () => {
    return (
        <Box w="100%" maxW="100%" mx="auto" px={["2", "12"]} my={["15px", "5px"]}>
            <Box>

                <Flex
                    justifyContent={"center"}
                    w="100%"
                    h="650px" // Define a height for visibility

                    style={{
                        backgroundImage: `url(${photo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Flex align={"center"} w={'60%'} >
                        <VStack color={"white"}>
                            <Text fontWeight={600} textAlign={"center"} fontSize={"40px"} >Arigzs Positive</Text>
                            <Text fontWeight={900} textAlign={"center"} fontSize={"54px"}>Building a stronger, more
                                sustainable future</Text>
                            <Box>
                                <HStack>
                                    <Link fontSize={"25px"} >Our Commitments

                                    </Link>
                                    <Box fontSize={"30px"}><LuChevronRightCircle /></Box>
                                </HStack>
                            </Box>

                        </VStack>
                    </Flex>
                </Flex>

            </Box>

        </Box >
    )
}

export default MidBanner
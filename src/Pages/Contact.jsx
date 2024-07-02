import { Box, Checkbox, Flex, HStack, Image, Input, Spacer, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import photo from "../assets/SectionBanner/contact-banner.png"
import photo1 from "../assets/SectionBanner/img7.png"

const Contact = () => {
    return (
        <Box>
            <Box>
                <Image src={photo} />
            </Box>
            <Box h={"450px"}>
                <HStack>
                    <Box w='100%' h='500px'>
                        <Text mx={"30px"} my={"30px"} fontSize={"25px"} >We're here to help.</Text>
                        <Flex w={"100%"} gap={8} mx={"20px"}>
                            <Input placeholder='Frist Name*' w={"40%"} />

                            <Input placeholder='Last NAme*' w={"40%"} />
                        </Flex>
                        <Input placeholder='Email*' w={"85%"} my={"20px"} mx={"21px"} />
                        <Textarea placeholder='Message*' w={"85%"} my={"20px"} mx={"21px"} />
                        <Box>
                            <HStack>
                                <Checkbox mx={"40px"} />
                                <Box>
                                    <Text>By checking this box, I agree to The Silaris Company’s Terms of Service and consent to The Silaris Company’s Privacy Policy.</Text>
                                </Box>
                            </HStack>
                        </Box>
                    </Box>
                    <Box w='100%' h='500px' >
                        <VStack mx={"30px"} my={"40px"}>
                            <Text>Have questions or comments? Reach Coca‑Cola Consumer Care on the phone for any urgent matters. For other questions and concerns, please email or message us below.
                            </Text>
                            <Box w={"100%"} >
                                <Text fontWeight={700}>Call</Text>
                            </Box>
                            <Box w={"100%"} >
                                <Text>Consumer Care: +1 800-520-2653</Text>
                            </Box>
                            <Box w={"100%"} >
                                <Text>Coca‑Cola Store:  +1 800-557-4616</Text>
                            </Box>
                            <Box w={"100%"} >
                                <Text fontWeight={700}>Email</Text>
                            </Box>
                            <Box w={"100%"}>
                                <Text>Send us an email by filling out this form.</Text>
                            </Box>
                            <Box w={"100%"}>
                                <Text fontWeight={700}>Write To Us</Text>
                            </Box>
                            <Box w={"100%"}>
                                <Text>Sudarshan Consolidated Private Limited

                                    IGC Samba, Samba Jammu & Kashmir,
                                    Pincode:184121</Text>
                            </Box>

                        </VStack>
                    </Box>

                </HStack>

            </Box>
            <Box justifyContent={"center"}
                w="100%"
                h="1000px" // Define a height for visibility

                style={{
                    backgroundImage: `url(${photo1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>

            </Box>
        </Box>
    )
}

export default Contact
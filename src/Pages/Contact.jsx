import { Box, Checkbox, Flex, Image, Input, Spacer, Text, Textarea, VStack } from '@chakra-ui/react';
import React from 'react';
import photo from "../assets/SectionBanner/contact-banner.png";
import photo1 from "../assets/SectionBanner/img7.png";

const Contact = () => {
    return (
        <Box>
            {/* Banner Image */}
            <Box>
                <Image src={photo} />
            </Box>

            {/* Contact Form and Information */}
            <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="start" mx={{ base: 0, md: "20px" }}>
                {/* Contact Form */}
                <Box w={{ base: "100%", md: "40%" }} h="auto" maxH="500px">
                    <Text fontFamily="inter" mx="30px" my="30px" fontSize="25px">We're here to help.</Text>
                    <Flex direction="column" mx="20px">
                        <Input placeholder='First Name*' />
                        <Input placeholder='Last Name*' mt={2} />
                        <Input placeholder='Email*' mt={2} />
                        <Textarea placeholder='Message*' mt={2} />
                        <Box mt={2}>
                            <Checkbox />
                            <Text fontFamily="inter" ml={2}>
                                By checking this box, I agree to The Silaris Company’s Terms of Service and consent to The Silaris Company’s Privacy Policy.
                            </Text>
                        </Box>
                    </Flex>
                </Box>

                {/* Contact Information */}
                <Box w={{ base: "100%", md: "50%" }} h="auto" maxH="500px">
                    <VStack mx="30px" my="40px" align="start">
                        <Text fontFamily="inter">Have questions or comments? Reach Coca‑Cola Consumer Care on the phone for any urgent matters. For other questions and concerns, please email or message us below.</Text>
                        <Box w="100%">
                            <Text fontFamily="inter" fontWeight={700}>Call</Text>
                            <Text fontFamily="inter">Consumer Care: +1 800-520-2653</Text>
                            <Text fontFamily="inter">Coca‑Cola Store: +1 800-557-4616</Text>
                        </Box>
                        <Box w="100%" mt={4}>
                            <Text fontFamily="inter" fontWeight={700}>Email</Text>
                            <Text fontFamily="inter">Send us an email by filling out this form.</Text>
                        </Box>
                        <Box w="100%" mt={4}>
                            <Text fontFamily="inter" fontWeight={700}>Write To Us</Text>
                            <Text fontFamily="inter">
                                Sudarshan Consolidated Private Limited
                                IGC Samba, Samba Jammu & Kashmir,
                                Pincode: 184121
                            </Text>
                        </Box>
                    </VStack>
                </Box>
            </Flex>

            {/* Additional Section with Background Image */}
            <Box bgImage={`url(${photo1})`} bgSize="cover" bgPos="center" bgRepeat="no-repeat" h="500px" mt={8} />
        </Box>
    );
}

export default Contact;

import {
    Box,
    Button,
    Checkbox,
    Flex,
    HStack,
    Image,
    Input,
    Link,
    Text,
    Textarea,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import photo from '../assets/SectionBanner/contact-banner.png';
import photo1 from '../assets/SectionBanner/img7.png';
import photo2 from '../assets/SectionBanner/logo1.png';
import photo3 from '../assets/SectionBanner/logo2.png';
import photo4 from '../assets/SectionBanner/logo3.png';

import { LuChevronRightCircle } from "react-icons/lu";


const Contact = () => {
    return (
        <Box>
            {/* Banner Image */}
            <Box>
                <Image src={photo} w="100%" objectFit="cover" />
            </Box>

            {/* Contact Form and Information */}
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justify="space-between"
                align="start"
                mx={{ base: 0, md: '20px' }}
                my={{ base: '20px', md: '40px' }}
            >
                {/* Contact Form */}
                <Box w={{ base: '100%', md: '45%' }} maxH="auto">
                    <Text
                        fontFamily="inter"
                        mx={{ base: '10px', md: '30px' }}
                        my="20px"
                        fontSize={{ base: '18px', md: '20px' }}
                        color="#597445"
                    >
                        We're Here To Help..
                    </Text>
                    <Flex direction="column" mx={{ base: '10px', md: '20px' }}>
                        <HStack mb="10px">
                            <Input
                                borderRadius="13px"
                                placeholder="First Name*"
                                w="100%"
                            />
                            <Input
                                borderRadius="13px"
                                placeholder="Last Name*"
                                w="100%"
                            />
                        </HStack>
                        <Input
                            borderRadius="13px"
                            placeholder="Email*"
                            my="15px"
                            w="100%"
                        />
                        <Textarea
                            borderRadius="13px"
                            placeholder="Message*"
                            mt={2}
                            w="100%"
                        />
                        <Box mt={2}>
                            <HStack align="start">
                                <Checkbox />
                                <Text fontFamily="inter" fontSize="12px">
                                    By checking this box, I agree to The Silaris Company’s <Link fontWeight={900}>Terms of Service </Link>and consent to The Silaris Company’s <Link fontWeight={900}>Privacy Policy.</Link>
                                </Text>
                            </HStack>
                        </Box>
                        <Button
                            bg="#597445"
                            my="10px"
                            color="#E7F0DC"
                            w={{ base: '50%', md: '40%' }}
                            mx={{ base: '90px', md: '80px' }}
                            borderRadius="20px"
                        >
                            Submit
                        </Button>
                    </Flex>
                </Box>

                {/* Contact Information */}
                <Box w={{ base: '100%', md: '50%' }} mt={{ base: '20px', md: 0 }}>
                    <VStack mx={{ base: '10px', md: '30px' }} align="start">
                        <Text
                            fontFamily="inter"
                            fontSize="15px"
                            mb="20px"
                            textAlign={{ base: 'center', md: 'left' }}
                        >
                            Have questions or comments? Reach Coca‑Cola Consumer Care on the phone for any urgent matters. For other questions and concerns, please email or message us below.
                        </Text>
                        <HStack w="90%" align="start" spacing="20px">
                            <Box w="60%">
                                <Box mb="4">
                                    <Text fontFamily="inter" fontWeight="700">Call</Text>
                                    <Text fontFamily="inter">Consumer Care: +1 800-520-2653</Text>
                                    <Text fontFamily="inter">Coca‑Cola Store: +1 800-557-4616</Text>
                                </Box>
                                <Box mb="4">
                                    <Text fontFamily="inter" fontWeight="700">Email</Text>
                                    <Text fontFamily="inter">Send us an email by filling out this form.</Text>
                                </Box>
                                <Box>
                                    <Text fontFamily="inter" fontWeight="700">Write To Us</Text>
                                    <Text my="8px" fontFamily="inter" fontSize="15px">
                                        Sudarshan Consolidated Private Limited
                                    </Text>
                                    <Text my="10px" fontFamily="inter" fontSize="15px">
                                        IGC Samba, Samba Jammu & Kashmir, Pincode: 184121
                                    </Text>
                                </Box>
                            </Box>
                            <Box w="40%" h="270px">
                                <VStack spacing="10px">
                                    <Box w="100%" textAlign="center">
                                        <Image mx="auto" h="60px" my="20px" src={photo3} />
                                    </Box>
                                    <Box w="100%" textAlign="center">
                                        <Image mx="auto" h="30px" src={photo4} />
                                    </Box>
                                    <Box w="100%" textAlign="center">
                                        <Image mx="auto" h="200px" src={photo2} />
                                    </Box>
                                </VStack>
                            </Box>
                        </HStack>
                    </VStack>
                </Box>
            </Flex>

            {/* Additional Section with Background Image */}
            <Box mt={"6%"}>
                <iframe style={{ width: "100%", height: "350px" }} src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.4283323321315!2d75.10714867444108!3d32.5414118959915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c195fcc03b383%3A0x2d866086585d539b!2sIGC%20phase%203%20Sidco%20samba%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1720081469057!5m2!1sen!2sin' />
            </Box>
            <Box h={{ base: "auto", md: "320px" }} mt="1px" w="100%" bg="#E7F0DC" py={["10px", "30px"]}>
                <HStack
                    flexWrap={{ base: "wrap", md: "nowrap" }}
                    justifyContent={{ base: "center", md: "space-between" }}

                >
                    {/* Latin America Section */}
                    <Box w={{ base: "100%", md: "50%" }} p={{ base: "10px", md: "0" }}>
                        <VStack spacing={4} align="start">
                            <Text mx={["100px", "200px"]} pt={"10px"} fontSize="25px" fontWeight="700">Latin America</Text>
                            <Text fontFamily="inter" fontWeight="500" mx={{ base: "0", md: "70px" }} w="80%" margin={"auto"}>
                                Over the course of more than 100 years, Agrizz Latin America business has grown to become one of the strongest food and beverage manufacturers in the region by working closely with local entrepreneurs and investing in lasting win-win partnerships with our suppliers and farmers, investors, consumers, and communities.
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
                            <Text fontFamily="inter" fontWeight="500" mx={{ base: "0", md: "70px" }} w="80%" margin={"auto"}>
                                Over the course of more than 100 years, Agrizz's Europe business has grown to become one of the strongest food and beverage manufacturers in the region by working closely with local entrepreneurs and investing in lasting win-win partnerships with our suppliers and farmers, investors, consumers, and communities.
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
                </HStack>
            </Box>


        </Box>


    );
};

export default Contact;

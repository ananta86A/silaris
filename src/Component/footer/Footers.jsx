import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import "@fontsource/inter";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footers = () => {
  return (
    <Box bg={"#597445"} my={"30px"} h={{ base: 'auto', md: '350px' }} p={{ base: '20px', md: '0' }} >
      <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'center', md: 'flex-start' }}>
        <Box w={{ base: '100%', md: '40%' }} color={'white'} my={{ base: '20px', md: '20px' }} mx={{ base: '0', md: '60px' }} textAlign={{ base: 'center', md: 'left' }}>
          <Text fontFamily={"inter"} fontSize={"30px"} fontWeight={600}>Manufactured by:</Text>
          <Text fontFamily={"inter"} fontSize={"18px"} my={"15px"}>Sudarshan Consolidated Private Limited</Text>
          <Text fontFamily={"inter"} fontSize={"18px"} my={"15px"}><span style={{ fontWeight: "600" }}>Address:</span> IGC Samba, Samba Jammu & Kashmir,<br />
            <span style={{ fontWeight: "bold" }}>Pincode:</span> 184121</Text>
          <Text fontFamily={"inter"} fontSize={"18px"} my={"15px"}> <span style={{ fontWeight: "600" }}>Email:</span> info@sclagro.com</Text>
          <Text fontFamily={"inter"} fontSize={"18px"} my={"15px"}><span style={{ fontWeight: "600" }}>Website:</span> www.sclagro.com</Text>
          <Box my={"30px"}>
            <HStack fontSize={"25px"} justify={{ base: 'center', md: 'flex-start' }}>
              <FaInstagram />
              <FaFacebook />
              <FaLinkedin />
            </HStack>
          </Box>
        </Box>

        <Box w={{ base: '100%', md: '20%' }} color={'white'} my={"20px"} textAlign={{ base: 'center', md: 'left' }}>
          <Text fontFamily={"inter"} fontSize={"25px"} fontWeight={600}>LEGAL</Text>
          <Text fontFamily={"inter"} fontSize={"18px"} my={"10px"}>Term and Conditions</Text>
          <Text fontFamily={"inter"} fontSize={"18px"} my={"10px"}>Disclaimer</Text>
          <Text fontFamily={"inter"} fontSize={"18px"} my={"10px"}>FAQs</Text>
          <Text fontFamily={"inter"} fontSize={"18px"} my={"10px"}>Privacy Policy</Text>
        </Box>

        <Box w={{ base: '100%', md: '40%' }} color={'white'} my={"20px"} textAlign={{ base: 'center', md: 'left' }}>
          <Text fontFamily={"inter"} fontSize={"25px"} fontWeight={600}>COMPANY</Text>
          <Text fontFamily={"inter"} fontSize={"18px"} my={"10px"}>About Us</Text>
          <Text fontFamily={"inter"} fontSize={"18px"} my={"10px"}>Partners</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Footers;

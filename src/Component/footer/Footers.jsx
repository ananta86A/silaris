import { Box, Flex, VStack, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import "@fontsource/inter";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footers = () => {
  return (
    <Box bg={"#597445"} my={"30px"} h={{ sm: "400px", md: "350px" }} >
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        px={{ base: "20px", md: "60px" }}
      >
        <Box w={{ base: "100%", md: '40%' }} mb={{ base: "20px", md: 0 }} color={'white'}>
          <Text fontFamily={"inter"} fontSize={"30px"} fontWeight={600}>Manufactured by:</Text>
          <Text fontFamily={"inter"} fontSize={"16px"} my={"15px"}>Sudarshan Consolidated Private Limited</Text>
          <Text fontFamily={"inter"} fontSize={"16px"} my={"15px"}>
            <span style={{ fontWeight: "600", fontSize: "18px" }}>Address:</span> IGC Samba, Samba Jammu & Kashmir,<br />
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>Pincode:</span> 184121
          </Text>
          <Text fontFamily={"inter"} fontSize={"16px"} my={"15px"}>
            <span style={{ fontWeight: "600", fontSize: "18px" }}>Email:</span> info@sclagro.com
          </Text>
          <Text fontFamily={"inter"} fontSize={"16x"} my={"15px"}>
            <span style={{ fontWeight: "600", fontSize: "18px" }}>Website:</span> www.sclagro.com
          </Text>
          <Box my={"30px"}>
            <HStack fontSize={"25px"} spacing={5}>
              <FaInstagram />
              <FaFacebook />
              <FaLinkedin />
            </HStack>
          </Box>
        </Box>

        <Box w={{ base: "100%", md: '20%' }} mb={{ base: "20px", md: 0 }} color={'white'}>
          <Text fontFamily={"inter"} fontSize={"25px"} fontWeight={600}>LEGAL</Text>
          <VStack align="start">
            <Text fontFamily={"inter"} fontSize={"16px"} my={"10px"}>Term and Conditions</Text>
            <Text fontFamily={"inter"} fontSize={"16px"} my={"10px"}>Disclaimer</Text>
            <Text fontFamily={"inter"} fontSize={"16px"} my={"10px"}>FAQs</Text>
            <Text fontFamily={"inter"} fontSize={"16px"} my={"10px"}>Privacy Policy</Text>
          </VStack>
        </Box>

        <Box w={{ base: "100%", md: '40%' }} color={'white'}>
          <Text fontFamily={"inter"} fontSize={"25px"} fontWeight={600}>COMPANY</Text>
          <VStack align="start">
            <Text fontFamily={"inter"} fontSize={"16px"} my={"10px"}>About Us</Text>
            <Text fontFamily={"inter"} fontSize={"16px"} my={"10px"}>Partners</Text>
          </VStack>
        </Box>
      </Flex>
    </Box>
  )
}

export default Footers;

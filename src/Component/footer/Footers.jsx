import { Box, Flex, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footers = () => {
  return (
    <Box bg={"#597445"} >
      <Flex>
        <Box w='40%' h='280px' color={'white'} my={"20px"} mx={"60px"}>
          <Text fontSize={"30px"} fontWeight={600}>Manufactured by:</Text>
          <Text fontSize={"18px"} my={"15px"}>Sudarshan Consolidated Private Limited</Text>
          <Text fontSize={"18px"} my={"15px"}><span style={{ fontWeight: "600" }}>Address:</span> IGC Samba, Samba Jammu & Kashmir,<br />
            <span style={{ fontWeight: "bold" }}>Pincode:</span> 184121</Text>
          <Text fontSize={"18px"} my={"15px"}> <span style={{ fontWeight: "600" }}>Email:</span> info@sclagro.com</Text>
          <Text fontSize={"18x"} my={"15px"}><span style={{ fontWeight: "600" }}>Website:</span>www.sclagro.com</Text>
          <Box my={"30px"}>
            <HStack fontSize={"25px"}>
              <FaInstagram />
              <FaFacebook />
              <FaLinkedin />
            </HStack>
          </Box>

        </Box>

        <Box w='20%' h='250px' color={'white'} my={"20px"}>
          <Text fontSize={"25px"} fontWeight={600}>LEGAL</Text>
          <Text fontSize={"18px"} my={"10px"}>Term and Conditions</Text>
          <Text fontSize={"18px"} my={"10px"}>Disclaimer</Text>
          <Text fontSize={"18px"} my={"10px"}>FAQs</Text>
          <Text fontSize={"18px"} my={"10px"}>Privacy Policy </Text>
        </Box>

        <Box w='40%' h='250px' color={'white'} my={"20px"}>
          <Text fontSize={"25px"} fontWeight={600}>COMPANY</Text>
          <Text fontSize={"18px"} my={"10px"}>About Us</Text>
          <Text fontSize={"18px"} my={"10px"}>Partners</Text>
        </Box>
      </Flex>

    </Box>
  )
}

export default Footers
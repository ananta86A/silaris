import { Box, Flex, VStack, Text, HStack, Link } from '@chakra-ui/react';
import React from 'react';
import "@fontsource/inter";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footers = () => {
  return (
    <Box bg="#597445" py="30px" color="white" my={"35px"}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        px={{ base: "20px", md: "60px" }}
        w="full"
      >
        <Box w={{ base: "100%", md: "40%" }} mb={{ base: "20px", md: 0 }}>
          <Text fontFamily="Inter" fontSize="25px" fontWeight="600">
            Manufactured by:
          </Text>
          <Text fontFamily="Inter" fontSize="16px" my="15px">
            Sudarshan Consolidated Private Limited
          </Text>
          <Text fontFamily="Inter" fontSize="16px" my="15px">
            <span style={{ fontWeight: "600", fontSize: "18px" }}>Address:</span> IGC Samba, Samba Jammu & Kashmir,<br />
            <span style={{ fontWeight: "600", fontSize: "18px" }}>Pincode:</span> 184121
          </Text>
          <Text fontFamily="Inter" fontSize="16px" my="15px">
            <span style={{ fontWeight: "600", fontSize: "18px" }}>Email: </span> info@sclagro.com
          </Text>
          <Text fontFamily="Inter" fontSize="16px" my="15px">
            <span style={{ fontWeight: "600", fontSize: "18px" }}>Website:</span> <Link href="https://www.sclagro.com" isExternal>www.sclagro.com</Link>
          </Text>
          <HStack my="30px" fontSize="25px" spacing={5}>
            <Link href="https://www.instagram.com" isExternal><FaInstagram /></Link>
            <Link href="https://www.facebook.com" isExternal><FaFacebook /></Link>
            <Link href="https://www.linkedin.com" isExternal><FaLinkedin /></Link>
          </HStack>
        </Box>

        <Box w={{ base: "100%", md: "20%" }} mb={{ base: "20px", md: 0 }}>
          <Text fontFamily="Inter" fontSize="20px" fontWeight="600">LEGAL</Text>
          <VStack align="start" spacing={3}>
            <Link href="#" fontFamily="Inter" fontSize="16px">Terms and Conditions</Link>
            <Link href="#" fontFamily="Inter" fontSize="16px">Disclaimer</Link>
            <Link href="#" fontFamily="Inter" fontSize="16px">FAQs</Link>
            <Link href="#" fontFamily="Inter" fontSize="16px">Privacy Policy</Link>
          </VStack>
        </Box>

        <Box w={{ base: "100%", md: "40%" }}>
          <Text fontFamily="Inter" fontSize="20px" fontWeight="600">COMPANY</Text>
          <VStack align="start" spacing={3}>
            <Link href="#" fontFamily="Inter" fontSize="16px">About Us</Link>
            <Link href="#" fontFamily="Inter" fontSize="16px">Partners</Link>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footers;

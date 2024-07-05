import { Box, Flex, VStack, Text, HStack, Link, Spacer } from '@chakra-ui/react';
import React from 'react';
import "@fontsource/inter";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footers = () => {
  return (
    <Box bg="#597445" color="white" >
      <VStack></VStack>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        px={{ base: "20px", md: "60px" }}
        w="full"
      >
        <Box w={{ base: "100%", md: "40%" }} mb={{ base: "20px", md: 0 }} mt={"30px"}>
          <Text fontFamily="Inter" fontSize="24px" fontWeight="600">
            Manufactured by :
          </Text>

          <Text fontFamily="Inter" fontSize="16px" my="15px">
            Sudarshan Consolidated Private Limited
          </Text>
          <Text fontFamily="Inter" fontSize="16px" my="15px">
            <Box as="span" fontWeight="600" fontSize="18px">Address :</Box>
            <Box as="span" paddingLeft={["0rem", "1.5rem"]}>IGC Samba, Samba Jammu & Kashmir,</Box>
            <Box as="span" display="block" paddingLeft={["0rem", "6.5rem"]} paddingTop="0.5rem">Pincode: 184121</Box>
          </Text>

          <Text fontFamily="Inter" fontSize="16px" my="15px">
            <span style={{ fontWeight: "600", fontSize: "18px" }}>Email : </span>
            <Box as="span" paddingLeft={["0rem", "2.5rem"]}>info@sclagro.com</Box>

          </Text>
          <Text fontFamily="Inter" fontSize="16px" my="15px">
            <span style={{ fontWeight: "600", fontSize: "18px" }}>Website :</span>
            <Box as="span" paddingLeft={["0rem", "1.5rem"]}><Link href="https://www.sclagro.com" isExternal>www.sclagro.com</Link></Box>

          </Text>
          <HStack my="30px" fontSize="25px" spacing={5}>
            <Link href="https://www.instagram.com" isExternal><FaInstagram /></Link>
            <Link href="https://www.facebook.com" isExternal><FaFacebook /></Link>
            <Link href="https://www.linkedin.com" isExternal><FaLinkedin /></Link>
          </HStack>
        </Box>

        <Box w={{ base: "100%", md: "20%" }} mb={{ base: "20px", md: 0 }} mt={"30px"}>
          <Text fontFamily="Inter" fontSize="20px" fontWeight="600">LEGAL</Text>
          <VStack align="start" spacing={3} mt={"15px"}>
            <Link fontFamily="Inter" fontSize="16px">Terms and Conditions</Link>
            <Link fontFamily="Inter" fontSize="16px">Disclaimer</Link>
            <Link fontFamily="Inter" fontSize="16px">FAQs</Link>
            <Link fontFamily="Inter" fontSize="16px">Privacy Policy</Link>
            {/* " fontFamily="Inter" fontSize="16px">Privacy Policy</Link> */}
          </VStack>
        </Box>

        <Box w={{ base: "100%", md: "40%" }} mt={"30px"}>
          <Text fontFamily="Inter" fontSize="20px" fontWeight="600">COMPANY</Text>
          <VStack align="start" spacing={3} mt={"15px"}>
            <Link fontFamily="Inter" fontSize="16px">About Us</Link>
            <Link fontFamily="Inter" fontSize="16px">Partners</Link>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footers;

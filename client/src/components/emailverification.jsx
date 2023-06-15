import { Box, Flex, Center, Image, Input, Button } from "@chakra-ui/react";
import logo from "../assets/images/Instagram_logo.png";
import { Link } from "react-router-dom";

export default function EmailVerification() {
  return (
    <>
      <Center>
        <Flex w={"100vw"} h={"100vh"} maxW={"414px"}>
          <Flex w={"100%"} alignItems={"center"} justifyContent={"center"}>
            <Center flexDir={"column"} gap={"10px"}>
              <Image src={logo} w={"175px"} h={"60px"} />
              <Flex
                flexDir={"column"}
                w={"270px"}
                h={"200px"}
                paddingTop={"24px"}
                // alignItems={"center"}
                gap={"10px"}
              >
                <Flex flexDir={"column"}>
                  <Flex
                    height={"38px"}
                    w={"100%"}
                    color={"CaptionText"}
                    fontSize={"18px"}
                    justifyContent={"center"}
                    paddingBottom={"20px"}
                  >
                    Email Confirmation
                  </Flex>
                  <Flex
                    height={"38px"}
                    w={"100%"}
                    color={"CaptionText"}
                    fontSize={"12px"}
                    textAlign={"center"}
                    paddingBottom={"80px"}
                  >
                    Hallo! you are almost ready to start enjoying our product.
                    Simply click the big button bellow to verify your email
                    address.
                  </Flex>
                </Flex>
                <Button w={"270px"} h={"32px"} bg={"#4cb5f9"} color={"white"}>
                  Verify Email Address
                </Button>
              </Flex>
            </Center>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}

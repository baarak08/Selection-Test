import { Box, Flex, Center, Image, Input, Button } from "@chakra-ui/react";
import logo from "../assets/images/Instagram_logo.png";
import { Link } from "react-router-dom";
import { api } from "../api/api";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  async function forgotPassword() {
    await api
      .get("/auth/generate-token/email", {
        params: {
          email,
        },
      })
      .then((res) => alert(res.data.message));
  }
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
                h={"214px"}
                paddingTop={"24px"}
                alignItems={"center"}
                rowGap={"10px"}
                fontSize={"10px"}
              >
                <Flex height={"38px"} w={"100%"} color={"grey"}>
                  Enter your email and we'll send you a link to get back into
                  your account.
                </Flex>
                <Input
                  w={"270px"}
                  h={"38px"}
                  padding={"0px 10px"}
                  placeholder="Input your email"
                  textAlign={"center"}
                  borderRadius={"5px"}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></Input>
                <Button
                  w={"270px"}
                  h={"32px"}
                  bg={"#4cb5f9"}
                  color={"white"}
                  onClick={forgotPassword}
                >
                  Send Confirmation Link
                </Button>
                <Center
                  w={"270px"}
                  h={"48px"}
                  color={"black"}
                  gap={"20px"}
                  paddingBottom={"12px"}
                  fontSize={"14px"}
                >
                  <Link
                    to="/register"
                    height={"38px"}
                    w={"100%"}
                    paddingTop={"7px"}
                    color={"grey"}
                  >
                    create new account
                  </Link>
                </Center>
              </Flex>
            </Center>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}

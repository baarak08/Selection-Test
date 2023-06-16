import {
  Box,
  Flex,
  Center,
  Image,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import logo from "../assets/images/Instagram_logo.png";
import { Link, useNavigate } from "react-router-dom";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

import { useEffect, useState } from "react";
import { api } from "../api/api";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const arr = [];
  const [added, setAdded] = useState(["lol"]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function inputHandler(input) {
    const { value, id } = input.target;
    const tempobject = { ...user };
    tempobject[id] = value;
    setUser(tempobject);
    console.log(tempobject);
  }

  const login = async () => {
    try {
      let token;
      await api.post("/auth/v1", user).then((res) => {
        localStorage.setItem("auth", JSON.stringify(res.data.token));
        token = res.data.token;
        alert("you are sucessfully logged in");
        navigate("/home");
      });
    } catch (err) {
      return alert("email or password wrong");
    }
  };

  const [seePassword, setSeePassword] = useState(false);

  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    console.log("ada ketikan baru");
  }, [account.password]);
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
                h={"260px"}
                paddingTop={"24px"}
                alignItems={"center"}
                rowGap={"10px"}
              >
                <Flex flexDir={"column "}>
                  <Input
                    id="email"
                    w={"270px"}
                    h={"38px"}
                    padding={"0px 10px"}
                    placeholder="Email"
                    borderRadius={"5px"}
                    onChange={inputHandler}
                  />
                </Flex>

                <Flex flexDir={"column"}>
                  <InputGroup>
                    <Input
                      id="password"
                      type={seePassword ? "text" : "password"}
                      w={"270px"}
                      h={"38px"}
                      padding={"0px 10px"}
                      placeholder="Password"
                      borderRadius={"5px"}
                      onChange={inputHandler}
                    ></Input>
                    <InputRightElement height={"38px"} paddingRight={"5px"}>
                      <Icon
                        color={"grey"}
                        as={seePassword ? AiOutlineEye : AiOutlineEyeInvisible}
                        W="24px"
                        h="24px"
                        cursor={"pointer"}
                        _hover={{ color: "black" }}
                        onClick={() => setSeePassword(!seePassword)}
                      ></Icon>
                    </InputRightElement>
                  </InputGroup>
                </Flex>
                <Button
                  w={"270px"}
                  h={"32px"}
                  bg={"#4cb5f9"}
                  color={"white"}
                  onClick={login}
                >
                  Log in
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
                    don't have account?
                  </Link>
                  <Link
                    to="/forgot-password"
                    height={"38px"}
                    w={"100%"}
                    paddingTop={"7px"}
                    color={"grey"}
                  >
                    forget account?
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

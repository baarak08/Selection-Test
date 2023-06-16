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
import { useDispatch } from "react-redux";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { TbAlertCircleFilled } from "react-icons/tb";

import * as Yup from "yup";
import { useFormik } from "formik";
import YupPassword from "yup-password";
import { useEffect, useState } from "react";
import { api } from "../api/api";

export default function Register() {
  YupPassword(Yup);
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      userName: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("you need to enter your email.")
        .email(
          "this email is invalid, make sure it's written like example@email.com"
        ),
      fullName: Yup.string().required("enter your full name."),
      userName: Yup.string()
        .required("you need to enter your username.")
        .matches(/^[A-Za-z0-9_.]+$/, {
          message:
            "this username is invalid, make sure there is no space, or any symbols except '.' and '_'",
        }),

      password: Yup.string()
        .required("you need to enter a password")
        .min(8, "your password is too short")
        .minLowercase(1, "atleast there is one lowercase")
        .minUppercase(1, "atleast there is one uppercase")
        .minNumbers(1, "atleast there is one number")
        .minSymbols(1, "atleast there is one symbol"),
    }),

    onSubmit: async () => {
      const { fullname, userName, email, password } = formik.values;
      const user = { fullname, userName, email, password };

      console.log(`ini ${formik.values}`);

      const checkUsername = await api
        .get("/auth/username", {
          params: { userName: userName },
        })
        .then((result) => {
          console.log(`ini result ${result}`);
          if (result.data.length) {
            return true;
          } else {
            return false;
          }
        });
      const checkEmail = await api
        .get("/auth/email", {
          params: { email: email },
        })
        .then((result) => {
          console.log(result);
          if (result.data.length) {
            return true;
          } else {
            return false;
          }
        });
      console.log(checkUsername);
      if (checkUsername || checkEmail) {
        return alert("email or username already exist");
      } else {
        await api.post("/auth/", user).then((res) => {
          alert("account successfully created");
          nav("/login");
        });
      }
    },
  });
  function inputHandler(event) {
    const { value, id } = event.target;
    console.log({ id, value });
    formik.setFieldValue(id, value);
  }

  const nav = useNavigate();
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
                h={"420px"}
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
                  ></Input>
                  <Flex
                    color={"#d41b2d"}
                    fontWeight={"light"}
                    fontSize={"10px"}
                    display={formik.errors.email ? "flex" : "none"}
                  >
                    <Center>
                      <Icon as={TbAlertCircleFilled} w={"10px"} h={"10px"} />
                    </Center>
                    {formik.errors.email}
                  </Flex>
                </Flex>

                <Flex flexDir={"column"}>
                  <Input
                    id="fullName"
                    w={"270px"}
                    h={"38px"}
                    padding={"0px 10px"}
                    placeholder="Full Name"
                    borderRadius={"5px"}
                    onChange={inputHandler}
                  ></Input>
                  <Flex
                    color={"#d41b2d"}
                    fontWeight={"light"}
                    fontSize={"10px"}
                    display={formik.errors.fullName ? "flex" : "none"}
                  >
                    <Center>
                      <Icon as={TbAlertCircleFilled} w={"10px"} h={"10px"} />
                    </Center>
                    {formik.errors.fullName}
                  </Flex>
                </Flex>

                <Flex flexDir={"column"}>
                  <Input
                    id="userName"
                    w={"270px"}
                    h={"38px"}
                    padding={"0px 10px"}
                    placeholder="Username"
                    borderRadius={"5px"}
                    onChange={inputHandler}
                  ></Input>
                  <Flex
                    color={"#d41b2d"}
                    fontWeight={"light"}
                    fontSize={"10px"}
                    display={formik.errors.userName ? "flex" : "none"}
                  >
                    <Center>
                      <Icon as={TbAlertCircleFilled} w={"10px"} h={"10px"} />
                    </Center>
                    {formik.errors.userName}
                  </Flex>
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
                        w="24px"
                        h="24px"
                        cursor={"pointer"}
                        _hover={{ color: "black" }}
                        onClick={() => setSeePassword(!seePassword)}
                      ></Icon>
                    </InputRightElement>
                  </InputGroup>
                  {account.password.length < 8 ? (
                    <Flex
                      color={"#d41b2d"}
                      fontWeight={"light"}
                      fontSize={"10px"}
                      display={formik.errors.password ? "flex" : "none"}
                    >
                      <Center>
                        <Icon as={TbAlertCircleFilled} w={"10px"} h={"10px"} />
                      </Center>
                      {formik.errors.password}
                    </Flex>
                  ) : null}
                </Flex>

                <Center
                  flexDir={"column"}
                  w={"270px"}
                  h={"80px"}
                  color={"black"}
                  paddingBottom={"12px"}
                  fontSize={"10px"}
                >
                  <Flex
                    height={"38px"}
                    w={"100%"}
                    paddingTop={"7px"}
                    color={"grey"}
                  >
                    People who use our service may have uploaded your contact
                    information to Instagram.
                  </Flex>
                  <Flex
                    height={"38px"}
                    w={"100%"}
                    paddingTop={"7px"}
                    color={"grey"}
                  >
                    By signing up, you agree to our Terms , Privacy Policy and
                    Cookies Policy .
                  </Flex>
                </Center>
                <Button
                  w={"270px"}
                  h={"32px"}
                  bg={"#4cb5f9"}
                  color={"white"}
                  onClick={formik.handleSubmit}
                >
                  Sign Up
                </Button>
                <Center
                  flexDir={"column"}
                  w={"270px"}
                  h={"80px"}
                  color={"grey"}
                  fontSize={"10px"}
                >
                  <Link to="/login" height={"38px"} w={"100%"} color={"grey"}>
                    log-in ?
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

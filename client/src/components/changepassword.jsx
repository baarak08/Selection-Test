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
import { Link } from "react-router-dom";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { TbAlertCircleFilled } from "react-icons/tb";

import * as Yup from "yup";
import { useFormik } from "formik";
import YupPassword from "yup-password";
import { useEffect, useState } from "react";

export default function ChangePassword() {
  YupPassword(Yup);
  const formik = useFormik({
    initialValues: {
      password: "",
      password2: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .required("you need to enter a password")
        .min(8, "your password is too short")
        .minLowercase(1, "atleast there is one lowercase")
        .minUppercase(1, "atleast there is one uppercase")
        .minNumbers(1, "atleast there is one number")
        .minSymbols(1, "atleast there is one symbol"),
      password2: Yup.string()
        .required("you need to confirm your password.")
        .oneOf(
          [Yup.ref("password"), null],
          "the password you typed don't match."
        ),
    }),

    onSubmit: async () => {
      // console.log(formik.values);
      const { password } = formik.values;
      const account = { password };
      //   account.birthdate = new Date(year, month, day);

      // const checkEmail = await axios
      //   .get("http://localhost:2000/user", {
      //     params: { email: account.email },
      //   })
      //   .then((res) => {
      //     if (res.data.length) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   });

      // if (checkEmail) {
      //   return alert("email already used");
      // } else {
      //   await axios.post("http://localhost:2000/user", account).then((res) => {
      //     nav("/login");
      //   });
      // }
      // console.log(account);
    },
  });

  function inputHandler(event) {
    const { value, id } = event.target;
    formik.setFieldValue(id, value);
    console.log(value);
  }

  const [seePassword, setSeePassword] = useState(false);
  const [seePassword2, setSeePassword2] = useState(false);

  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    console.log("ada ketikan baru");
  }, [account.password]);

  const [account2, setAccount2] = useState({
    email: "",
    password2: "",
  });
  useEffect(() => {
    console.log("ada ketikan baru");
  }, [account2.password2]);

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
                h={"280px"}
                paddingTop={"24px"}
                alignItems={"center"}
                rowGap={"10px"}
                fontSize={"10px"}
              >
                <Flex flexDir={"column"}>
                  <InputGroup>
                    <Input
                      id="password"
                      type={seePassword ? "text" : "password"}
                      w={"270px"}
                      h={"38px"}
                      padding={"0px 10px"}
                      placeholder="Type your new password"
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

                <Flex flexDir={"column"}>
                  <InputGroup>
                    <Input
                      id="password2"
                      type={seePassword2 ? "text" : "password"}
                      w={"270px"}
                      h={"38px"}
                      padding={"0px 10px"}
                      placeholder="Confirm your password"
                      borderRadius={"5px"}
                      onChange={inputHandler}
                    ></Input>
                    <InputRightElement height={"38px"} paddingRight={"5px"}>
                      <Icon
                        color={"grey"}
                        as={seePassword2 ? AiOutlineEye : AiOutlineEyeInvisible}
                        W="24px"
                        h="24px"
                        cursor={"pointer"}
                        _hover={{ color: "black" }}
                        onClick={() => setSeePassword2(!seePassword2)}
                      ></Icon>
                    </InputRightElement>
                  </InputGroup>
                  {account.password.length < 8 ? (
                    <Flex
                      color={"#d41b2d"}
                      fontWeight={"light"}
                      fontSize={"10px"}
                      display={formik.errors.password2 ? "flex" : "none"}
                    >
                      <Center>
                        <Icon as={TbAlertCircleFilled} w={"10px"} h={"10px"} />
                      </Center>
                      {formik.errors.password2}
                    </Flex>
                  ) : null}
                </Flex>
                <Button w={"270px"} h={"32px"} bg={"#4cb5f9"} color={"white"}>
                  Create New Password
                </Button>
              </Flex>
            </Center>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}

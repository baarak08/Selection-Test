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

export default function Register() {
  YupPassword(Yup);
  const formik = useFormik({
    initialValues: {
      usernameOrEmail: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      usernameOrEmail: Yup.string()
        .required("You need to enter your username or email.")
        .test("usernameOrEmail", "Invalid username or email", function (value) {
          // Validasi jika value adalah email
          if (Yup.string().email().isValidSync(value)) {
            return true;
          }
          // Validasi jika value adalah username
          return /^[A-Za-z0-9_.]+$/.test(value);
        }),
      password: Yup.string()
        .required("You need to enter a password.")
        .min(8, "Your password is too short."),
    }),

    onSubmit: async () => {
      // console.log(formik.values);
      const { email, fullName, userName, password } = formik.values;
      const account = { email, fullName, userName, password };
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
                    id="usernameOrEmail"
                    w={"270px"}
                    h={"38px"}
                    padding={"0px 10px"}
                    placeholder="Username or Email"
                    borderRadius={"5px"}
                    onChange={inputHandler}
                  />
                  <Flex
                    color={"#d41b2d"}
                    fontWeight={"light"}
                    fontSize={"10px"}
                    display={formik.errors.usernameOrEmail ? "flex" : "none"}
                  >
                    <Center>
                      <Icon as={TbAlertCircleFilled} w={"10px"} h={"10px"} />
                    </Center>
                    {formik.errors.usernameOrEmail}
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
                <Button w={"270px"} h={"32px"} bg={"#4cb5f9"} color={"white"}>
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
                    height={"38px"}
                    w={"100%"}
                    paddingTop={"7px"}
                    color={"grey"}
                  >
                    don't have account?
                  </Link>
                  <Link
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

import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Center,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Avatar,
} from "@chakra-ui/react";
import iconphoto from "../assets/images/iconPemandangan.png";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { TbAlertCircleFilled } from "react-icons/tb";

import * as Yup from "yup";
import { useFormik } from "formik";
import YupPassword from "yup-password";
import { useEffect, useState } from "react";

export function EditProfile(props) {
  YupPassword(Yup);
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      userName: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email(
        "this email is invalid, make sure it's written like example@email.com"
      ),
      fullName: Yup.string(),
      userName: Yup.string().matches(/^[A-Za-z0-9_.]+$/, {
        message:
          "this username is invalid, make sure there is no space, or any symbols except '.' and '_'",
      }),

      password: Yup.string()
        .min(8, "your password is too short")
        .minLowercase(1, "atleast there is one lowercase")
        .minUppercase(1, "atleast there is one lowercase")
        .minNumbers(1, "atleast there is one number")
        .minSymbols(1, "atleast there is one symbol"),
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
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              flexDir={"column"}
              alignItems={"center"}
              h={"420px"}
              paddingTop={"24px"}
              rowGap={"10px"}
            >
              <Avatar w={"88px"} h={"88px"} />
              <Flex flexDir={"column"} paddingTop={"20px"}>
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
                    placeholder="Current Password"
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
                    placeholder="New Password"
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
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent={"center"}>
            <Button variant="ghost" colorScheme="green" onClick={props.onClose}>
              save
            </Button>
            <Button variant="ghost" colorScheme="red" onClick={props.onClose}>
              close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

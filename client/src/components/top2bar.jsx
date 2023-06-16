import {
  Box,
  Flex,
  Center,
  Image,
  Input,
  Button,
  Icon,
  Avatar,
} from "@chakra-ui/react";
import logo from "../assets/images/Instagram_logo.png";
import { AiOutlineSetting } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

import "../css/instagram.css";

export default function TopBar2() {
  return (
    <>
      <Flex justifyContent={"center"}>
        <Flex
          maxW={"100vw"}
          w={"470px"}
          h={"60px"}
          paddingTop={"5px"}
          paddingLeft={"22px"}
          paddingRight={"13px"}
          // borderBottom={"1px"}
          justifyContent={"space-between"}
          position={"fixed"}
          zIndex={"3"}
          bgColor={"white"}
        >
          <Flex className="flexSideBar">
            <Icon
              as={FiSearch}
              height="24px"
              width={"24px"}
              display={"none"}
            ></Icon>
          </Flex>
          <Flex id="logoInstagram">
            <img src={logo} className="logo" alt="" />
          </Flex>
          <Flex className="flexSideBar">
            <Icon as={AiOutlineSetting} height="24px" width={"24px"}></Icon>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

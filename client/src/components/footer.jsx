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
import { AiOutlineHome } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";

import "../css/instagram.css";

export default function FooterBar() {
  return (
    <>
      <Center>
        <Flex
          flexDir={"row"}
          id="sidebar"
          justifyContent={"space-around"}
          position={"fixed"}
          bottom={"0"}
          zIndex={"3"}
          width={"470px"}
          bgColor={"white"}
        >
          <Flex className="flexSideBar">
            <Icon as={AiOutlineHome} height="24px" width="24px"></Icon>
          </Flex>
          <Flex className="flexSideBar">
            <Icon as={FiPlusSquare} height="24px" width={"24px"}></Icon>
          </Flex>
          <Flex className="flexSideBar">
            <Avatar height="24px" width={"24px"}></Avatar>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}

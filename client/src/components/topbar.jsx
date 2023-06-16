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
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { BsCameraReels } from "react-icons/bs";
import { MdExplore } from "react-icons/md";
import { TbMessageCircle2 } from "react-icons/tb";
import { FcLikePlaceholder } from "react-icons/fc";
import { FiPlusSquare } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

import "../css/instagram.css";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const navigate = useNavigate();
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
          justifyContent={"space-between"}
          position={"fixed"}
          zIndex={"3"}
          bgColor={"white"}
        >
          <Flex id="logoInstagram">
            <img src={logo} className="logo" alt="" />
          </Flex>
          <Flex
            className="flexSideBar"
            cursor={"pointer"}
            onClick={() => navigate("/home")}
          >
            <Icon as={FiSearch} height="24px" width={"24px"}></Icon>
            {/* <Icon as={FiPlusSquare} height="24px" width={"24px"}></Icon> */}
            {/* <Icon as={FcLikePlaceholder} height="24px" width={"24px"}></Icon> */}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

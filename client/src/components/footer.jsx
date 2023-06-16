import {
  Box,
  Flex,
  Center,
  Image,
  Input,
  Button,
  Icon,
  Avatar,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../assets/images/Instagram_logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";

import "../css/instagram.css";
import { useState } from "react";
import { CreatePost } from "./createmodal";
import { useNavigate } from "react-router-dom";

export default function FooterBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [createPost, setCreatePost] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <Flex justifyContent={"center"}>
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
          <Flex
            className="flexSideBar"
            cursor={"pointer"}
            onClick={() => navigate("/home")}
          >
            <Icon as={AiOutlineHome} height="24px" width="24px"></Icon>
          </Flex>
          <Flex cursor={"pointer"} className="flexSideBar" onClick={onOpen}>
            {<Icon as={FiPlusSquare} height="24px" width={"24px"} />}
            <CreatePost id={createPost} isOpen={isOpen} onClose={onClose} />
          </Flex>
          <Flex
            cursor={"pointer"}
            className="flexSideBar"
            onClick={() => navigate("/profile")}
          >
            <Avatar height="24px" width={"24px"} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

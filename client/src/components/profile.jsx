import {
  Box,
  Flex,
  Center,
  Image,
  Input,
  Button,
  Avatar,
  Icon,
  Grid,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../assets/images/Instagram_logo.png";
import { BsGrid3X3 } from "react-icons/bs";
import { CgDisplayFullwidth } from "react-icons/cg";
import { BsPlayBtn } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { FaUserTag } from "react-icons/fa";

import "../css/instagram.css";
import { CreatePost } from "./createmodal";
import { useState } from "react";
import { EditProfile } from "./editprofilemodal";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Profile() {
  const data = [
    {
      url: "https://th.bing.com/th/id/OIP.4wKHoJyGsV9478Q8pzN17gHaFj?w=274&h=206&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      url: "https://th.bing.com/th/id/OIP.76wFnHe-5Vy2Ko2B987JugHaFb?w=272&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      url: "https://th.bing.com/th?id=OIP.zJ1pB1J-UuEOQ4lq0aqwrgHaFd&w=290&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    },
    {
      url: "https://asset.kompas.com/crops/W4P3no-vmu-9GnsCWwybHDufncM=/120x34:4222x2768/750x500/data/photo/2021/04/18/607ba95f8d6f7.jpg",
    },
    {
      url: "https://th.bing.com/th/id/OIP.4wKHoJyGsV9478Q8pzN17gHaFj?w=274&h=206&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      url: "https://th.bing.com/th/id/OIP.4wKHoJyGsV9478Q8pzN17gHaFj?w=274&h=206&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      url: "https://th.bing.com/th/id/OIP.76wFnHe-5Vy2Ko2B987JugHaFb?w=272&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      url: "https://th.bing.com/th?id=OIP.zJ1pB1J-UuEOQ4lq0aqwrgHaFd&w=290&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    },
    {
      url: "https://asset.kompas.com/crops/W4P3no-vmu-9GnsCWwybHDufncM=/120x34:4222x2768/750x500/data/photo/2021/04/18/607ba95f8d6f7.jpg",
    },
    {
      url: "https://th.bing.com/th/id/OIP.4wKHoJyGsV9478Q8pzN17gHaFj?w=274&h=206&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      url: "https://th.bing.com/th/id/OIP.4wKHoJyGsV9478Q8pzN17gHaFj?w=274&h=206&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editProfile, setEditProfile] = useState(null);

  const userSelector = useSelector((state) => state.auth);
  useEffect(() => {}, [userSelector]);

  console.log(`ini userSelector ${userSelector}`);

  return (
    <>
      <Flex justifyContent={"center"}>
        <Flex maxW={"470px"} w={"100%"} h={"800px"} flexDir={"column"}>
          <Flex gap={"10px"} width={"100%"} paddingLeft={"10px"}>
            <Avatar w={"77px"} h={"77px"}></Avatar>
            <Flex
              flexDir={"column"}
              fontSize={"20px"}
              fontWeight={"600"}
              gap={"10px"}
              width={"100%"}
              paddingLeft={"20px"}
            >
              <Flex>userName</Flex>
              <Button h={"32px"} w={"250px"} onClick={onOpen}>
                <>edit profile</>
                <EditProfile
                  id={editProfile}
                  isOpen={isOpen}
                  onClose={onClose}
                />
              </Button>
            </Flex>
          </Flex>
          <Flex
            flexDir={"column"}
            maxH={"80px"}
            paddingLeft={"10px"}
            paddingTop={"20px"}
            paddingBottom={"20px"}
            fontSize={"14px"}
          >
            <Flex>fullName</Flex>
            <Flex>bio</Flex>
          </Flex>
          <Flex
            maxH={"80px"}
            borderTop={"1px"}
            borderBottom={"1px"}
            borderColor={"gray"}
            justifyContent={"space-around"}
            paddingTop={"5px"}
            paddingBottom={"5px"}
            fontSize={"14px"}
          >
            <Flex flexDir={"column"}>
              <Flex justifyContent={"center"}>11</Flex>
              <Flex>posts</Flex>
            </Flex>
            <Flex flexDir={"column"}>
              <Flex justifyContent={"center"}>11</Flex>
              <Flex>followers</Flex>
            </Flex>
            <Flex flexDir={"column"}>
              <Flex justifyContent={"center"}>11</Flex>
              <Flex>following</Flex>
            </Flex>
          </Flex>
          <Flex
            maxH={"80px"}
            bgColor={"white"}
            justifyContent={"space-around"}
            paddingTop={"5px"}
            paddingBottom={"5px"}
            fontSize={"14px"}
          >
            <Flex className="flexSideBar">
              <Icon
                className="iconProfile"
                as={BsGrid3X3}
                height="24px"
                width="24px"
                color={"blackAlpha.700"}
              ></Icon>
            </Flex>
            <Flex className="flexSideBar">
              <Icon
                className="iconProfile"
                as={CgDisplayFullwidth}
                height="24px"
                width={"24px"}
                color={"blackAlpha.700"}
              ></Icon>
            </Flex>
            <Flex className="flexSideBar">
              <Icon
                className="iconProfile"
                as={BsPlayBtn}
                height="24px"
                width={"24px"}
                color={"blackAlpha.700"}
              ></Icon>
            </Flex>
            <Flex className="flexSideBar">
              <Icon
                className="iconProfile"
                as={BiBookmark}
                height="24px"
                width={"24px"}
                color={"blackAlpha.700"}
              ></Icon>
            </Flex>
            <Flex className="flexSideBar">
              <Icon
                className="iconProfile"
                as={FaUserTag}
                height="24px"
                width={"24px"}
                color={"blackAlpha.700"}
              ></Icon>
            </Flex>
          </Flex>
          <Grid
            templateColumns="repeat(3, 1fr)" // Mengatur 3 kolom dengan lebar yang sama
            gap={0.2}
            paddingLeft={0.2}
            paddingRight={0.2}
          >
            {data.map((val) => (
              <Card url={val.url} key={val.url} />
            ))}
          </Grid>
          <Flex
            flexDir={"row"}
            id="sidebar"
            justifyContent={"space-around"}
            bottom={"0"}
            bgColor={"Background"}
            height={"30px"}
          >
            <Flex className="flexSideBar">
              <Icon
                color={"Background"}
                as={BsGrid3X3}
                height="5px"
                width="470px"
              ></Icon>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

function Card(props) {
  return (
    <>
      <Flex className="card" aspectRatio={1}>
        <Image src={props.url} width="100%" height="100%" />
      </Flex>
    </>
  );
}

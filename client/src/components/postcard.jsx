import {
  Box,
  Flex,
  Center,
  Image,
  Input,
  Button,
  Avatar,
  Icon,
} from "@chakra-ui/react";
import logo from "../assets/images/Instagram_logo.png";
import { SlOptions } from "react-icons/sl";
import { FcLikePlaceholder } from "react-icons/fc";
import { SlPaperPlane } from "react-icons/sl";
import { TbMessageCircle2 } from "react-icons/tb";
import { BiBookmark } from "react-icons/bi";

export default function PostCard() {
  const data = [
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
  ];

  return (
    <>
      <Flex justifyContent={"center"}>
        <Flex maxW={"470px"} w={"100%"} h={"800px"} flexDir={"column"}>
          <Center
            w={"100%"}
            h={"60px"}
            padding={"14px"}
            justifyContent={"space-between"}
          >
            <Flex gap={"10px"}>
              <Avatar w={"32px"} h={"32px"}></Avatar>
              <Flex fontSize={"14px"} fontWeight={"600"} alignItems={"center"}>
                baarak08
              </Flex>
            </Flex>
            <Center w={"40px"} h={"40px"}>
              <Icon as={SlOptions} w={"16px"} h={"16px"} />
            </Center>
          </Center>
          <Box maxW={"470px"} w={"100%"} maxH={"565px"} h={"100%"}>
            <Image
              src="https://e1.pxfuel.com/desktop-wallpaper/892/148/desktop-wallpaper-instagram-lowkezmedia-for-daily-porsche-rwb-phone.jpg"
              w={"100%"}
              h={"100%"}
            />
          </Box>
          <Flex
            w={"100%"}
            h={"183px"}
            padding={"5px 16px"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Flex w={"105%"} h={"54px"} justifyContent={"space-between"}>
              <Center>
                <Center w={"40px"} h={"40px"}>
                  <Icon as={FcLikePlaceholder} w={"30px"} h={"30px"} />
                </Center>
                <Center w={"40px"} h={"40px"}>
                  <Icon
                    as={TbMessageCircle2}
                    transform="scaleX(-1)"
                    w={"24px"}
                    h={"24px"}
                  />
                </Center>
                <Center w={"40px"} h={"40px"}>
                  <Icon as={SlPaperPlane} w={"24px"} h={"24px"} />
                </Center>
              </Center>
              <Center>
                <Center w={"40px"} h={"40px"}>
                  <Icon as={BiBookmark} w={"30px"} h={"30px"} />
                </Center>
              </Center>
            </Flex>
            <Flex w={"100%"} h={"18px"} fontSize={"14px"} fontWeight={"500"}>
              147 likes
            </Flex>
            <Flex fontSize={"14px"} gap={"5px"} paddingTop={"10px"} w={"100%"}>
              <Box fontWeight={"500"}>baarak08</Box>
              <Box>Porsche 911 RWB</Box>
            </Flex>
            <Flex
              w={"100%"}
              fontSize={"14px"}
              paddingTop={"5px"}
              color={"grey"}
            >
              View all 12 comments
            </Flex>
            <Flex w={"100%"} h={"11px"} fontSize={"12px"} gap={"10px"}>
              <Box color={"grey"}>1 HOURS AGO</Box>
              <Box> See translation</Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

function Card() {
  return (
    <>
      <Flex>test</Flex>
    </>
  );
}

import { Box } from "@chakra-ui/react";
import FooterBar from "../components/footer";
import PostCard from "../components/postcard";
import TopBar from "../components/topbar";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Box paddingTop={"60px"} paddingBottom={"30px"}>
        <PostCard />
        <PostCard />
      </Box>
      <FooterBar />
    </>
  );
}

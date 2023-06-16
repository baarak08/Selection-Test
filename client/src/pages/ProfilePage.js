import { Box } from "@chakra-ui/react";
import FooterBar from "../components/footer";
import Profile from "../components/profile";
import TopBar2 from "../components/top2bar";

export default function ProfilePage() {
  return (
    <>
      <>
        <TopBar2 />
        <Box paddingTop={"60px"} paddingBottom={"30px"}>
          <Profile />
        </Box>
        <FooterBar />
      </>
    </>
  );
}

import Head from "next/head";
import { Box, Grid, Text } from "@chakra-ui/react";
import { SideBar } from "../src/components/SideBar";
import { VideoSection } from "../src/components/VideoSection";
import { Apresentation } from "../src/components/Apresentation";
import { useApplicationContext } from "../src/contexts/ApplicationContext";
import { NavBar } from "components/NavBar";
import { Footer } from "components/Footer";

export default function Home() {
  const { isMobile } = useApplicationContext();
  return (
    <>
      <Head>
        <title>Ezequias Rocha</title>
        <meta name="description" content="Ezequias Rocha Portifólio" />
      </Head>
      <Grid gridTemplateColumns={{ base: "auto", md: "80px auto" }} w="100%">
        <SideBar display={{ base: "none", md: "flex" }} />

        <Box>
          <VideoSection>
            <Apresentation />
            <NavBar />
          </VideoSection>
          <Box w="100%" h="1500px" backgroundColor="white"></Box>
          <Footer />
        </Box>
      </Grid>
    </>
  );
}

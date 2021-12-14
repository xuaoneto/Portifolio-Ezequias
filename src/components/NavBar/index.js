import React from "react";
import { Box, Grid, HStack, Text, Link, Flex } from "@chakra-ui/react";
import { NavBarItemsArray } from "./navBarItemsArray";
import { NavBarItem } from "./NavBarItem";
import { ScrollDown } from "components/UI/icons/ScrollDown";

export function NavBar() {
  const container = React.useRef();
  React.useEffect(() => {
    if (container.current !== null) {
      const fixedTopPosition = container.current.offsetTop;
      window.addEventListener("scroll", (event) => {
        if (document.documentElement.scrollTop >= fixedTopPosition) {
          container.current.style.position = "fixed";
        } else {
          container.current.style.position = "static";
        }
      });
    }
  }, []);
  return (
    <Box
      marginTop="0 !important"
      top="0"
      ref={container}
      backgroundColor="#2c2d32"
      width="calc(100% - 80px)"
      h="80px"
      marginLeft="80px !important"
    >
      <Grid color="white" templateColumns="17% 66% 17%" w="100%" h="100%">
        <Flex
          w="100%"
          h="100%"
          backgroundColor="rgba(255, 255, 255, 0.031 )"
          borderRight="2px solid rgba(255, 255, 255, 0.2 )"
          alignItems="center"
          justifyContent="center"
        >
          <ScrollDown />
        </Flex>
        <HStack justifyContent="space-evenly">
          {NavBarItemsArray.map((item, index) => {
            return <NavBarItem item={item} />;
          })}
        </HStack>
        <Box
          w="100%"
          h="100%"
          backgroundColor="rgba(255, 255, 255, 0.031 )"
          borderLeft="2px solid rgba(255, 255, 255, 0.2 )"
        ></Box>
      </Grid>
    </Box>
  );
}

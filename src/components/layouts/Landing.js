import React from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import Header from "../sections/Header";
// import Footer from "../sections/Footer"
import DarkMode from "../../components/DarkMode";

function LandingLayout(props) {
  return (
    <Flex direction="right" m="0 auto" {...props}>
      <Box>
        <Header />
        {props.children}
      </Box>
    </Flex>
  );
}

export default LandingLayout;

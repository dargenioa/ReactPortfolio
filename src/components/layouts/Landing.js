import React from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import DarkMode from "../../components/DarkMode";

function LandingLayout(props) {
  return (
    <div>
      <Flex direction="right" m="0 auto" {...props}>
        {props.children}
      </Flex>
    </div>
  );
}

export default LandingLayout;

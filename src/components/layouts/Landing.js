import React from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";


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

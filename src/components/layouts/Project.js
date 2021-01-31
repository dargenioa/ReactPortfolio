import React, { useDisclosure } from "react";
import {
  SimpleGrid,
  Box,
  Image,
  Container,
  Flex,
  Button,
  ScaleFade,
} from "@chakra-ui/react";

//   * Project title

//   * Link to the deployed version

//   * Link to the GitHub repository

//   * GIF or screenshot of the deployed application

function Project(props) {

  return (
    <SimpleGrid columns={2} spacing={10} minChildWidth="120px">
      <Box boxSize="md">
        <Image src={props.image}></Image>
        {props.title}
        {props.deploy}
        {props.github}
      </Box>
    </SimpleGrid>
  );
}

export default Project;

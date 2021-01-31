import React, { useDisclosure } from "react";
import {
  SimpleGrid,
  Box,
  Image,
  Container,
  Flex,
  Button,
  ScaleFade,
  Text,
  Center,
  Link
} from "@chakra-ui/react";

//   * Project title

//   * Link to the deployed version

//   * Link to the GitHub repository

//   * GIF or screenshot of the deployed application

function Project(props) {
  return (

      <Box
        boxShadow="dark-lg"
        rounded="md"
        bg="white"
        boxSize="sm"
        height="300px"
      >
        <Image
        src={props.image}
        />
        <Center>
          
        </Center>
        <Text
        align="center"
        color="gray.800">
        {props.title}
        </Text>
        <Link
        color="gray.800"
        href={props.deploy}></Link>
        <Link
        color="gray.800"
        href={props.github}>
        </Link>
      </Box>
  );
}

export default Project;

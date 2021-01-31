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
  Link,
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
      boxSize="xsm"
      height="305px"
      m={2}
    >
      <Text align="center" fontWeight="bold" color="gray.800" p={1}>
        {props.title}
      </Text>
      <Image src={props.image} />
      <Text align="center" color="gray.800">
        <Link target="blank" href={props.deploy} align="center">
          Deployed Application
        </Link>
      </Text>
      <Text color="gray.800" align="center">
        <Link target="blank" href={props.github}>
          Github Repository
        </Link>
      </Text>
    </Box>
  );
}

export default Project;

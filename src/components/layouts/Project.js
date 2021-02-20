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

function Project({project}) {
  return (
    <Box
      boxShadow="dark-lg"
      rounded="md"
      bg="white"
      boxSize="xsm"
      height="330px"
      m={2}
    >
      <Text align="center" fontWeight="bold" color="gray.800" p={1}>
        {project.title}
      </Text>
      <Image
      src={project.image} />
      <Text align="center" color="gray.800">
        <Link target="blank" href={project.deploy} align="center">
          Deployed Application
        </Link>
      </Text>
      <Text color="gray.800" align="center">
        <Link target="blank" href={project.github}>
          Github Repository
        </Link>
      </Text>
    </Box>
  );
}

export default Project;

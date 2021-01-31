import {
  Heading,
  Text,
  Stack,
  Center,
  Image,
  Box,
  Spacer,
  Container,
} from "@chakra-ui/react";
import LandingLayout from "../components/layouts/Landing";
import TextLoop from "react-text-loop";

function Home() {
  return (
    <div>
      <LandingLayout />
      <Stack
        bgGradient="linear(to-l, gray.700 ,black)"
        bgPosition="cover"
        bgRepeat="no-repeat"
        h="600px"
        color="white"
        p={50}
      >
        <Heading
          as="h1"
          fontSize="58px"
          align="center"
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
        >
          Amanda D'Argenio
        </Heading>
        <Heading
          bgGradient="linear(to-l ,#FF0080, #7928CA)"
          bgClip="text"
          size="xl"
          pt={10}
          align="center"
        >
          Full Stack Developer
        </Heading>
        <Center p={5}>
          <TextLoop interval={2000}>
            <Heading as="h6" size="md">
              Problem Solver
            </Heading>
            <Heading as="h6" size="md">
              Motivated by Challening Projects
            </Heading>
            <Heading as="h6" size="md">
              Great Listener
            </Heading>
            <Heading as="h6" size="md">
              Team Collaborator
            </Heading>
            <Heading as="h6" size="md">
              Effective Communicator
            </Heading>
            <Heading as="h6" size="md">
              Adaptability
            </Heading>
          </TextLoop>
        </Center>
      </Stack>
    </div>
  );
}

export default Home;

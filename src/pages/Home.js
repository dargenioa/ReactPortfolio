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
      <Stack
        bgImage="url('https://res.cloudinary.com/dusgzehfe/image/upload/o_90/v1613872740/purple-cyber-hexagon-circuit-future-technology-concept-background_42077-4614_uatsbd.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        z-index={-1}
        h="100vh"
        p={50}
        color="white"
      >
        <Heading
          as="h1"
          fontSize="58px"
          align="center"
        >
          Amanda D'Argenio
        </Heading>
        <Heading
          bgGradient="linear(to-l ,white, gray.300)"
          bgClip="text"
          size="xl"
          pt={10}
          align="center"
        >
          Full Stack Developer
        </Heading>
        <Center p={5}>
          <TextLoop interval={2500}>
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

import { Heading, Text, Stack, Center, Image, Box } from "@chakra-ui/react";
import LandingLayout from "../components/layouts/Landing";
import TextLoop from "react-text-loop";
import Footer from "../components/sections/Footer";

function Home() {
  return (
    <div>
      <LandingLayout />
      <Stack
        bgImage="url(https://res.cloudinary.com/dusgzehfe/image/upload/v1611950774/portfolio-background_g9lw6j.jpg)"
        bgPosition="cover"
        bgRepeat="no-repeat"
        h="1000px"
        color="white"
        p={50}
      >
        <Heading as="h1" fontSize="58px" align="center">
          Amanda D'Argenio
        </Heading>
        <Heading size="xl" pt={10} align="center">
          Full Stack Developer
        </Heading>
        <Center p={5}>
          <TextLoop interval={2000}>
            <Heading as="h6" size="md">Problem Solver</Heading>
            <Heading as="h6" size="md">Motivated by Challening Projects</Heading>
            <Heading as="h6" size="md">Great Listener</Heading>
            <Heading as="h6" size="md">Team Collaborator</Heading>
            <Heading as="h6" size="md">Effective Communicator</Heading>
            <Heading as="h6" size="md">Adaptability</Heading>
          </TextLoop>
        </Center>
        <Center>
        <Footer />
        </Center>
      </Stack>
    </div>
  );
}

export default Home;

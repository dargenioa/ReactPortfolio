import { Heading, Text, Stack, Center, Image, Box } from "@chakra-ui/react";
import LandingLayout from "../components/layouts/Landing";

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
        p={17}
      >
        <Center>
          <Image
            src="https://res.cloudinary.com/dusgzehfe/image/upload/v1611960343/PortfolioPicture_nmjj7g.png"
            boxSize="sm"
            borderRadius="full"
          />
        </Center>
        <Heading as="h1" size="4xl" align="center">
          Amanda D'Argenio
        </Heading>
        <Heading size="md" p={10} align="center">
          Full Stack Developer motivated by challenging projects and enjoys the
          level of focus and problem solving that comes with software
          development.
        </Heading>
      </Stack>
    </div>
  );
}

export default Home;

import {
  Box,
  VStack,
  Heading,
  Stack,
  Image,
  Flex,
  Center,
} from "@chakra-ui/react";
import LandingLayout from "../components/layouts/Landing";

function Home() {
  return (
    <div>
      <LandingLayout />
      <Heading
        as="h1"
        size="4xl"
        align="center"
        bgImage="url(https://res.cloudinary.com/dusgzehfe/image/upload/v1611950774/portfolio-background_g9lw6j.jpg)"
        bgPosition="cover"
        bgRepeat="no-repeat"
        h="1000px"
        color="white"
        p={4}
      >
        Amanda D'Argenio
      </Heading>
    </div>
  );
}

export default Home;

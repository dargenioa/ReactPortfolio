import {
  Heading,
  Text,
  Stack,
  Center,
  Image,
  Box,
  Spacer,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import LandingLayout from "../components/layouts/Landing";
import TextLoop from "react-text-loop";

function Home() {
  return (
      <Stack
      margin="0"
      minHeight="100vh"
      overflow="hidden"
      boxSizing="border-box"
      bgColor="black"
      color="white"
      p={5}
      >
        <Box
        >
          <Heading as="h1" fontSize="50px" align="center">
            Amanda D'Argenio
          </Heading>
          <Heading
            bgGradient="linear(to-l ,white, gray.300)"
            bgClip="text"
            size="xl"
            pt={5}
            align="center"
          >
            Full Stack Developer
          </Heading>
          <Center pt={5}>
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
        </Box>
        <SimpleGrid
        columns={{ sm: 1, md: 2 }} spacing={1}>
          <Box
          pt={10} marginLeft={10} marginTop={20}
          >
            <Image
              src="https://res.cloudinary.com/dusgzehfe/image/upload/v1613937223/PortfolioPicture_nmjj7g.png"
              alt="profile-photo"
              borderRadius="15%"
            />
          </Box>
          <Box
          textAlign="center"
          marginTop={20}
          >
            <Heading p={5}>About me</Heading>
            <Text
            align="left"
            >
              Dedicated Full Stack Developer r seeking a new opportunity to
              enhance and utilize my skills and work experience working for a
              global Fintech company offering an on-premises/SaaS/DaaS solution
              to clients. Recent graduate of Rutgers University Full-Stack
              Immersive program as well as a Bachelor's Degree. Eager to use my
              experience in JavaScript, React, Node.js, NoSQL and MySQL
              databases, responsive design using HTML/CSS and APIs to
              collaborate with teams and build upon applications. My education
              has provided me the experience to work in an Agile environment
              within development teams. I am motivated by challenging projects
              and enjoy the level of focus and problem solving that comes with
              software development. I am confident my skills to be flexible and
              adapt easily to any environment or culture will allow me to
              immediately contribute to a company’s success.
            </Text>
          </Box>
        </SimpleGrid>
      </Stack>
  );
}

export default Home;

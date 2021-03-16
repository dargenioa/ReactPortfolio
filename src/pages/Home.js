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
import Typewriter from "typewriter-effect";

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
      <Box>
        <Heading
          bgGradient="linear(to-l, cyan.400, blue.400, teal.300)"
          bgClip="text"
          as="h1"
          fontSize="100px"
          align="center"
          fontFamily="Brush Script MT"
        >
          Amanda D'Argenio
        </Heading>
        <Heading
          bgGradient="linear(to-l, cyan.400, blue.400, teal.400)"
          bgClip="text"
          pt={5}
          fontSize="25px"
          align="center"
        >
          Full Stack Developer | Frontend Developer
        </Heading>
        <Center color="white" pt={5}>
          <Heading as="h6" size="md">
            <Typewriter
              options={{
                strings: [
                  "Problem Solver",
                  "Motivated by Challenging Projects",
                  "Great Listener",
                  "Team Collaborator",
                  "Effective Communicator",
                  "Adaptability",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Heading>
        </Center>
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={1}>
        <Box pt={10} marginLeft={10} marginTop={20}>
          <Image
            src="https://res.cloudinary.com/dusgzehfe/image/upload/v1613937223/PortfolioPicture_nmjj7g.png"
            alt="profile-photo"
            borderRadius="15%"
          />
        </Box>
        <Box textAlign="center" marginTop={20}>
          <Heading
            p={5}
          bgGradient="linear(to-l, cyan.400, blue.300, teal.300)"
            bgClip="text"
          >
            About me
          </Heading>
          <Text fontSize="18px" fontFamily="Helvetica" mb={3} align="left">
            Dedicated Full Stack Developer seeking a new opportunity to enhance
            and utilize my skills and work experience working for a global
            Fintech company offering an on-premises/SaaS/DaaS solution to
            clients. Recent graduate of Rutgers University Full-Stack Immersive
            program as well as a Bachelor's Degree in Business Administration
            with a minor in Equine Science. Eager to use my experience in
            JavaScript, React, Node.js, NoSQL and MySQL databases, responsive
            design using HTML/CSS and APIs to collaborate with teams and build
            upon applications. My education has provided me the experience to
            work in an Agile environment within development teams. I am
            motivated by challenging projects and enjoy the level of focus and
            problem solving that comes with software development. I am confident
            my skills to be flexible and adapt easily to any environment or
            culture will allow me to immediately contribute to a company’s
            success.
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  );
}

export default Home;

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
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
  Spacer,
} from "@chakra-ui/react";

//   * Project title

//   * Link to the deployed version

//   * Link to the GitHub repository

//   * GIF or screenshot of the deployed application

function Project({ project }) {
  return (
    <Box
      boxShadow="dark-lg"
      rounded="md"
      bg="white"
      boxSize="100%"
      height="100%"
    >
      <Box>
        <Text
          fontFamily="Yeseva One"
          align="center"
          color="gray.800"
          fontWeight="bold"
          p={1}
        >
          {project.title}
        </Text>
      </Box>
      <Box>
        <Image src={project.image} />
      </Box>
      <Box fontWeight="bold" p={1} textAlign="center" separator="|">
        <Box>
          <Link
            color="purple.600"
            target="blank"
            href={project.deploy}
            align="center"
          >
            Deployed Application |{" "}
            <Link target="blank" href={project.github}>
              Github Repository
            </Link>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Project;

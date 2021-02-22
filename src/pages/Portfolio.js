import {
  SimpleGrid,
  ScaleFade,
  useDisclosure,
  Button,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react";
import Project from "../components/layouts/Project";
import Projects from "../utils/json";

function Portfolio() {
  return (
    <>
      <SimpleGrid
      
      p={5}
      mb={5}
      columns={{ sm: 1, md: 3 }} spacing={10}>
        {Projects.map((project) => (
          <Project project={project} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default Portfolio;


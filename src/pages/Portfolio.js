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
      <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={10}>
        {Projects.map((project) => (
          <Project
          project={project}
          />
        )
        )}
      </SimpleGrid>
    </>
  );
}

export default Portfolio;

/* <Project
          image="https://res.cloudinary.com/dusgzehfe/image/upload/v1612056726/Screen_Shot_2021-01-30_at_8.31.09_PM_prbwkq.png"
          title="marketplace"
          deploy="marketplace"
          github="marketplace"
        /> */
// <SimpleGrid
// p={5}
// spacing={10}
// minChildWidth="120px">

// </SimpleGrid>

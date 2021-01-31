import { SimpleGrid, ScaleFade, useDisclosure, Button, Box, Image } from "@chakra-ui/react";
import Project from "../components/layouts/Project";


function Portfolio() {
    const { isOpen, onToggle } = useDisclosure();
    

    return(
        <>
        <Image
        src="https://res.cloudinary.com/dusgzehfe/image/upload/v1612056726/Screen_Shot_2021-01-30_at_8.31.09_PM_prbwkq.png"
        onClick={onToggle} />
        <ScaleFade initialScale={0.9} in={isOpen}>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            Fade
          </Box>
        </ScaleFade>
        </>
        // <SimpleGrid columns={2} spacing={10} p={10} m={10}>
        
        // <Project
        // title="test"
        // image="https://res.cloudinary.com/dusgzehfe/image/upload/v1612056726/Screen_Shot_2021-01-30_at_8.31.09_PM_prbwkq.png"
        // />
        // </SimpleGrid>
    )

};

export default Portfolio;
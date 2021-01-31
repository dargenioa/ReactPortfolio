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


function Toggle(props) {
  const { isOpen, onToggle } = useDisclosure();

  return(
  <>
    <Box onClick={onToggle}>
      {props.children}
    </Box>
    <ScaleFade initialScale={0.9} in={isOpen}>
      <Box
        p="40px"
        color="white"
        mt="4"
        bgGradient="linear(to-l ,black, gray)"
        rounded="md"
        shadow="md"
      >
              {props.children}
      </Box>
    </ScaleFade>
  </>
  );
}


export default Toggle;
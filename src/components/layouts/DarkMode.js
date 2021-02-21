import {
  useColorMode,
  IconButton,
  Box,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Header from "../sections/Header";

function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.200", "gray.900");
  const color = useColorModeValue("gray.800", "gray.100");

  return (
    <Flex
    bg={bg}
    color={color}
    >
      <Box>
        <IconButton
          aria-label="Toggle Dark Switch"
          p={2}
          m={2}
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          bg={bg}
          color={color}
        />
      </Box>
      <Box>
        <Header>
          Hello
        </Header>
      </Box>
    </Flex>
  );
}

export default DarkMode;

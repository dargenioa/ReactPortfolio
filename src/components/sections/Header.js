import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import DarkMode from "../DarkMode";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const MenuItems = (props) => {
  const { children, isLast, to = "/", ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 4, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 4 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={4}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["primary.700", "primary.700"]}
      {...props}
    >
      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>
      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/">Home</MenuItems>
          <MenuItems to="/portfolio">Portfolio </MenuItems>
          <MenuItems to="/faetures">Contact </MenuItems>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;

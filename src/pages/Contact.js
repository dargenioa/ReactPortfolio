import React from "react";
import { Text, Heading, Flex, Stack, Spacer, Box } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  SimpleGrid,
  Textarea,
  AlertDialog,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

function Contact() {
  function SubmitButton() {
    return (
      <>
        <Box>
          <Popover>
            <PopoverTrigger>
              <Button bgColor="cyan.500">Submit</Button>
            </PopoverTrigger>
            <PopoverContent color="black">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Confirmation</PopoverHeader>
              <PopoverBody>
                Thank you for visiting! I will contact you soon.
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </>
    );
  }

  return (
    <div>
      <Stack
        margin="0"
        minHeight="100vh"
        overflow="hidden"
        boxSizing="border-box"
        bgColor="black"
        color="white"
        p={5}
      >
        <Heading
          bgGradient="linear(to-l, cyan.300, blue.600)"
          bgClip="text"
          as="h1"
          fontSize="58px"
          align="center"
          fontWeight="bold"
          fontFamily="Yeseva One"
          pb={20}
        >
          Contact
        </Heading>
        <SimpleGrid p={10} columns={{ sm: 1, md: 2 }} spacing={150}>
          <Box letterSpacing={3}>
            <Heading
              fontWeight="bold"
              fontFamily="Yeseva One"
              bgGradient="linear(to-l, blue.600, cyan.300)"
              bgClip="text"
              fontSize="40px"
              mb={5}
            >
              Amanda D'Argenio
            </Heading>
            <Heading
              // color="cyan.400"
              bgGradient="linear(to-l, blue.600, cyan.300)"
              bgClip="text"
              size="md"
              p={2}
            >
              Phone: <span style={{ color: "white" }}>(973)-632-1861</span>
            </Heading>
            <Heading
              // color="cyan.400"
              bgGradient="linear(to-l, blue.600, cyan.300)"
              bgClip="text"
              size="md"
              p={2}
            >
              Email:{" "}
              <span style={{ color: "white" }}>
                <a target="blank" href="mailto:dargenioa14@gmail.com">
                  dargenioa14@gmail.com
                </a>
              </span>
            </Heading>
            <Heading
              // color="cyan.400"
              bgGradient="linear(to-l, blue.600, cyan.300)"
              bgClip="text"
              size="md"
              p={2}
            >
              Github:{" "}
              <span style={{ color: "white" }}>
                <a target="blank" href="https://github.com/dargenioa/">
                  dargenioa
                </a>
              </span>
            </Heading>
            <Heading
              // color="cyan.400"
              bgGradient="linear(to-l, blue.600, cyan.300)"
              bgClip="text"
              size="md"
              p={2}
            >
              Resume:{" "}
              <span style={{ color: "white" }}>
                <a
                  target="blank"
                  href="https://drive.google.com/file/d/11uUKblrXRGSgKLXdtzU6nit2Ok7PV2Du/view?usp=sharing"
                >
                  View PDF
                </a>
              </span>
            </Heading>
            <Heading
              // color="cyan.400"
              bgGradient="linear(to-l, blue.600, cyan.300)"
              bgClip="text"
              size="md"
              p={2}
            >
              LinkedIn:{" "}
              <span style={{ color: "white" }}>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/amandadargenio/"
                >
                  Visit my LinkedIn Profile
                </a>
              </span>
            </Heading>
          </Box>
          <Box>
            <FormControl w="80%" id="email">
              <FormLabel>Name</FormLabel>
              <Input type="text" />
              <FormHelperText pb={3}>
                Please enter your full name
              </FormHelperText>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
              <FormHelperText pb={3}>
                Please enter your email address
              </FormHelperText>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Enter Message here" type="text" />
              <SubmitButton />
            </FormControl>
          </Box>
        </SimpleGrid>
      </Stack>
    </div>
  );
}

export default Contact;

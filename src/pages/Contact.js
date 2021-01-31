import { Text, Heading, Flex, Stack, Spacer} from "@chakra-ui/react";
import LandingLayout from "../components/layouts/Landing";


function Contact() {
    return(
        
        <div>
        <LandingLayout />
        <Stack
          bgGradient="linear(to-l, gray.700 ,black)"
          bgPosition="cover"
          bgRepeat="no-repeat"
          h="600px"
          color="white"
          p={10}
        >
          <Heading
            as="h1"
            fontSize="40px"
            align="center"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
          >
            Contact Information
          </Heading>
          <Heading
            bgGradient="linear(to-l ,#FF0080, #7928CA)"
            bgClip="text"
            size="lg"
            pt={10}
            mb={5}
          >
            Amanda D'Argenio
          </Heading>
          <Heading
            bgGradient="linear(to-l ,#FF0080, #7928CA)"
            bgClip="text"
            size="md"
          >
            Phone: <span style={{color: "white"}}>(973)-632-1861</span>

          </Heading>
          <Heading
            bgGradient="linear(to-l ,#FF0080, #7928CA)"
            bgClip="text"
            size="md"
          >
            Email:  <span style={{color: "white"}}><a target="blank" href="mailto:dargenioa14@gmail.com">dargenioa14@gmail.com</a></span>
          </Heading>
          <Heading
            bgGradient="linear(to-l ,#FF0080, #7928CA)"
            bgClip="text"
            size="md"
          >
            Github: <span style={{color: "white"}}><a target="blank" href="https://github.com/dargenioa/">dargenioa</a></span>
          </Heading>
          <Heading
            bgGradient="linear(to-l ,#FF0080, #7928CA)"
            bgClip="text"
            size="md"
          >
            Resume:  <span style={{color: "white"}}><a target="blank" href="https://drive.google.com/file/d/11uUKblrXRGSgKLXdtzU6nit2Ok7PV2Du/view?usp=sharing">View PDF</a></span>
          </Heading>
          <Heading
            bgGradient="linear(to-l ,#FF0080, #7928CA)"
            bgClip="text"
            size="md"
          >
            LinkedIn:  <span style={{color: "white"}}><a target="blank" href="https://www.linkedin.com/in/amandadargenio/">Visit my LinkedIn Profile</a></span>
          </Heading>
        </Stack>
      </div>
  
    )

};

export default Contact;
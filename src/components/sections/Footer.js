import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Flex,
} from "@chakra-ui/react";
import "./sections.css";

function Footer(props) {
  return (
    // position: fixed;
    // left: 0;
    // bottom: 0;
    // width: 100%;
    // background-color: #202121;
    <Breadcrumb
      separator="|"
      fontSize="20px"
      className="footer"
      position="fixed"
      left={0}
      bottom={0}
      width="100%"
      // bgGradient="linear(to-l, #7928CA,#FF0080)"
      bg={["primary.500", "primary.500"]}
      color={["primary.700", "primary.700"]}
      textAlign="center"
      maxHeight="5vh"
      {...props}

      
    >
      <BreadcrumbItem>
        <BreadcrumbLink target="blank" href="https://github.com/dargenioa/">
          Github
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          target="blank"
          href="https://www.linkedin.com/in/amandadargenio/"
        >
          LinkedIn
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink target="blank" href="mailto:dargenioa14@gmail.com">
          Email
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default Footer;

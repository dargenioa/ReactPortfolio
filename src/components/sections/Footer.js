import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Flex,
} from "@chakra-ui/react";

function Footer() {
  return (
    <Center
    h="150px"
    bgGradient="linear(to-l, #7928CA,#FF0080)"
    pb={7}
    
    >
      <Breadcrumb
      separator="|"
      fontSize="20px"
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="https://github.com/dargenioa/">Github</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="https://www.linkedin.com/in/amandadargenio/">LinkedIn</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="mailto:dargenioa14@gmail.com">Email</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Center>
  );
}

export default Footer;

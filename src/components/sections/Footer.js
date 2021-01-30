import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";

function Footer(props) {
  return (
    <Flex >
      <Breadcrumb
      separator="|"
      fontSize="30px"
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="https://github.com/dargenioa/">Github</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="https://www.linkedin.com/in/amandadargenio/">LinkedIn</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Resume</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
}

export default Footer;

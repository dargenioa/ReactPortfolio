import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
      <Breadcrumb separator="|">
        <BreadcrumbItem >
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/portfolio">Portfolio</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/contact">Contact</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}

export default Header;

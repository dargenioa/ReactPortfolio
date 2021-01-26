import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

function NavBar() {
  return (
    <div>
      <Breadcrumb separator="|">
        <BreadcrumbItem>
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

export default NavBar;

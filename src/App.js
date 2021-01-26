import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import DarkMode from "./components/DarkMode";
import NavBar from "./components/NavBar";
import { Text, Heading, Flex, Stack } from "@chakra-ui/react";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <DarkMode />
    <NavBar />
    <Stack>
    <Route exact path="/" component={Home}/>
    <Route exact path="/portfolio" component={Portfolio}/>
    <Route exact path="/contact" component={Contact}/>
    </Stack>
    </Router>

  );
}

export default App;

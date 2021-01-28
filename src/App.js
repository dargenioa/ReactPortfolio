import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import DarkMode from "./components/DarkMode";
import NavBar from "./components/NavBar";
import { Text, Heading, Flex, HStack, Spacer} from "@chakra-ui/react";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <HStack m="10px">
        <DarkMode />
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </HStack>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import DarkMode from "./components/DarkMode";
import Header from "./components/Header";
import { Text, Heading, Flex, HStack, Spacer } from "@chakra-ui/react";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <HStack m="10px">
        <DarkMode />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </HStack>
    </Router>
  );
}

export default App;

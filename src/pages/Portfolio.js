import {
  SimpleGrid,
  ScaleFade,
  useDisclosure,
  Button,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react";
import Project from "../components/layouts/Project";

function Portfolio() {
  return (
    <>
      <SimpleGrid
      columns={{sm: 1, md: 3}}
      spacing={10}
      >
        <Project
          image="https://res.cloudinary.com/dusgzehfe/image/upload/v1612056726/Screen_Shot_2021-01-30_at_8.31.09_PM_prbwkq.png"
          title="Quokka Marketplace"
          deploy="https://projecttwo-rutgers.herokuapp.com/"
          github="https://github.com/dargenioa/quokka-marketplace"
        />
                <Project
          image="https://res.cloudinary.com/dusgzehfe/image/upload/v1612128817/hompage_wj1kw5.png"
          title="Employee Directory"
          deploy="https://dargenioa.github.io/employeeDirectory/"
          github="https://github.com/dargenioa/employeeDirectory"
        />
                <Project
          image="https://res.cloudinary.com/dusgzehfe/image/upload/v1612129185/covid-homepage_ygj7ux.png"
          title="Covid Testing Tracker"
          deploy="https://dargenioa.github.io/covidTestingTracker/"
          github="https://github.com/dargenioa/covidTestingTracker"
        />
                <Project
          image="https://res.cloudinary.com/dusgzehfe/image/upload/v1612129591/NoteTakerHome_kedtyi.png"
          title="Note Taker"
          deploy="https://notetakerprofessional.herokuapp.com/"
          github="https://github.com/dargenioa/noteTaker"
        />
                <Project
          image="https://res.cloudinary.com/dusgzehfe/image/upload/v1612129756/weatherapp4_s89xsf.png"
          title="Weather Dashboard"
          deploy="https://dargenioa.github.io/weatherDashboard/"
          github="https://github.com/dargenioa/weatherDashboard"
        />
                <Project
          image="https://res.cloudinary.com/dusgzehfe/image/upload/v1612130184/burger-homepage_i8gowu.png"
          title="Eat-Da-Burger"
          deploy="https://unlimiedburgers2.herokuapp.com/"
          github="https://github.com/dargenioa/burger"
        />
        

      </SimpleGrid>
    </>
  );
}

export default Portfolio;

/* <Project
          image="https://res.cloudinary.com/dusgzehfe/image/upload/v1612056726/Screen_Shot_2021-01-30_at_8.31.09_PM_prbwkq.png"
          title="marketplace"
          deploy="marketplace"
          github="marketplace"
        /> */
// <SimpleGrid
// p={5}
// spacing={10}
// minChildWidth="120px">

// </SimpleGrid>

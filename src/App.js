import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import History from "./pages/History";
//import Sites from "./pages/Other Sites";
import AboutUs from "./pages/About Us";
import RickRoll from "./pages/RIckRoll";
import Projects from "./pages/Projects";
import Xenaf from "./pages/projects/Xenaf";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Main />} />
        <Route path="/history" exact component={() => <History />} />
        <Route path="/projects" exact component={() => <Projects />} />
        <Route path="/xenaf" exact component={() => <Xenaf />} />
        <Route path="/aboutus" exact component={() => <AboutUs />} />
        <Route path="/epic" exact component={() => <RickRoll />} />
      </Switch>
      
    </Router>
  );
}

export default App;
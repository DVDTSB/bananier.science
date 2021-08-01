import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import History from "./pages/History";
import Sites from "./pages/Other Sites";
import UwU from "./pages/UwU";
import RickRoll from "./pages/RIckRoll";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Main />} />
        <Route path="/history" exact component={() => <History />} />
        <Route path="/sites" exact component={() => <Sites />} />
        <Route path="/uwu" exact component={() => <UwU />} />
        <Route path="/epic" exact component={() => <RickRoll />} />
      </Switch>
      
    </Router>
  );
}

export default App;
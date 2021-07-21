import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import History from "./pages/History";
import Why from "./pages/Why";
import UwU from "./pages/UwU";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Main />} />
        <Route path="/history" exact component={() => <History />} />
        <Route path="/why" exact component={() => <Why />} />
        <Route path="/uwu" exact component={() => <UwU />} />
      </Switch>
    </Router>
  );
}

export default App;
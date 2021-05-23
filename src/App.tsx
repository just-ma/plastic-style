import { BrowserRouter as Router , Route, Switch } from "react-router-dom";

import Page from "./app/ui/Page";
import Home from "./home/Home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Page(Home)} />
      </Switch>
    </Router>
  );
}

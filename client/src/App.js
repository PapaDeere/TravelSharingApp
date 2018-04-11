import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Places from "./pages/Places";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>     
        <Route exact path="/" component={Places} />        
        <Route exact path="/places" component={Places} />
        <Route exact path="/places/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;

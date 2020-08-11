import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { HomeView } from "./views";
import { Repositories } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomeView}></Route>
          <Route path="/repositories" exact component={Repositories}></Route>
        </Switch>
      </Router>
      <HomeView />
    </div>
  );
}

export default App;

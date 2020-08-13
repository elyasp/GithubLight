import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomeView } from "./views";
import { Repositories } from "./components";

/**
 * This main app component distinguishes routes to render their according component
 */
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomeView}></Route>
        <Route path="/repositories/:username" component={Repositories}></Route>
      </Switch>
    </div>
  );
}

export default App;

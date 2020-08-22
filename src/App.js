import React from "react";
import Main from "./Container/Main/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SuperHero from "./Components/SuperHero/SuperHero";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Main} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

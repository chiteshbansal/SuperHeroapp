import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// components 
import SuperHero from "./Components/SuperHero/SuperHero";
import Main from "./Container/Main/Main";

// Browser Router is used to enable routing in App component
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route to="/" component={Main} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

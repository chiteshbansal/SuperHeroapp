import React from "react";
import Main from "./Container/Main/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SuperHero from "./Components/SuperHero/SuperHero";
 class App extends React.Component {
   componentDidMount() {
     console.log('mounting the app');
   }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Route to='/' component={Main}/>
      </div>
    </BrowserRouter>
    )
  }
}


export default App;

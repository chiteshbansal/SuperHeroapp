import React from "react";
import classes from "./SuperHero.module.css";
import Axios from "axios";

class SuperHero extends React.Component {
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  constructor(props) {
    super(props);
    this.state = {
      SuperHero: null,
    };
  }
  componentDidMount() {
    console.log(this.props);
    Axios.get(
      "https://www.superheroapi.com/api.php/10219177700206566/" +
        this.props.match.params.id
    ).then((result) => {
      console.log('result is',result);
      this.setState({
        SuperHero: result.data,
      });
    });
  }
  render() {
    let superHero = null;
    if (this.state.SuperHero) {
      superHero = (
        <div className={classes.SuperHero}>
          <div className={classes.SuperHero___Image}>
            <img
              src={this.state.SuperHero.image.url}
              alt={this.state.SuperHero.name}
            />
          </div>
          <div>
            <h2>{this.state.SuperHero.name}</h2>
          </div>
        </div>
      );
    }
    return superHero;
  }
}

export default SuperHero;

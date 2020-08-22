import React, { Component } from "react";
import classes from "./Main.module.css";
import Axios from "axios";
import { Link ,Route} from "react-router-dom";
import SuperHero from "../../Components/SuperHero/SuperHero";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchText: "",
      SearchResult: [],
      ShowResult: false,
    };
  }
  onSearchChangeHandler = (event) => {
    let text = event.target.value;
    Axios.get(
      "https://www.superheroapi.com/api.php/10219177700206566/search/" +
        this.state.SearchText
    )
      .then((result) => {
        this.setState({
          SearchResult: result.data.results,
          SearchText: text,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  onSubmitSearchHandler = () => {
    Axios.get(
      "https://www.superheroapi.com/api.php/10219177700206566/search/" +
        this.state.SearchText
    )
      .then((result) => {
        console.log(result);
        this.setState({
          SearchText: "",
          ShowResult: true,
          SearchResult: result.data.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    let SearchResult = null;
    let SearchResultList = null;
    // if (this.state.SearchResult && this.state.SearchResult.length > 0 && this.state.ShowResult) {
    //   SearchResult = this.state.SearchResult.map((Result) => {
    //     return <SuperHero SuperHero={Result} />;
    //   });
    // }

    if (
      this.state.SearchResult &&
      this.state.SearchResult.length > 0 &&
      !this.state.ShowResult
    ) {
      SearchResultList = this.state.SearchResult.map((Result) => {
        return (
          <Link to={{ pathname: "/SuperHero/" + Result.id }}>
            <li>{Result.name}</li>
          </Link>
        );
      });
    }

    return (
      <div className={classes.MainPage}>
        <div className={classes.SearchResult}>
          <input
            type="text"
            name="SearchResult"
            onChange={this.onSearchChangeHandler}
          />
          <button
            onClick={this.onSubmitSearchHandler}
            disabled={this.state.SearchText === ""}
          >
            Search Your Favourite SuperHero
          </button>
          <div className={classes.SearchResultBox}>
            <ul className={classes.SearchResultList}>{SearchResultList}</ul>
          </div>
        </div>
        {SearchResult}
        <Route exact path="/SuperHero/:id" component={SuperHero} />
      </div>
    );
  }
}

export default Main;

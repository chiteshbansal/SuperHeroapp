import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import classes from "./Main.module.css";
import Axios from "axios";
import { Link, Route } from "react-router-dom";

import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import SuperHero from "../../Components/SuperHero/SuperHero";
import Mylist from "../../Components/Mylist/Mylist";
import FavoriteList from "../../Components/FavoriteList/FavoriteList";

import * as actions from "../../ReduxStore/Actions/index";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchText: "",
      SearchResult: [],
      ShowResult: false,
    };
  }
  componentDidMount() {
    console.log("cdm");
    this.props.onFetchMyList();
  }
  onSearchChangeHandler = (event) => {
    let text = event.target.value;
    Axios.get(
      "https://www.superheroapi.com/api.php/10219177700206566/search/" +
        this.state.SearchText
    )
      .then((result) => {
        let updatedSearchResult = [...this.state.SearchResult];
        if (result.data.results && result.data.results.length > 0) {
          updatedSearchResult = result.data.results;
        }
        this.setState({
          SearchResult: updatedSearchResult,
          SearchText: text,
          ShowResult: false,
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
  onSuperHeroInfoHandler = (superHeroId) => {
    this.props.history.push("/SuperHero/" + superHeroId);
  };

  onRemoveFromMyListHandler = (superHeroId) => {
    this.props.onRemoveFromMyList(superHeroId);
  };
  ontoggleSearchResult = () => {
    this.setState({
      ShowResult: true,
    });
  };
  render() {
    return (
      <div className={classes.MainPage}>
        <NavigationBar
          toggle={this.ontoggleSearchResult}
          ShowResult={this.state.ShowResult}
          SearchResult={this.state.SearchResult}
          change={this.onSearchChangeHandler}
          click={this.onSubmitSearchHandler}
          SearchText={this.state.SearchText}
        />
        <Switch>
          <Route exact path="/SuperHero/:id" component={SuperHero} />
          <Route exact path="/FavoriteList" component={FavoriteList} />
          <Route
            path="/"
            render={() => {
              return (
                <Mylist
                  Heros={this.props.Mylist}
                  click={this.onSuperHeroInfoHandler}
                  remove={this.onRemoveFromMyListHandler}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state is ", state);
  return {
    Mylist: state ? state.Mylist : [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMyList: () => dispatch(actions.fetchMylistDefaultItems()),
    onRemoveFromMyList: (superHeroId) =>
      dispatch(actions.removeSuperHeroFromMylist(superHeroId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

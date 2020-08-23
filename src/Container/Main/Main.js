import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import Axios from "axios";
import { Link, Route } from "react-router-dom";

// components
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import SuperHero from "../../Components/SuperHero/SuperHero";
import Mylist from "../../Components/Mylist/Mylist";
import FavoriteList from "../../Components/FavoriteList/FavoriteList";
import Notification from "../../Utils/Notification/Notification";

// utitilty functions - action creators
import * as actions from "../../ReduxStore/Actions/index";
import classes from "./Main.module.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchText: "",
      SearchResult: [],
      ShowResult: false,
      // To show the searched result below the search bar after searching the content
      showNotification: false,
      NotificationContent: "",
      // Handle whether to show notifications or not
      // and the notification content
    };
  }
  componentDidMount() {
    // fetching some default SuperHeroes for Mylist
    this.props.onFetchMyList();
  }

  onSearchChangeHandler = (event) => {
    let text = event.target.value;

    // as the user types in the search bar we make an api call to search for the superHero and
    // show the result in the box below search bar
    Axios.get(
      "https://www.superheroapi.com/api.php/10219177700206566/search/" +
        this.state.SearchText
    )
      .then((result) => {
        // first storing the previously fetched search result
        // then changing it with the newly search result if any
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
  // Navigating to the SuperHero info page when clicked on the SuperHero card
  onSuperHeroInfoHandler = (superHeroId) => {
    this.props.history.push("/SuperHero/" + superHeroId);
  };
  // this handler is for removing the superHero from myList
  onRemoveFromMyListHandler = (superHeroId) => {
    this.props.onRemoveFromMyList(superHeroId);
  };
  // toggle the search result box below the search bar
  // when the user clicks on a search result the dialog box closes and
  // user is directed to superHero info page
  ontoggleSearchResult = () => {
    this.setState({
      ShowResult: true,
    });
  };

  // toggle notifications on adding/removing the superheroes from the list
  toggleNotificationHandler = (content) => {
    // to remove the notification bar after six seconds
    // settimeout function is used to change the state after six seconds
    // not to show notification bar again
    setTimeout(() => {
      this.setState({
        showNotification: false,
      });
    }, 6000);
    this.setState({
      showNotification: true,
      NotificationContent: content,
    });
  };
  render() {
    return (
      <div className={classes.MainPage}>
        {this.state.showNotification ? (
          <Notification show={this.state.showNotification}>
            {this.state.NotificationContent}
          </Notification>
        ) : null}
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
          <Route
            exact
            path="/FavoriteList"
            render={() => {
              return (
                <FavoriteList
                  click={this.onSuperHeroInfoHandler}
                  toggleNotification={this.toggleNotificationHandler}
                />
              );
            }}
          />
          <Route
            path="/"
            render={() => {
              return (
                <Mylist
                  toggleNotification={this.toggleNotificationHandler}
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
// connecting our class component to the redux store 
export default connect(mapStateToProps, mapDispatchToProps)(Main);

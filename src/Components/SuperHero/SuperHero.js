import React from "react";
import classes from "./SuperHero.module.css";
import Axios from "axios";
import { connect } from "react-redux";

import * as actions from "../../ReduxStore/Actions/index";

import Notification from "../../Utils/Notification/Notification";

class SuperHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SuperHero: null,
      IsPresentInMylist: false,
      // showing button according whether
      // the superhero is present in mylist and favlist or not
      IsPresentInFavlist: false,
      NotificationContent: "",
      ShowNotification: false,
    };
  }
  componentDidMount() {
    // fetching the superHero info using the id passed through the url to the component
    Axios.get(
      "https://www.superheroapi.com/api.php/10219177700206566/" +
        this.props.match.params.id
    ).then((result) => {
      this.setState({
        SuperHero: result.data,
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    // checking whether to updated the component
    // by checking whether the supehero is change
    // or the supeHero is added to any of the list
    // otherwise not
    if (this.state.SuperHero) {
      return (
        nextProps.match.params.id !== this.state.SuperHero.id ||
        nextState.IsPresentInFavlist !== this.state.IsPresentInFavlist ||
        nextState.IsPresentInMylist !== this.state.IsPresentInMylist
      );
    } else {
      return true;
    }
  }
  componentDidUpdate() {
    // fetching the superHero again if the superHero is changed
    // but the user is on the same page rather than navigating from any other page
    Axios.get(
      "https://www.superheroapi.com/api.php/10219177700206566/" +
        this.props.match.params.id
    ).then((result) => {
      this.setState({
        SuperHero: result.data,
      });
    });
  }

  toggleNotificationHandler = (content) => {
    // removing the notification bar automatically after 6 secs
    setTimeout(() => {
      this.setState({
        ShowNotification: false,
      });
    }, 6000);
    this.setState({
      ShowNotification: true,
      NotificationContent: content,
    });
  };
  render() {
    let IsPresentInMyList = -1;
    if (this.state.SuperHero) {
      IsPresentInMyList = this.props.Mylist.findIndex((listitem) => {
        return listitem.id === this.state.SuperHero.id;
      });
    }
    // checking whether the current superHero is present in Mylist or favlist or not
    // and accordingly showing the button
    let IsPresentInFavList = -1;
    if (this.state.SuperHero) {
      IsPresentInFavList = this.props.FavoriteList.findIndex((listitem) => {
        return listitem.id === this.state.SuperHero.id;
      });
    }

    const { SuperHero } = this.state;
    let superHero = null;
    if (this.state.SuperHero) {
      superHero = (
        <div className={classes.SuperHero}>
          {this.state.ShowNotification ? (
            <Notification show={this.state.ShowNotification}>
              {this.state.NotificationContent}
            </Notification>
          ) : null}
          <div className={classes.SuperHero___Image}>
            <img
              src={this.state.SuperHero.image.url}
              alt={this.state.SuperHero.name}
            />
          </div>
          <div className={classes.SuperHero__Info}>
            <div className={classes.Name}>
              <div>{this.state.SuperHero.name}</div>
              {IsPresentInMyList === -1 ? (
                <button
                  onClick={() => {
                    // this.props.history.push("/");
                    this.toggleNotificationHandler(
                      SuperHero.name + " Successfully Added to MyList"
                    );
                    this.setState({ IsPresentInMylist: true });
                    this.props.onAddToMyList(SuperHero);
                  }}
                >
                  Add to MyList <i class="fas fa-plus-circle"></i>
                </button>
              ) : null}
              {IsPresentInFavList === -1 ? (
                <i
                  class="far fa-heart"
                  onClick={() => {
                    this.setState({ IsPresentInFavlist: true });
                    this.toggleNotificationHandler(
                      SuperHero.name +
                        " Successfully Added to Favorite SuperHeroes List"
                    );
                    this.props.addToFavList(SuperHero);
                  }}
                ></i>
              ) : (
                <i
                  class="fas fa-heart"
                  style={{ color: "red" }}
                  onClick={() => {
                    this.setState({ IsPresentInFavlist: false });
                    this.toggleNotificationHandler(
                      SuperHero.name +
                        " Successfully Removed from  Favorite SuperHeros List"
                    );

                    this.props.removeFromFavList(SuperHero.id);
                  }}
                ></i>
              )}
            </div>

            <div className={classes.SuperHero__Info__PowerStats}>
              <div className={classes.Heading}>PowerStats</div>
              <div className={classes.PowerStatsList}>
                <div>
                  <i class="fas fa-brain"></i>Intelligence:
                  {SuperHero.powerstats.intelligence}
                </div>
                <div>
                  <i class="fas fa-dumbbell"></i>strength:
                  {SuperHero.powerstats.strength}
                </div>
                <div>
                  <i class="fas fa-battery-three-quarters"></i>power:
                  {SuperHero.powerstats.power}
                </div>
                <div>
                  <i class="fas fa-fist-raised"></i>Combat:
                  {SuperHero.powerstats.Combat}
                </div>
                <div>
                  <i class="fas fa-running"></i>speed:
                  {SuperHero.powerstats.speed}
                </div>
                <div>
                  <i class="fas fa-heart"></i>durability:
                  {SuperHero.powerstats.durability}
                </div>
              </div>
            </div>

            <div className={classes.PublisherName}>
              {SuperHero.biography.publisher}
            </div>
          </div>
          <div className={classes.MoreInfo}>
            <div>
              <span>Full Name</span> :{SuperHero.biography["full-name"]}
            </div>
            {SuperHero.biography["place-of-birth"] !== "-" ? (
              <div>
                <span>Place of Birth </span>:
                {SuperHero.biography["place-of-birth"]}
              </div>
            ) : null}
            {SuperHero.biography["first-appearance"] !== "-" ? (
              <div>
                <span>First Appearance</span> :
                {SuperHero.biography["first-appearance"]}
              </div>
            ) : null}
          </div>
        </div>
      );
    }
    return superHero;
  }
}
const mapStateToProps = (state) => {
  return {
    Mylist: state ? state.Mylist : [],
    FavoriteList: state ? state.FavoriteList : [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToMyList: (SuperHero) => {
      dispatch(actions.addSuperHeroToMylist(SuperHero));
    },
    addToFavList: (SuperHero) => {
      dispatch(actions.addSuperHeroToFavList(SuperHero));
    },
    removeFromFavList: (superHeroId) => {
      dispatch(actions.removeSuperHeroFromFavList(superHeroId));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SuperHero);

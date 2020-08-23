import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../ReduxStore/Actions/index";
import SuperHeroCard from "../SuperHeroCard/SuperHeroCard";
import classes from "./FavoriteList.module.css";

class FavoriteList extends Component {
  render() {
    return (
      <div className={classes.FavList}>
        <div className={classes.FavListHeading}>Favorite SuperHeros List</div>
        {this.props.FavoriteList.map((item) => {
          return (
            <SuperHeroCard
              Hero={item}
              toggleNotification={this.props.toggleNotification}
              key={item.id}
              click={this.props.click}
              Favlist
              remove={this.props.OnRemoveFromFavList}
            />
          );
        })}
        {this.props.FavoriteList.length === 0 ? (
          <div className={classes.EmptyFavList}>
            No Favorite Heroes to Show{" "}
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    FavoriteList: state ? state.FavoriteList : [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    OnRemoveFromFavList: (superHeroId) => {
      dispatch(actions.removeSuperHeroFromFavList(superHeroId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);

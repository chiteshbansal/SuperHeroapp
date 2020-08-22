import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../ReduxStore/Actions/index";
import SuperHeroCard from '../SuperHeroCard/SuperHeroCard';

class FavoriteList extends Component {
  render() {
    return <div>
        {this.props.FavoriteList.map(item=>{
            return(<SuperHeroCard Hero={item} key={item.id}/>)
        })}
        {this.props.FavoriteList.length===0?<div>No Favorite Heroes to Show </div>:null}
    </div>;
  }
}
const mapStateToProps = (state) => {
  return {
    FavoriteList:state.FavoriteList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);

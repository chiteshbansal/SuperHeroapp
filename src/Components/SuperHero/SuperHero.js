import React from "react";
import classes from "./SuperHero.module.css";
import Axios from "axios";
import { connect } from "react-redux";
import * as actions from "../../ReduxStore/Actions/index";

class SuperHero extends React.Component {
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  constructor(props) {
    super(props);
    this.state = {
      SuperHero: null,
    };
  }
  componentDidMount() {
    console.log("cdm");
    console.log(this.props);
    Axios.get(
      "https://www.superheroapi.com/api.php/10219177700206566/" +
        this.props.match.params.id
    ).then((result) => {
      console.log("result is", result);
      this.setState({
        SuperHero: result.data,
      });
    });
  }

  shouldComponentUpdate(nextProps) {
    console.log("scup");
    if (this.state.SuperHero)
      return nextProps.match.params.id !== this.state.SuperHero.id;
    else {
      return true;
    }
  }
  componentDidUpdate() {
    console.log("cdu");
    Axios.get(
      "https://www.superheroapi.com/api.php/10219177700206566/" +
        this.props.match.params.id
    ).then((result) => {
      console.log("result is", result);
      this.setState({
        SuperHero: result.data,
      });
    });
  }
  render() {
    let IsPresentInMyList = -1;
    if (this.state.SuperHero) {
      IsPresentInMyList = this.props.Mylist.findIndex((listitem) => {
        return listitem.id === this.state.SuperHero.id;
      });
    }

    console.log("ispresent", IsPresentInMyList);
    const { SuperHero } = this.state;
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
          <div className={classes.SuperHero__Info}>
            <div className={classes.Name}>
              <div>{this.state.SuperHero.name}</div>
              {IsPresentInMyList === -1 ? (
                <button
                  onClick={() => {
                    this.props.history.push("/");
                    this.props.onAddToMyList(SuperHero);
                  }}
                >
                  Add to MyList <i class="fas fa-plus-circle"></i>
                </button>
              ) : null}
            </div>

            <div className={classes.SuperHero__Info__PowerStats}>
              <div className={classes.Heading}>PowerStats</div>
              <div className={classes.PowerStatsList}>
                <div>Intelligence:{SuperHero.powerstats.intelligence}</div>
                <div>strength:{SuperHero.powerstats.strength}</div>
                <div>power:{SuperHero.powerstats.power}</div>
                <div>Combat:{SuperHero.powerstats.Combat}</div>
                <div>speed:{SuperHero.powerstats.speed}</div>
                <div>durability:{SuperHero.powerstats.durability}</div>
              </div>
            </div>

            <div className={classes.PublisherName}>
              {SuperHero.biography.publisher}
            </div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToMyList: (SuperHero) => {
      dispatch(actions.addSuperHeroToMylist(SuperHero));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SuperHero);

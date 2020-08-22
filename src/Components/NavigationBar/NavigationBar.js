import React from "react";
import classes from "./NavigationBar.module.css";
import { Link, NavLink } from "react-router-dom";

function NavigationBar(props) {
  let SearchResultList = null;
  if (
    props.SearchResult &&
    props.SearchResult.length > 0 &&
    !props.ShowResult
  ) {
    SearchResultList = props.SearchResult.map((Result) => {
      return (
        <Link
          key={Result.id}
          to={{ pathname: "/SuperHero/" + Result.id }}
          className={classes.Result}
        >
          <li onClick={props.toggle}>{Result.name}</li>
        </Link>
      );
    });
  } else if (
    props.SearchResult &&
    props.SearchResult.length === 0 &&
    !props.SearchResult
  ) {
    SearchResultList = <li>No Result Found</li>;
  }
  return (
    <div className={classes.NavigationBar}>
      <div>
        <NavLink to="/" activeClassName={classes.NavTabs}>
          Home
        </NavLink>
      </div>
      <div className={classes.SearchResult}>
        <input type="text" name="SearchResult" onChange={props.change} />
        <button onClick={props.click} disabled={props.SearchText === ""}>
          Search Your Favourite SuperHero
        </button>
        <div className={classes.SearchResultBox}>
          <ul className={classes.SearchResultList}>{SearchResultList}</ul>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;

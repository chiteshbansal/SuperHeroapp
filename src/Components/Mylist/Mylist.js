import React from "react";
import SuperHeroCard from "../SuperHeroCard/SuperHeroCard";
import classes from "./Mylist.module.css";

function Mylist(props) {
  let mylist = null;
  mylist = props.Heros.map((hero) => {
    return <SuperHeroCard Hero={hero} click = {props.click} remove ={props.remove}/>;
  });
  return (
    <div className={classes.Mylist__Cnt}>
        <div className={classes.Mylist__Cnt__Heading}><h3>My List of SuperHeros</h3></div>
      <div className={classes.Mylist}>{mylist}</div>
    </div>
  );
}

export default Mylist;

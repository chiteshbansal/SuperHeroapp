import React from "react";
import classes from "./SuperHeroCard.module.css";

function SuperHeroCard(props) {
  return (
    <div className={classes.SuperHeroCard}>
      <div className={classes.SuperHeroCard__Name}>
        <div>{props.Hero.name}</div>
        <div onClick={()=>{props.remove(props.Hero.id)}}>
          <i class="fas fa-minus-circle"></i>
        </div>
      </div>
      <div className={classes.SuperHeroCard__Img}>
        <img
          src={props.Hero.image.url}
          onClick={() => props.click(props.Hero.id)}
        />
      </div>
    </div>
  );
}

export default SuperHeroCard;

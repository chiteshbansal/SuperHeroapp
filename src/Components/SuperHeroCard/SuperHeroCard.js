import React from "react";
import classes from "./SuperHeroCard.module.css";

function SuperHeroCard(props) {
  return (
    <div className={classes.SuperHeroCard}>
      <div className={classes.SuperHeroCard__Name}>
        <div>{props.Hero.name}</div>
        <div>
          {props.Mylist ? (
            <i
              class="fas fa-minus-circle"
              onClick={() => {
                props.toggleNotification(
                  props.Hero.name + " Successfully Removed from MyList"
                );
                props.remove(props.Hero.id);
              }}
            ></i>
          ) : null}
          {props.Favlist ? (
            <i
              class="fas fa-heart"
              style={{ color: "white" }}
              onClick={() => {
                props.toggleNotification(
                  props.Hero.name + " Successfully Removed from Favorite SuperHeroes List"
                );

                props.remove(props.Hero.id);
              }}
            ></i>
          ) : null}
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

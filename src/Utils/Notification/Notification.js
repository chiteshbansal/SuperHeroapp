import React from "react";
import classes from "./Notification.module.css";

function Notification(props) {
  return (
    <div className={classes.Notification}>
      <div className={classes.Notification__Content}>{props.children}</div>
      <div className={classes.Notification__CloseBtn}>X</div>
    </div>
  );
}

export default Notification;

import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnClass = '';
  if(props.showUser){
      btnClass = classes.Red;
  }
  return(
    <div className={classes.Cockpit}>
      <div>
        <h1 className={classes.bold}> Assignment 1 </h1>
        <hr/><br/>
        <h1>{props.AssignTitle}</h1>
        <button className= {btnClass} onClick = {props.clicked}>To see Users</button>
      </div>
    </div>
  );
}

export default cockpit;

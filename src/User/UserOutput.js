import React from 'react';
import classes from './Useroutput.css';


const useroutput = (props) => {
  return(
    <div className={classes.User}>
    <p onClick = {props.click}>Hi {props.name}!!!!

     </p>
    <p>Welcome To React-Guide
        Your Password : {props.password}
    </p>
    <label className="Ulabel"> UserName : </label><input type="text"
    className="Utext"
    onChange={props.changed}
    value = {props.currentUname}></input>

    </div>
  )
}
export default useroutput;

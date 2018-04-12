import React from 'react';
import './Useroutput.css';


const useroutput = (props) => {
  return(
    <div className="User">
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

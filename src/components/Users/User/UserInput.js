import React from 'react';
import './Userinput.css';
const userinput = (props) => {
  return(
    <div className="Userinput">
    <label className="Ulabel"> UserName : </label><input type="text"
    className="Utext"
    onChange={props.userinputchanged}
    value = {props.currentUname}></input>
    </div>
  )
}
export default userinput;

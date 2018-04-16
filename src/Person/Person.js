import React from 'react';
import './Person.css'
import Radium from 'radium';
const person = (props) => {
  const style = {
  '@media (min-width : 500px)': {
    width: '450px'
  }
};
  return (

    <div className="Person" style = {style}>

    <p onClick ={props.click}> My name is {props.name}, my age is {props.age}   <p> {props.children}</p></p>

    <input type = "text" onChange={props.changed} defaulvalue={props.name}/>
    </div>
  )

}
export default Radium(person);

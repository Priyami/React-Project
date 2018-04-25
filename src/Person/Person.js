import React from 'react';
import './Person.css'
const person = (props) => {

  return (

    <div className="Person" >

    <p onClick ={props.click}> My name is {props.name}, my age is {props.age}   <p> {props.children}</p></p>

    <input type = "text" onChange={props.changed} defaulvalue={props.name}/>
    </div>
  )

}
export default person;

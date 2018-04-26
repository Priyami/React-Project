import React, { Component } from 'react';
import classes from './Useroutput.css';
import Aux from '../../../hoc/Aux';
import wrapClass from '../../../hoc/wrapClass';


class Useroutput extends Component {
  constructor(props){
    super(props);
    console.log("[Useroutput.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log('[Useroutput.js] Inside componentWillMount');
  }
  componentDidMount() {
    console.log('[Useroutput.js] Inside componentDidMount');
  }
  render () {
    console.log('[Useroutput.js] Inside render');
    return <Aux>
    <p onClick = {this.props.click}>Hi {this.props.name}!!!!</p>
    <p>Welcome To React-Guide
        Your Password : {this.props.password}</p>
    <label className="Ulabel"> UserName : </label><input type="text"
    className="Utext"
    onChange={this.props.changed}
    value = {this.props.currentUname}></input>

</Aux>
  }
}

export default wrapClass(Useroutput,classes.User);

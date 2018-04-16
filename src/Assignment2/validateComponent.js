import React, { Component}  from 'react';
import Radium from 'radium';

class validateComponent extends Component {
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      ':hover': {
        backgroundColor : 'yellow',
        color: 'salmon'
      }

    }
    const validTextLength = 5;
    let st = "Please enter text";
    const txlength = this.props.textLength;
    if(txlength === 0 || !txlength ){
      st = "Please enter text";
      style.backgroundColor = 'red';
      style[':hover'] ={
        backgroundColor: 'blue',
        color: 'black'
      }
    } else {
      if (txlength >= validTextLength ){
        st =  "Text long enough.";
        style.backgroundColor = 'green';
        style[':hover'] ={
          backgroundColor: 'purple',
          color: 'white'
        }
      } else {
        st = "Text too short.";
        style.backgroundColor = 'blue';
        style[':hover'] ={
          backgroundColor :'lightgreen',
          color : 'white'
        }
      }
    }
    return (<div>
        <label style = {style}>
          {st}
        </label>
      </div>
    );
  }
}

export default Radium(validateComponent);

import React, { Component}  from 'react';

class validateComponent extends Component {
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue'
    }
    const validTextLength = 5;
    let st = "Please enter text";
    const txlength = this.props.textLength;
    if(txlength === 0 || !txlength ){
      st = "Please enter text";
      style.backgroundColor = 'red';

    } else {
      if (txlength >= validTextLength ){
        st =  "Text long enough.";
        style.backgroundColor = 'green';

      } else {
        st = "Text too short.";
        style.backgroundColor = 'blue';

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

export default validateComponent;

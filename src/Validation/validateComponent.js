import React, { Component}  from 'react';

class validateComponent extends Component {
  render() {
    const validTextLength = 5;
    let st = "Please enter text";
    const txlength = this.props.textLength;
    if(txlength === 0 || !txlength ){
      st = "Please enter text";
    } else {
      if (txlength >= validTextLength ){
        st =  "Text long enough.";
      } else {
        st = "Text too short.";
      }
    }
    return (<div>
        {st}
      </div>
    );
  }
}

export default validateComponent;

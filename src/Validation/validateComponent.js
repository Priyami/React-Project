import React, { Component}  from 'react';

class validateComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const validTextLength = 5;
    let input = this.props.inputText;
    let st = "Not Valid" ;
    if (this.props.textLength >= validTextLength){
      st = input + " is valid";
    } else {
      st = input + " is not valid";
    }

    return (<div>
        Welcome to validate Component
        <br/>
        {st}
      </div>
    );
  }
}

export default validateComponent;

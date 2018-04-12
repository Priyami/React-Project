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
      st =  "Text long enough";
    } else {
      st = "Text too short";
    }

    return (<div>

        <br/>
        {st}
      </div>
    );
  }
}

export default validateComponent;

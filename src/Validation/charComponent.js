import React, { Component}  from 'react';
import './charComponent.css';

class charComponent extends Component {
  constructor(props){
    super(props);
  }
  render() {

    return (
      <div className="charContainer">
          <p onClick = {this.props.click}>
              {this.props.inpuText}
           </p>


      </div>
    );
  }

}

export default charComponent;

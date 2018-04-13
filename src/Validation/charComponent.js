import React, { Component}  from 'react';
import './charComponent.css';

class charComponent extends Component {
  render() {
    return (
      <div className="charContainer"
        onClick = {this.props.click}>
          <p>
              {this.props.character}
          </p>
      </div>
    );
  }
}

export default charComponent;

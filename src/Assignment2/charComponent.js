import React, { Component}  from 'react';
import './charComponent.css';
import Radium from 'radium';

class charComponent extends Component {

  render() {
    let classes = ['red','bold'].join(' ');
  /*  const style = {
    '@media (min-width : 500px)': {
      width: '450px'
    }
  };*/

    return (
      <div className="charContainer" 
        onClick = {this.props.click}>
          <p className={classes}>
              {this.props.character}
          </p>
      </div>
    );
  }
}

export default Radium(charComponent);

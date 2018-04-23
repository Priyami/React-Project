import React, { Component}  from 'react';
import classes from './char.css';

class charComponent extends Component {

  render() {
  /*  const style = {
    '@media (min-width : 500px)': {
      width: '450px'
    }
  };*/

    return (
      <div className={classes.charContainer}
        onClick = {this.props.click}>
          <p className={classes.red}>
              {this.props.character}
          </p>
      </div>
    );
  }
}

export default charComponent;

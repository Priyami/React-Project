import React, { Component}  from 'react';
import styles from './char.css';

class charComponent extends Component {

  render() {
  /*  const style = {
    '@media (min-width : 500px)': {
      width: '450px'
    }
  };*/

    return (
      <div className={styles.charContainer}
        onClick = {this.props.click}>
          <p className={styles.red}>
              {this.props.character}
          </p>
      </div>
    );
  }
}

export default charComponent;

import React, {Component} from 'react';

const wrapClass = (WrappedComponent, className) => {
  // return(props) => (
  //   <div className = {className}>
  //     <WrappedComponent {...props}/>
  //   </div>
  // )
  return class extends Component {
    render() {
      return (
        <div className = {className}>
          <WrappedComponent {...this.props}/>
        </div>
      )
    }
  }
}
export default wrapClass;

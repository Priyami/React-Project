import React, { Component}  from 'react';

class inputField extends Component {

  state = {
    newValue : ""
  }

  componentWillReceiveProps(nextProps){
    this.setState({
       newValue: nextProps.newText
    });
  }

  render() {
    return (<input
      id="txtfield"
      type="text"
      onBlur={this.props.onBlurFunction}
      onChange={this.props.onChangeFunction}
      value={this.state.newValue}
    />
    );
  }
}

export default inputField;

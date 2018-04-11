import React, {Component} from 'react';
import './App.css';
import Validate from './Validation/validateComponent';
import CharComponent from './Validation/charComponent'

class App extends Component {
  state = {
     inputText: "",
    textLength: 0
  }
  txtfieldChangeListener = (event) => {
    console.log(event.target.value);
    //let valuefromText = event.target.value;
    this.setState({inputText: event.target.value, textLength: event.target.value.length});
  }
  render() {
    return (<div className="App">
      <div>
        <input id="txtfield" type="text" onBlur={this.txtfieldChangeListener}></input>
        <button type="button" onClick={this.validateTxt}>
          Click to validate
        </button>
      </div>
      <div>
        <Validate textLength={this.state.textLength} inputText={this.state.inputText}/>
      </div>
      <div>
        <CharComponent/>
      </div>
    </div>);
  }
}
export default App;

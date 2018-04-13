import React, {Component} from 'react';
import './App.css';
import Validate from './Validation/validateComponent';
import CharComponent from './Validation/charComponent'
import InputComponent from './Validation/inputField'


class App extends Component {
  state = {
    inputText: '',
    refreshCharComponent : false
  }

  handleTextChange = (event) => {
    const updateValue = event.target.value;
    this.setState({
       textLength: updateValue.length,
       inputText: updateValue,
       refreshCharComponent: true
    });
  }

  removeTextHandler = (charIndex) => {
     const pt = [...this.state.inputText];
     pt.splice(charIndex, 1);
     const newText = pt.join("");
     this.setState({
       inputText: newText,
       textLength: newText.length
     });
  }

  render() {
    var charComponents = null;
    if (this.state.refreshCharComponent){
      charComponents = (
        <div>
            {this.state.inputText.split('').map((char, index) => {
            return <CharComponent key={index}
               click = {() => this.removeTextHandler(index)}
               character = {char}
            />
            })}
        </div>
      );
    }

    return (<div className="App">
      <div>
        <label> Assignment : 2 </label>
        <hr/><br/>
        <label> Enter the word : </label>
        <InputComponent
           onBlurFunction={this.txtfieldChangeListener}
           onChangeFunction={this.handleTextChange}
           newText = {this.state.inputText}
        />
        <div>
           <p>The text length is : {this.state.textLength}</p>
           <Validate
               textLength={this.state.textLength}
            />
        </div>
      </div>
      <div>
        {charComponents}
      </div>
    </div>);
  }
}
export default App;

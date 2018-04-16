import React, {Component} from 'react';
import './css/App.css';
import Radium, {StyleRoot} from 'radium';
import Validate from './Assignment2/validateComponent';
import CharComponent from './Assignment2/charComponent'
import InputComponent from './Assignment2/inputField'


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
    const classes = [];
    if(this.state.inputText.length <= 5){
      classes.push('red');
    }
    else{
      classes.push('green');
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <div>
            <label> Assignment : 2 </label>
            <hr/><br/>
            <label className={classes.join(' ')}> Enter the word : </label>
            <InputComponent
                onChangeFunction={this.handleTextChange}
                newText = {this.state.inputText}
            />
        <div>
            <p className={classes.join(' ')}>The text length is : {this.state.textLength}</p>
            <Validate
                textLength={this.state.textLength}
            />
        </div>

        <div>
            {charComponents}
        </div>
        </div>
        </div>
    </StyleRoot>
    );
  }
}
export default Radium(App);

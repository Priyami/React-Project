import React, {Component} from 'react';
import classes from'./css/App.css';
import Validate from '../components/Charvalidate/validate';
import CharComponent from '../components/Charvalidate/char';
import InputComponent from '../components/Charvalidate/inputField';


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
    const assignedClasses = [];
    if(this.state.inputText.length <= 5){
      assignedClasses.push(classes.red);
    }
    else{
      assignedClasses.push(classes.green);
      assignedClasses.push(classes.bold);
    }

    return (

        <div className={classes.App}>
          <div>
            <label> Assignment : 2 </label>
            <hr/><br/>
            <label className={assignedClasses.join(' ')}> Enter the word : </label>
            <InputComponent
                onChangeFunction={this.handleTextChange}
                newText = {this.state.inputText}
            />
        <div>
            <p className={assignedClasses.join(' ')}>The text length is : {this.state.textLength}</p>
            <Validate
                textLength={this.state.textLength}
            />
        </div>

        <div>
            {charComponents}
        </div>
        </div>
        </div>

    );
  }
}
export default App;
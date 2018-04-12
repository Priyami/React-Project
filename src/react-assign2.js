import React, {Component} from 'react';
import './App.css';
import Validate from './Validation/validateComponent';
import CharComponent from './Validation/charComponent'

class App extends Component {
  state = {
    inputText: '',
    textLength: 0,
    showUser : false
  }
  txtfieldChangeListener = (event) => {
    console.log(event.target.value);
    //let valuefromText = event.target.value;
    this.setState({inputText: event.target.value, textLength: event.target.value.length});
  }
  toggleUserHandler = () => {
    const doesShow = this.state.showUser;
    this.setState({showUser : !doesShow});

  }
  deleteUserHandler = (charIndex) => {
  //  const users = this.state.users.slice();
      const newText = [...this.state.inputText];


       newText.splice(charIndex, 1);


      console.log(this.state.inputText);
      console.log(newText);

  }

  render() {
    var newlist = null;
    if (this.state.showUser){

      newlist = (
      <div>
          {this.state.inputText.split('').map((char, index) => {
          return <CharComponent
                    click = {() => this.deleteUserHandler(index)}
                    inpuText = {char}

          ></CharComponent>
          })}
      </div>
    );
    }

    return (<div className="App">
      <div>
        <label> Assignment 2 </label>
        <hr/><br/>
        <label> Enter Password : </label><input id="txtfield" type="text" onBlur={this.txtfieldChangeListener}></input>
        <br/>

      </div>
      <div>
        <Validate textLength={this.state.textLength} inputText={this.state.newAlpha}/>
      </div>
      <div>
        <button onClick = {this.toggleUserHandler}>Characters</button>
        {newlist}
      </div>
    </div>);
  }
}
export default App;

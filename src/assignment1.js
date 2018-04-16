import React, { Component } from 'react';
import classes from './css/App.css';
import './css/App.scss';

//import Person from './Person/Person';
import Useroutput from './User/UserOutput';
//import Userinput from './User/UserInput';
class App extends Component {
  state = {
  /*  persons: [
      {name : 'Max', age: 20},
      {name : 'Priya', age: 21}
    ],*/
     users: [
       {id: 'jdls', name : 'Student', password : 'stud'},
       {id: 'lslf', name : 'Priya', password : 'yellow'}
     ],
     showUser: false
  }

/*  swithNameHandler = (newName) => {
    //console.log("Clicked");
    // Don't do this..this.state.persons[0].name ='Mia';
    this.setState({
      persons: [
      {name : newName , age: 20},
      {name : 'Priya', age: 21}
    ]
  })
  }*/
  nameChangeHandler = (event, id) => {
    const userIndex = this.state.users.findIndex(p => {
      return p.id === id;
    });

    const user = {
      ...this.state.users[userIndex]
    };

    //const user = Object.assign({}, this.state.users[userIndex]);

    user.name = event.target.value;

    const users = [...this.state.users];
     users[userIndex] = user;

     this.setState({users : users})


  }
/*  userinputChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })

  }*/
  toggleUserHandler = () => {
    const doesShow = this.state.showUser;
    this.setState({showUser : !doesShow});

  }
  deleteUserHandler = (userIndex) => {
  //  const users = this.state.users.slice();
    const users = [...this.state.users];

    users.splice(userIndex, 1);
    this.setState({users: users})
    console.log(this.state.users[userIndex].name);
    console.log(userIndex);
  }

  render() {



    let users = null;
    let btnClass = '';
    if(this.state.showUser){
      users = (
<div>
           {this.state.users.map((user, index) => {
            return <Useroutput click = {() => this.deleteUserHandler(index)}
              name = {user.name}
              password = {user.password}
              key = {user.id}
              changed = {(event) => this.nameChangeHandler(event, user.id)}/>

          })}
</div>

      );
      btnClass = classes.Red;
    }
    return (
      <div className={classes.App}>
        <div>
          <h1 className={classes.bold}> Assignment 1 </h1>
          <hr/><br/>
          <button className= {btnClass} onClick = {this.toggleUserHandler}>To see Users</button>
          {users}
          <hr/><br/>
        </div>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1', null), 'React guide!!!');
  }
}

export default App;

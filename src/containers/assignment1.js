import React, { PureComponent } from 'react';
import './css/App.scss';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';

//import Person from './Person/Person';
import Users from '../components/Users/Users';
//import Userinput from './User/UserInput';
class App extends PureComponent {
  constructor(props){
    super(props);
    console.log("[Assigment1.js] Inside Constructor", props);
    this.state = {
      users: [
        {id: 'jdls', name : 'Student', password : 'stud'},
        {id: 'lslf', name : 'Priya', password : 'yellow'}
      ],
      showUser: false
      }
    }

  componentWillMount() {
    console.log('[Assignment1.js] Inside componentWillMount');
  }
  componentDidMount() {
    console.log('[Assignment1.js] Inside componentDidMount');
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE Assignment1.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.users !== this.state.users || nextState.showUser !== this.state.showUser;
  // }
  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE Assignment1.js] Inside componentWillUpdate()', nextProps, nextState);
  }
  componentDidUpdate(){
    console.log('[UPDATE Assignment1.js] Inside componentDidUpdate()');
  }
//  state = {
//  /*  persons: [
//      {name : 'Max', age: 20},
//      {name : 'Priya', age: 21}
//    ],*/
//     users: [
//       {id: 'jdls', name : 'Student', password : 'stud'},
//       {id: 'lslf', name : 'Priya', password : 'yellow'}
//     ],
//     showUser: false
//  }

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
    console.log('[Assignment1.js] Inside render');
    let users = null;
    if(this.state.showUser){
      users = <Users
    users = {this.state.users}
    clicked = {this.deleteUserHandler}
    changed = {this.nameChangeHandler}
    />
    }
    return (

        <Aux>
          <button onClick = {() => {this.setState({showUser: true})}}>Show Users </button>
          <Cockpit
            AssignTitle = {this.props.title}
            showUser = {this.state.showUser}
            clicked = {this.toggleUserHandler}/>
          {users}
          <hr/><br/>
        </Aux>

    );
    //return React.createElement('div',{className:'App'},React.createElement('h1', null), 'React guide!!!');
  }
}

export default App;

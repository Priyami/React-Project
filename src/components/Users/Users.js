import React, { Component } from 'react';
import User from './User/UserOutput';

class Users extends Component{
  constructor(props){
    super(props);
    console.log("[Users.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log('[Users.js] Inside componentWillMount');
  }
  componentDidMount() {
    console.log('[Users.js] Inside componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Users.js] Inside componentWillReceiveProps()', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE Users.js] Inside shouldComponentUpdate()', nextProps, nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE Users.js] Inside componentWillUpdate()', nextProps, nextState);
  }
  componentDidUpdate(){
    console.log('[UPDATE Users.js] Inside componentDidUpdate()');
  }
  render (){
    console.log('[Users.js] Inside render');
    return this.props.users.map((user, index) => {
            return <User
              click = {() => this.props.clicked(index)}
                name = {user.name}
                password = {user.password}
                key = {user.id}
              changed = {(event) => this.props.changed(event, user.id)}/>

    });
  }

}

export default Users;

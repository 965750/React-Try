import React, { Component } from 'react';
import Child from './components/child';
import './App.css';

class App extends Component {
  
  state = {
    users: [
      {key: 'a1', name: 'john', age: 20},
      {key: 'a2', name: 'peter', age: 30},
      {key: 'a3', name: 'jill', age: 25}
    ]
  }

  deleteUser = (index, e) => {
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({users: users})
  }

  changeUserName = (key, e) => {
    const index = this.state.users.findIndex((user)=>{
      return user.key === key
    });
    
    const user = Object.assign({}, this.state.users[index]);
    
    user.name = e.target.value;

    const users = Object.assign([], this.state.users);

    users[index] = user;
    this.setState({users:users});
  }

  render() {
    return (
      <div className="App">
        <ul>
        {
          this.state.users.map((user, index)=>{
            return(
              <Child 
                key={user.key}
                age={user.age}
                delEvent={this.deleteUser.bind(this, index)}
                changeEvent={this.changeUserName.bind(this, user.key)}
              >{user.name}</Child>
            )     
          })
        }
        </ul>
      </div>
    );
  }
}

export default App;

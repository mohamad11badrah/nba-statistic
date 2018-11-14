import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApiURL from './apiClient';
import $ from 'jquery';
import Header from './components/Header'

class App extends Component {
  state = {
    userID: null,
    userName: null,
  }
  componentDidMount() {
    return $.ajax ({
      url: ApiURL('/user'),
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      success: data => this.setState({ userID: data[0].id , userName: data[0].name}),
      error: error => console.log(error),
    });
  }

  render() {    
    console.log(this.state);
    
    return (
      <div className="App">
        <header className="App-header">
          <Header></Header>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>user name is {this.state.userName}</p>
            <p>user ID is {this.state.userID}</p>
          </a>
        </header>
      </div>
    );
  }
}

export default App;

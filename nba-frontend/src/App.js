import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApiURL from './apiClient';
import $ from 'jquery';
import Header from './components/Header'
import Home from './components/Home'

class App extends Component {
  // state = {
  //   userID: null,
  //   userName: null,
  // }
  // componentDidMount() {
  //   return $.ajax ({
  //     url: ApiURL('/user'),
  //     type: 'GET',
  //     dataType: 'json',
  //     contentType: 'application/json',
  //     success: data => this.setState({ userID: data[0].id , userName: data[0].name}),
  //     error: error => console.log(error),
  //   });
  // }
  render() {    
    return (
      <div>
          <Header></Header>
          <Home></Home>
      </div>
    );
  }
}

export default App;

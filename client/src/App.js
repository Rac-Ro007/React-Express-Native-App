import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  // state property to store state while using obejcts from ex
  state = {
    hello:null
  }
   // Renders automatically on start of REAct app
  componentDidMount() {
    axios.get('/hello')
     .then(res => this.setState({ hello : res.data }))
     .catch(err => console.log(err))
  }

  render() {
  return (
    <div>
      { this.state.hello 
      ? <div> {this.state.hello} </div>
     : null }
    </div>
  );
 }
}

export default App;

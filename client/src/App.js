import React, { Component } from 'react';
import axios from 'axios';
import LoginForm from './components/LoginForm';
import './css/application.css';

import { BrowserRouter as Router, Route} from "react-router-dom";


class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data[0].name) // The entire response from the Rails API

      console.log(response.data[0].name) // Just the message
      this.setState({
        message: response.data[0].name
      });
    }) 
  }


  render() {
    return (
      <div className="App">
        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>    
      </div>
    );
  }
}

function Login () {
  return (
    <LoginForm/>
  )
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default AppRouter;

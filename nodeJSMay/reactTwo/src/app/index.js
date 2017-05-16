import React, { Component } from 'react';

import{ render } from 'react-dom';

import Fetch from 'whatwg-fetch';

import { Header } from './components/Header';
import { Home } from './components/Home';
import {Mars } from './components/Mars';

import api from './utilities/api';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      rovers: [],
      roverName: []
    
    }
  }

  componentWillMount(){
    api.getRovers().then((res) =>{
      this.setState({
        rovers: res.rovers,
        roverName: res.rovers[0].name
      })
    })
  }
  

  render(){
  
    var user = {
      name: 'Robbie',
      hobbies:['football', 'nonsense','laughing']
    };
    return(
        <div className='container'>

          <Header/>

          <h1>NASA Mars Rover</h1>

          

          <Home name={'Adri'} age={78} user={user}/>

          <Mars />

          <p>{this.state.roverName}</p>
          
        </div>
      );
  }

}

render(<App/>, window.document.getElementById('app'));
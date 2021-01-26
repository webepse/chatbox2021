import React, { Component } from 'react';
import './App.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message'

class App extends Component {

  render() { 
    return ( 
      <div className="box">
        <div>
          <div className="messages">
            <div className="message">
              <Message />
              <Message />
              <Message />
            </div>
          </div>
        </div>
        <Formulaire />
      </div>
     );
  }
}
 
export default App;

import React, { Component, createRef } from 'react';
import './App.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message'

// Firebase
import base from './base'

// Animations 
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './animations.css'

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  messagesRef = createRef()

  // au moment ou l'application se monte 
  componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }
  // pour faire remonter ma page à chaque fois que j'ai un nouveau message
  componentDidUpdate () {
    // faire référence à un élément 
    const ref = this.messagesRef.current // fait référence à l'élément sur lequel la ref est appelée
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = message => {
    const messages = {...this.state.messages}
    messages[`message-${Date.now()}`] = message
    Object.keys(messages).slice(0,-10).forEach(key => {
      messages[key] = null
    })
    this.setState({messages})
  }

  isUser = pseudo => pseudo === this.state.pseudo

  render() { 
    const messages = Object.keys(this.state.messages).map(
      key => (
        <CSSTransition
          key={key}
          timeout={200}
          classNames='fade'
        >
          <Message 
            isUser={this.isUser}
            pseudo={this.state.messages[key].pseudo}
            message={this.state.messages[key].message}
          />
        </CSSTransition>
      )
    )


    return ( 
      <div className="box">
        <div>
          <div className="messages" ref={this.messagesRef}>
            <TransitionGroup className="message">
             {messages}
            </TransitionGroup>
          </div>
        </div>
        <Formulaire 
          length={140}
          pseudo={this.state.pseudo}
          addMessage={this.addMessage}
        />
      </div>
     );
  }
}
 
export default App;

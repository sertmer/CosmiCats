import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super()

    this.state = {
      name: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form>
        <input 
          type='text' 
          name='name' 
          value='this.state.name' 
          onClick={ (e) => this.handleChange(e) }
        />
      </form>
    )
  }
}

export default Login;
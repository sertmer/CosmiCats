import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hasAgreed: false
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <section>
        <article>
          <h2>Our Belief</h2>
          <p>Cats are Aliens</p>
        </article>
          <form>
            <input type='radio' name='agree'></input>
            <label htmlFor='agree'>I Agree</label>
            <label htmlFor='name'>Name: </label>
            <input 
              type='text' 
              name='name' 
              value={this.state.name}
              onChange={ (e) => this.handleChange(e) }
            />
            <button type='button'>Start Research</button>
          </form>
        </section>
    )
  }
}

export default Login;
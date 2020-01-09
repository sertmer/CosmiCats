import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

export class Login extends Component {
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

  handleClick = (e) => {
    this.setState({[e.target.name]: true})
  }

  render() {
    return (
      <section className='mission-card'>
        <article className='belief-card card'>
          <h2 >Our Belief</h2>
          <p>Cats are Aliens</p>
        </article>
          <form className='binding-contract card'>
            <label htmlFor='name'>Name: </label>
            <input 
              type='text'
              className='user-name' 
              name='name' 
              value={this.state.name}
              onChange={(e) => this.handleChange(e)}
            />
            <div>
              <input 
                className='agree-radio' 
                type='radio' 
                name='hasAgreed' 
                onClick={(e) => this.handleClick(e)}
              />
              <label htmlFor='hasAgreed'>I Agree</label>
            </div>
            <Link to={'/research'}>
              <button type='button'>Start Research</button>
            </Link>
          </form>
        </section>
    )
  }
}

export default Login;
import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../../actions';

export class Login extends Component {
  constructor(props) {
    super(props)

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
    const { setUser } = this.props
    const { name, hasAgreed } = this.state
    return (
      <section className='mission-card'>
        <article className='belief-card card'>
          <div className='facts'>
            <h2 className='belief-header'>Facts</h2>
            <p className='login-p'>cats were once worshipped as gifts from the gods</p>
            <p className='login-p'>science cannot explain the purr of a cat</p>
            <p className='login-p'>cats can see the unseeable</p>
            <p className='login-p'>cats always land on their feet, due to their innate anti-gravity properties</p>
            <p className='login-p'>if you hold a cats ears back, they look like aliens, dawg</p>
          </div>
          <h2 className='belief-header'>Terms of Use</h2>
          <p className='login-p'>due to the sensitive nature and the secretive acquisition of the information you are about to research, you must agree to utmost secrecy.</p>
        </article>
          <form className='binding-contract'>
            <label htmlFor='name' hidden>Name: </label>
            <input 
              type='text'
              className='user-name-input' 
              name='name' 
              value={this.state.name}
              placeholder='Your Name'
              onChange={(e) => this.handleChange(e)}
            />
            <div className='radio-div'>
              <input 
                className='agree-radio' 
                type='radio' 
                name='hasAgreed' 
                onClick={(e) => this.handleClick(e)}
              />
              <label htmlFor='hasAgreed' className='agree-label'>I Agree</label>
            </div>
            { name && hasAgreed ? 
              <Link to={'/research'}>
                <button className='start-btn' type='button' onClick={() => setUser(name)}>Start Research</button>
              </Link> 
              :
              <p className='complete-p'>Complete the form to proceed</p>
            }
          </form>
        </section>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})

export default connect(null, mapDispatchToProps)(Login);
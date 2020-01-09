import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../../actions'

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
            { name && hasAgreed ? 
              <Link to={'/research'}>
                <button type='button' onClick={() => setUser(name)}>Start Research</button>
              </Link> 
              :
              <p>Complete the form to proceed</p>
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
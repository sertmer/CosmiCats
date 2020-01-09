import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../../actions';
import './Header.scss';
import alien from '../../images/alien.svg';
import cat from '../../images/cat.svg';

export const Header = ({user, setUser}) => {
  return (
    <header>
      <h1 className='cccr-header'>The Center for CosmiCat Research</h1>
      { user && <div>
          <h2>Welcome Dr.{user}</h2>
          <Link to='/'>
            <button onClick={() => setUser('')}>Sign Out</button>
          </Link>
        </div>
      }
      <div className='icon-div'>
        <img className="icon" src={alien} alt='small green alien icon' />
        <p className='triple-equals'>===</p>
        <img className="icon" src={cat} alt='small green cat icon' />
      </div>
    </header>
  )
}

export const mapStateToProps = state => ({
  user: state.user
})

export const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
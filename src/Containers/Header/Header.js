import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../../actions';
import './Header.scss';
import alien from '../../images/alien.svg';
import cat from '../../images/cat.svg';

export const Header = ({ user, setUser, evidence }) => {
  return (
    <header>
      <h1 className='cccr-header'>The Center for CosmiCat Research</h1>
      {user &&
        <div className='user-name'>
          <h2 className='header-h2'>Welcome Dr. {user}</h2>
          <Link to='/'>
            <button className='signout-btn' onClick={() => setUser('')}>Sign Out</button>
          </Link>
        </div>
      }
      {evidence.length > 0 && 
        <Link to='/evidence'>
          <button className='evidence-btn' type='button'>Evidence</button>
        </Link>
      }
      <div className='icon-div'>
        <img className="icon" src={alien} alt='small green alien icon' />
        <img className="icon" src={cat} alt='small green cat icon' />
      </div>
    </header>
  )
}

export const mapStateToProps = state => ({
  user: state.user,
  evidence: state.evidence
})

export const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
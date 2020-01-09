import React from 'react';
import { connect } from 'react-redux';
import './Header.scss';
import alien from '../../images/alien.svg';
import cat from '../../images/cat.svg';

export const Header = ({user}) => {
  return (
    <header>
      <h1 className='cccr-header'>The Center for CosmiCat Research</h1>
      <h1>Welcome Dr.{user}</h1>
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

export default connect(mapStateToProps)(Header);
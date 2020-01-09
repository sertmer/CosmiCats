import React from 'react';
import './Header.scss';
import alien from '../../images/alien.svg';
import cat from '../../images/cat.svg';

export const Header = () => {
  return (
    <header>
      <h1 className='cccr-header'>The Center for CosmiCat Research</h1>
      <div className='icon-div'>
        <img className="icon" src={alien} alt='small green alien icon' />
        <p className='triple-equals'>===</p>
        <img className="icon" src={cat} alt='small green cat icon' />
      </div>
    </header>
  )
}

export default Header;
import React from 'react';
import './Header.scss';
import alien from '../../images/alien.svg';
import cat from '../../images/cat.svg';

const Header = () => {
  return (
    <header>
      <h1>The Center for CosmiCat Research</h1>
      <div>
        <img className="icon" src={alien} alt='small green alien icon' />
        <img className="icon" src={cat} alt='small green cat icon' />
      </div>
    </header>
  )
}

export default Header;
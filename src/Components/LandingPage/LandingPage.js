import React from 'react';
import './LandingPage.scss';
import { Link } from 'react-router-dom';


export const LandingPage = () => {
  return (
    <section>
      <h2>The Truth has Nine Lives</h2>
      <Link to={'/login'}>
        <button type='button' className='Login-button'>Join Us</button>
      </Link>
    </section>
  )
}

export default LandingPage;
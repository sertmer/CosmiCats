import React from 'react';
import { Link } from 'react-router-dom'
import './NoURLMatch.scss'

export const NoURLMatch = () => {
  return (
    <div className='no-match-div'>
      <h2 className='no-match-h2'>No matching url was found</h2>
      <Link to='/'>
        <button type='button' className='no-match-btn'>click here to go home</button>
      </Link>
    </div>
  )
}

export default NoURLMatch;
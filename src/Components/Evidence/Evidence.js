import React from 'react';
import './Evidence.scss';

export const Evidence = ({evidence}) => {
  return (
    <article className='evidence-card'>
      <img className='evidence-img' src={evidence.img}/>
      <div className='evidence-details'>
        <p>{evidence.id}</p>
        <p>{evidence.dateCreated}</p>
        <button type='button'>delete</button>
      </div>
    </article>
  )
}

export default Evidence;
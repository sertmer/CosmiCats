import React from 'react';
import './Research.scss'

export const Research = ({ caseStudy }) => {
  return (
    <article className='research'>
      <img className='research-img'
        alt='Outer space from Nasas files'
        src={caseStudy.img}
      />
      <div className='research-details'>
        <h2>nasa id</h2>
        <p>{caseStudy.id}</p>
        <h2>date taken</h2>
        <p>{caseStudy.dateCreated}</p>
        <h2>photographer</h2>
      </div>
    </article>
  )
}

export default Research;
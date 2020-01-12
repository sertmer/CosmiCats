import React from 'react';
import './Research.scss'

export const Research = ({ caseStudy }) => {
  return (
    <article>
        <img 
          alt='Outer space from Nasas files'
          src={caseStudy.img}
        />
        <h2>nasa id</h2>
        <p>{caseStudy.id}</p>
        <h2>date taken</h2>
        <p>{caseStudy.dateCreated}</p>
        <h2>photographer</h2>
      </article>
  )
}

export default Research;
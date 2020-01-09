import React from 'react';
import './ResearchContainer.scss';
import Research from '../Research/Research'

export const ResearchContainer = () => {
  return(
    <section>
      <Research />
      <article>
        <h2>nasa id</h2>
        <p>nas123</p>
        <h2>date taken</h2>
        <p>december</p>
        <h2>photographer</h2>
      </article>
    </section>
  )
}

export default ResearchContainer;
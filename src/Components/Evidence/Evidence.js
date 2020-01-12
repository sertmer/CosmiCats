import React from 'react';
import { connect } from 'react-redux';
import { removeFromEvidence } from '../../actions/';
import './Evidence.scss';

export const Evidence = ({evidence, removeFromEvidence}) => {
  return (
    <article className='evidence-card'>
      <img className='evidence-img' src={evidence.img}/>
      <div className='evidence-details'>
        <h2>Nasa Identification Number</h2>
        <p>{evidence.id}</p>
        <h2>Date Captured</h2>
        <p>{evidence.dateCreated}</p>
        <button 
          type='button'
          onClick={() => removeFromEvidence(evidence)}
        >delete</button>
      </div>
    </article>
  )
}

export const mapDispatchToProps = dispatch => ({
  removeFromEvidence: evidence => dispatch(removeFromEvidence(evidence))
})

export default connect(null, mapDispatchToProps)(Evidence);
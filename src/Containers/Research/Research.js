import React from 'react';
import { connect } from 'react-redux';
import { addToEvidence } from '../../actions'
import './Research.scss';
import PropTypes from 'prop-types';

export const Research = ({ caseStudy, addToEvidence }) => {
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
        <button
            className='save-to-faves-btn'
            type='button' 
            onClick={() => addToEvidence(caseStudy)}
          > save to evidence
          </button>
      </div>
    </article>
  )
}

export const mapDispatchToProps = dispatch => ({
  addToEvidence: evidence => dispatch(addToEvidence(evidence))
})

export default connect(null, mapDispatchToProps)(Research);

Research.propTypes = {
  caseStudy: PropTypes.object,
  addToEvidence: PropTypes.func
}
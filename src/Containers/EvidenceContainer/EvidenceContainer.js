import React from 'react';
import './EvidenceContainer.scss';
import Evidence from '../Evidence/Evidence';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const EvidenceContainer = ({evidence}) => {
  const displayEvidence = evidence.map(evi => {
    return <Evidence evidence={evi} key={evi.id} />
  })
  return (
    <section className='evidence-container'>
      {displayEvidence}
      {displayEvidence.length === 0 && 
      <Link to='/research'>
        <div className='no-evidence-div'>
          <h2 className='evidence-h2'>You have no Evidence</h2>
          <button className='no-evidence-btn'>Find Evidence</button>
        </div>
      </Link>
      }
    </section>
  )
}

export const mapStateToProps = state => ({
  evidence: state.evidence
})

export default connect(mapStateToProps)(EvidenceContainer);

EvidenceContainer.propTypes = {
  evidence: PropTypes.array
}
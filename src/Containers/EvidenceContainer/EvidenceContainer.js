import React from 'react';
import './EvidenceContainer.scss';
import Evidence from '../Evidence/Evidence';
import { connect } from 'react-redux';

export const EvidenceContainer = ({evidence}) => {
  const displayEvidence = evidence.map(evi => {
    return <Evidence evidence={evi} key={evi.id} />
  })
  return (
    <section className='evidence-container'>
      {displayEvidence}
    </section>
  )
}

export const mapStateToProps = state => ({
  evidence: state.evidence
})

export default connect(mapStateToProps)(EvidenceContainer);
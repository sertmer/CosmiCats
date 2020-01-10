import React, { Component } from 'react';
import { getNasaImages } from '../../apiCalls';
import { setNasaImages } from '../../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './LandingPage.scss';

export class LandingPage extends Component {
  
  componentDidMount() {
    getNasaImages()
      .then(data => console.log(data))

  }

  render() {
    return (
      <section>
        <h2>The Truth has Nine Lives</h2>
        <Link to={'/login'}>
          <button type='button' className='Login-button'>Join Us</button>
        </Link>
      </section>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  setNasaImages: images => dispatch(setNasaImages(images))
})

export default connect(null, mapDispatchToProps)(LandingPage);
import React, { Component } from 'react';
import { getNasaImages, getCatsInSpace } from '../../utils/apiCalls';
import { setNasaImages, setCatImages } from '../../actions/';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './LandingPage.scss';

export class LandingPage extends Component {
  
  componentDidMount() {
    getNasaImages()
      .then(data => this.cleanData('nasa', data))
      .then(data => this.props.setNasaImages(data))
      .catch(err => console.log(err))
    this.createCatsArray()
  }

  createCatsArray = () => {
    let cats = []
    for (let i = 0; i < 40; i++) {
      getCatsInSpace()
        .then(data => cats.push(this.cleanData('cats', data)))
    }
    this.props.setCatImages(cats)
  }

  cleanData = (type, data) => {
    let cleanedData;
    if (type === 'nasa') {
      return data.collection.items.map(item => {
        return cleanedData = {
            img: item.links[0].href,
            id: item.data[0].nasa_id,
            dateCreated: item.data[0].date_created
          }
        }
      )
    } else {
      return cleanedData = {
        img: data[0].url,
        id: data[0].id,
        dateCreated: 'censored'
      }
    }
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
  setNasaImages: images => dispatch(setNasaImages(images)),
  setCatImages: images => dispatch(setCatImages(images))
})

export default connect(null, mapDispatchToProps)(LandingPage);
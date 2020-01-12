import React, { Component } from 'react';
import './ResearchContainer.scss';
import Research from '../Research/Research'
import { connect } from 'react-redux'

export class ResearchContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      images: []
    }
  }

  componentDidMount() {
    this.combineArrays()
  }

  combineArrays = () => {
    const { nasaImages, catImages } = this.props
    const combined = nasaImages.concat(catImages)
    const combinedAndShuffled = this.shuffleArray(combined)
    this.setState({images: combinedAndShuffled})
  }

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  render() {
    const { counter, images } = this.state
    return(
      <section className='research-container'>
        {images[counter] && <Research caseStudy={images[counter]} />}
        <div className='button-container'>
          {counter < 139 && <button
            className='research-btn'
            type='button' 
            onClick={() => this.setState({counter: this.state.counter + 1})}> view next 
          </button>}
          {counter > 0 && <button
            className='research-btn'
            type='button' 
            onClick={() => this.setState({counter: this.state.counter - 1})}> view previous
          </button>}
        </div>
      </section>
    )
    }
}

export const mapStateToProps = state => ({
  nasaImages: state.nasaImages,
  catImages: state.catImages
})

export default connect(mapStateToProps)(ResearchContainer);
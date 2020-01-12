import React, { Component } from 'react';
import './Research.scss'
import { connect } from 'react-redux'

export class Research extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      images: []
    }
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
    return (
      <article>
          <h2>nasa id</h2>
          <p>nas123</p>
          <h2>date taken</h2>
          <p>december</p>
          <h2>photographer</h2>
          <button onClick={() => this.combineArrays()}></button>
      </article>
    )
  }
}

export const mapStateToProps = state => ({
  nasaImages: state.nasaImages,
  catImages: state.catImages
})

export default connect(mapStateToProps)(Research);

// How to create an interface that just shows one piece of research at a time
// need a counter to keep track of which index to access next
// need a random number to know which array to access (nasa or cats)



// ResearchContainer handles the choice of what index and which array to 
// get the img from?
// pass that image to the research component as props?

// or

// Research handles that choice? would have to have some helper methods

// or 

// research has a counter that keeps track of how many times it's been mounted,
// every time the counter can be divided by 3 or whatever, without a float, it
// then gets its image from the cats container? use state to keep track of it?
// put it in the global store?

// or

// have two different components - one for nasa images, one for cat images, and 
//use a method on container / research to decide which one to render

// or 

// treat this like a regular old idea box, and throw all the research on the 
// page at once. 
/////// if this option, how do I mix up the cats in the space to seem them semi
/////// frequently? 
////////// create a comibined array?

// ☑️ get the image object to have the same data structure, before I put them in store.

// on the research component I need to concat and shuffle the arrays in one.

//use the couter to determine which index to access the array at, when rendering the research component.


// onClick={() => this.setState({counter: this.state.counter + 1})}
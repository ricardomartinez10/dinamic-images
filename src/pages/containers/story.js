import React, { Component } from 'react'
import StoryLayout from '../components/story-layout'
class Story extends Component {
  render(){
    return(
          <StoryLayout {...this.props} />

    )
  }
}
export default Story;

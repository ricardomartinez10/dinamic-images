import React, {Component} from 'react';
import Story from '../containers/story';
import Event from '../containers/schedule';
import html2canvas from 'html2canvas';


class MainStory extends Component {
componentDidMount(){

}
  render(){
    return(
        <div>
          {
        this.props.data.map((item)=>{
        return (
          <div>
            <Story
              key={item.id}
              {...item}
            />
          <Event
            key={item.id+1}
            {...item}
          />
          </div>
      )

     })
       }
        </div>
    )
  }
}

export default MainStory;

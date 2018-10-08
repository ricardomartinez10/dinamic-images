import React, {Component} from 'react';
import EventsLayout from '../components/event-layout'
import Event from './schedule.js'

class Events extends Component {
render(){
  return(
    <EventsLayout>
      {this.props.children}
    </EventsLayout>
  )
}
}

export default Events;

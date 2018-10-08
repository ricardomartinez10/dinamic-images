import React, { Component } from 'react'
import ScheduleLayout from '../components/schedule-layout'
class Schedule extends Component {
  render(){
    return(
          <ScheduleLayout {...this.props} />
    )
  }
}
export default Schedule;

import React, { Component } from 'react';
import Story from './story'
import data from '../../../api.json'
import HomeLayout from '../components/home-layout'



class Home extends Component {

  componentDidMount() {
    // html2canvas(document.querySelector(".Historia")).then(canvas => {
    //     document.body.appendChild(canvas)
    // });
  }

  render(){
    return(
     <HomeLayout>
         {this.props.children}
     </HomeLayout>
    )
  }


}
export default Home;

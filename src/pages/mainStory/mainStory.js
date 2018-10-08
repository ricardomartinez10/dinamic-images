import React, {Component} from 'react';
import Home from '../containers/home';
import Story from '../containers/story';
import Event from '../containers/schedule';
import html2canvas from 'html2canvas';
import { db } from '../../firebase/database';
class MainStory extends Component {
state={
  historias:[],
}
getHistorias(app){
  db.ref('/historias').once('value').then(function(snapshot) {
    const data = snapshot.val();
    app.setState({
      historias:data
    })
    //console.log(data);
  })
}

componentDidMount() {
this.getHistorias(this);
  }

renderizarTodas(){
  let historias=document.getElementsByClassName('Historia');
  let eventos=document.getElementsByClassName('Eventos');

  for (let i = 0; i < historias.length; i++) {
    html2canvas(historias[i]).then(canvas => {
        document.body.appendChild(canvas)
    });
  }
  for (let j = 0; j < eventos.length; j++) {
    html2canvas(eventos[j]).then(canvas => {
        document.body.appendChild(canvas)
    });
  }
}

  render(){
    return(
      <div>
        {
      this.state.historias.map((item)=>{
      return (
        <div>
          <Story
            key={item.id}
            {...item}
          />
        <Event
          key={item.id}
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

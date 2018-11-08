import React, {Component}  from 'react';
import './event-item.css';
import cargarImagen from '../../assets/assets';

import line from '../../../img/line.png'

class ModeloEvento extends Component{
 hourFormat=(time)=>{

  let newTime=time;

  if(time.split(":")[0]>12){
    let rest=time.split(":")[0]-12;
      newTime=rest+":"+time.split(":")[1];
      return newTime;
  }else {
    if(time.split(":")[0]==0){
      return "12:"+time.split(":")[1];
    }

    if(time.split(":")[0]<10){
      return newTime.substring(1, 5);
    }else {
      return newTime;
  }
  }
}

  render(){
    const iconoimg=cargarImagen(this.props.iconoDeporte);
    return(
      <div className="Torneo">
        <div className="Event-item">
            <div className="Equipos-container">
              <div className="Ic-deporte">
                <img className="Icono-img" src={iconoimg} alt=""/>
              </div>
              <div className="Equipos">
                <p>{this.props.local}</p>
                <p>{this.props.visitante}</p>
              </div>
            </div>
            <div className="Hora-container">
              <p className="Hora">{this.hourFormat(this.props.hora)}</p>
              <p className="HoraAM">{this.props.horario}</p>
            </div>
        </div>
         <div className="Line-event"></div>
        <p className="Torneo-text">{this.props.competicion}</p>
      </div>
    )
  }
}

export default ModeloEvento;

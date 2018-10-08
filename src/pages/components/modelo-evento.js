import React from 'react';
import './event-item.css';

import line from '../../../img/line.png'
function ModeloEvento(props) {
  const icono =`../../../img/${props.iconoDeporte}.png`;
  return(
    <div className="Torneo">
      <div className="Event-item">
          <div className="Equipos-container">
            <div className="Ic-deporte">
              <img className="Icono-img" src={icono} alt=""/>
            </div>
            <div className="Equipos">
              <p>{props.local}</p>
              <p>{props.visitante}</p>
            </div>
          </div>
          <div className="Hora-container">
            <p className="Hora">{props.hora}</p>
            <p className="HoraAM">{props.horario}</p>
          </div>
      </div>
       <div className="Line-event"></div>
      <p className="Torneo-text">{props.competicion}</p>
    </div>
  )

}

export default ModeloEvento;

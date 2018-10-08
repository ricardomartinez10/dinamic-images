import React from 'react'
import './schedule.css'
import line from '../../../img/line.png'
import lineDos from '../../../img/line2.png'
import ModeloEvento from './modelo-evento'



function ScheduleLayout(props) {
  const divStyle = {
   backgroundImage: `url(../../../img/${props.fondoEventos})`,
  };

  return(
    <div style={divStyle} className="Eventos">
      <div className="Events-container">
        {
      props.eventos.map((item)=>{
      return (
       <ModeloEvento
         key={item.id}
         {...item}
       />
    )

   })
     }
      </div>

      </div>
  )

}
export default ScheduleLayout;

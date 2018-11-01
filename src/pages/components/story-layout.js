import React from 'react'
import './story-styles.css'
import line from '../../../img/line.png'
import lineDos from '../../../img/line2.png'
import portadaimg from '../../../img/portada1b.png'
import cargarImagen from '../../assets/assets';

function StoryLayout(props) {

  const imagen=cargarImagen(props.fondoPortada);

  const fondoHistoria = {
 backgroundImage: `url(${imagen})`,
  };
  return(
    <div style={fondoHistoria}  className="Historia">
      <div className="Dia-container">
        <div className="Day-layaout">
          <img className="Line" src={line} alt=""/>
        <div className="Mes-container">

          <p className="Dia">{props.dia}</p>
          <div className="Mesde-container">
            <p className="De">DE</p>
            <p className="Mes">{props.mes}</p>
          </div>

        </div>
          <div className="Num-container">
            <p className="NumDia">{props.numDia}</p>
          </div>
              </div>


              <img className="LineDos" src={lineDos} alt=""/>
      </div>


  <div className="linea-gris">

  </div>




      </div>
  )

}
export default StoryLayout;

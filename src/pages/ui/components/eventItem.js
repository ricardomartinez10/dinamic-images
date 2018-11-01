import React from 'react';

function EventItem(props) {
  let styleField = {
height:60,width:'100%',display:"inline-block"
};
return(
  <div>
    <input type="text" placeholder={props.iconoDeporte}/>
    <input type="text" placeholder={props.local}/>
    <input type="text" placeholder={props.visitante}/>
    <input type="text" placeholder={props.hora}/>
    <input type="text" placeholder={props.horario}/>
    <input type="text" placeholder={props.competicion}/>
  </div>
)

}
export default EventItem;

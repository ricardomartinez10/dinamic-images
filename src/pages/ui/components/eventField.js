import React, {Component} from 'react';
import EventItem from './eventItem'
import SelectValue from '../../../assets/SelectValues'

class EventField extends Component {

  constructor(props) {
   super(props);
   this.inputField = React.createRef();
 }

state={
  deporte:this.props.iconoDeporte,
  local:this.props.local,
  visitante:this.props.visitante,
  hora:this.props.hora,
  horario:this.props.horario,
  competicion:this.props.competicion,
  idEvento:this.props.idEvent,
  nextId:this.props.size+1,
}

guardarDatos=(id)=>{
  let datos={
    "competicion":this.state.competicion,
    "hora":this.state.hora,
    "horario":this.state.horario,
    "iconoDeporte":this.state.deporte,
    "local":this.state.local,
    "visitante":this.state.visitante,
    "id":this.state.idEvento
  }
  let idActual=this.state.idEvento;
  let idHistoria=this.props.idHistoria;
  this.props.guardarEvento(datos,idActual,idHistoria);
  this.props.activarEventos(true);
}
borrarDatos=()=>{
 let idEvento=this.state.idEvento
 this.props.borrarDatos(idEvento);
}

setDefaultIcon=()=>{
  let listaDeportes=document.getElementsByClassName("mySelect");
  let index=SelectValue.getIconSport(this.state.deporte);
  listaDeportes[0].selectedIndex = index;
}



componentDidMount(){
  this.defaultSelectValue();
}

getItem=()=>{
  let datos={
    "competicion":this.state.competicion,
    "hora":this.state.hora,
    "horario":this.state.horario,
    "iconoDeporte":this.state.deporte,
    "local":this.state.local,
    "visitante":this.state.visitante,
    "id":this.state.idEvento
  }
  console.log(datos);
  return datos;
}

handleTime=(evt)=>{
 this.setState({
   hora:evt.target.value
 },()=>{
   this.props.actualizarLista(this.props.idHistoria,this.props.eventos,this.state.idEvento,this.getItem());
 })
}

handleChange=(evt)=> {
  if(evt.target.name=="hora"){
    console.log("sisas");
    let hour= evt.target.value.split(':')[0];
    if(hour>=12){
      this.setState({
        horario:"PM"
      })
    }else{
      this.setState({
        horario:"AM"
      })
    }
  }

  this.setState({
      [evt.target.name]: evt.target.value
  }, () => {
    this.props.actualizarLista(this.props.idHistoria,this.props.eventos,this.state.idEvento,this.getItem());
  });
}

defaultSelectValue = element =>{
  let index=SelectValue.getIconSport(this.state.deporte);
  this.inputField.current.selectedIndex = index;
}
handleSelect=(evt)=>{
console.log(evt.target.value);
}
render(){
  return(
    <div className="Items-Container">
    <div className="Event-title">
    <p>Evento # : {this.props.id}</p>
    </div>
    <div className="DeteiledFields">
  <select ref={this.inputField}  name="deporte" className="Data-input" onChange={this.handleChange}>
  <option value="soccer">Fútbol</option>
  <option value="basket">Basketball</option>
  <option value="nfl">Fútbol Americano</option>
  <option value="tennis">Tennis</option>
  <option value="baseball">Béisbol</option>
  <option value="volleyball">Volleyball</option>
  <option value="ciclismo">Ciclismo</option>
  <option value="patinaje">Patinaje</option>
  <option value="boxeo">Boxeo</option>
</select>
      <input className="Data-input" onChange={this.handleChange} name="local"   type="text" placeholder={this.props.local}/>
      <input className="Data-input" onChange={this.handleChange} name="visitante"   type="text" placeholder={this.props.visitante}/>
      <input  type="time"  className="Data-input" onChange={this.handleChange} name="hora" value={this.state.hora} placeholder={this.props.hora}/>
      <input className="Data-input" onChange={this.handleChange} name="competicion"   type="text" placeholder={this.props.competicion}/>
    </div>

    </div>
  )

}
}


export default EventField;

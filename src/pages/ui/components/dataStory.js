import React, { Component } from 'react'
import EventField from './eventField'
import GeneralData from './generalData';


class DataStory extends Component{
  state={
    activarEventos:this.props.activarEventos(),
    eventos:this.props.eventos,
    eventosCopia:[]
  }

  mostrarEventos=()=>{
    this.setState({
      activarEventos:!this.state.activarEventos
    })

  }
 componentDidMount(){


 }

  render(){
    let divStyle = {
      color: "white",
      fontWeight: "bold",
padding: "15px",
  background:"#F49700",
  display: "flex",
justifyContent: "space-between",
alignItems: "center"
  };

  let divButtons = {
  float:'right'
  };
  return(
    <div>
      <div className="StoryRow" style={divStyle}>
        <p>Historia: {this.props.dia} {this.props.numDia} de {this.props.mes}</p>
        <div style={divButtons}>
           <button className="Story-Control">Datos generales</button>
           <button className="Story-Control" onClick={this.mostrarEventos}>Eventos</button>
              </div>
      </div>
       <GeneralData
        dia={this.props.dia} numDia={this.props.numDia} mes={this.props.mes}
       fondoPortada={this.props.fondoPortada} fondoEventos={this.props.fondoEventos} id={this.props.id}
       actualizarPortada={this.props.actualizarPortada}
     />
      {
        this.state.activarEventos &&
        <div className="EventsRow">
          {
            this.props.eventos.map((item,index)=>{
              return(
                <EventField
                  eventos={this.props.eventos}
                  activarEventos={this.props.activarEventos}
                  actualizarEvento={this.actualizarEvento}
                  actualizarLista={this.props.actualizarLista}
                  idHistoria={this.props.idHistoria}
                  size={this.props.eventos.length}
                  idEvent={index}
                  borrarDatos={this.props.borrarDatos}
                  key={Math.random()}
                  {...item}/>
              )
            })
          }
          <EventField/>
          <div className="Save-Event-c">
            <button className="Save-Event" onClick={this.props.guardarEvento}  name="actuailzaDatos"  type="button">Actualizar</button>
          </div>
        </div>
      }
    </div>
  )
  }
}
export default DataStory;

import React, {Component} from 'react';
import './generalData.css'
import SelectValue from '../../../assets/SelectValues'
class GeneralData extends Component{
  constructor(props){
    super(props);
    this.mySelect=React.createRef();
    this.myMonth=React.createRef();
    this.selectPortada=React.createRef();
    this.selectEventos=React.createRef();
  }
  state={
    dia:this.props.dia,
    numDia:this.props.numDia,
    mes:this.props.mes,
    fondoPortada:this.props.fondoPortada,
    fondoEventos:this.props.fondoEventos,
    id:this.props.id
  }
  actualizarPortada=()=>{
    let portada={
      dia:this.state.dia,
      numDia:this.state.numDia,
      mes:this.state.mes,
      fondoPortada:this.state.fondoPortada,
      fondoEventos:this.state.fondoEventos,
      id:this.state.id
    }
    this.props.actualizarPortada(portada);
  }
  handleChange=(evt)=> {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  componentDidMount(){
    let index=SelectValue.getDay(this.state.dia);
    this.mySelect.current.selectedIndex = index;

    let indexMonth=SelectValue.getMonth(this.state.mes);
    this.myMonth.current.selectedIndex=indexMonth;

    let indexPortada=SelectValue.getFondo(this.state.fondoPortada);
    this.selectPortada.current.selectedIndex=indexPortada;

    let indexEventos=SelectValue.getFondoEventos(this.state.fondoEventos);
    this.selectEventos.current.selectedIndex=indexEventos;
  }
  render(){
    return(
      <div className="Contenedor-datos">
      <div className="Wrapper-flex">
      <div className="General-row">
        <p htmlFor="male" className="General-label">Día</p>
        <select className="General-field" name="dia" ref={this.mySelect} onChange={this.handleChange}>
        <option value="lunes">Lunes</option>
        <option value="martes">Martes</option>
        <option value="miercoles">Miércoles</option>
        <option value="jueves">Jueves</option>
        <option value="viernes">Viernes</option>
        <option value="sabado">Sabado</option>
        <option value="domingo">Domingo</option>
        </select>
        <p htmlFor="male" className="General-label">Número de Día</p>
        <input type="number" className="General-field" onChange={this.handleChange} name="numDia" placeholder={this.props.numDia}/>
      </div>

      <div className="General-row">
        <p htmlFor="male" className="General-label">Mes</p>
         <select ref={this.myMonth} className="General-field" name="mes"  onChange={this.handleChange}>
             <option value="enero">Enero</option>
             <option value="febrero">Febrero</option>
             <option value="marzo">Marzo</option>
             <option value="abril">Abril</option>
             <option value="mayo">Mayo</option>
             <option value="junio">Junio</option>
             <option value="julio">Julio</option>
             <option value="agosto">Agosto</option>
             <option value="septiembre">Septiembre</option>
             <option value="octubre">Octubre</option>
             <option value="noviembre">Noviembre</option>
             <option value="diciembre">Diciembre</option>
         </select>
        <p htmlFor="male" className="General-label">Fondo Portada</p>
        <select className="General-field" ref={this.selectPortada}  name="fondoPortada" onChange={this.handleChange}>
        <option value="portada1">Portada 1</option>
        <option value="portada2">Portada 2</option>
        <option value="portada3">Portada 3</option>
        <option value="portada4">Portada 4</option>

        <option value="portada1b">Portada 1 (Baloto)</option>
        <option value="portada2b">Portada 2 (Baloto)</option>
        <option value="portada3b">Portada 3 (Baloto)</option>
        <option value="portada4b">Portada 4 (Baloto)</option>
      </select>
      </div>

       <div className="General-row">
         <p htmlFor="male" className="General-label">Fondo Eventos</p>
         <select className="General-field" ref={this.selectEventos}  name="fondoEventos" onChange={this.handleChange}>
         <option value="eventos1">Eventos 1</option>
         <option value="eventos2">Eventos 2</option>
         <option value="eventos3">Eventos 3</option>
         <option value="eventos4">Eventos 4</option>

         <option value="eventos1b">Eventos 1 (Baloto)</option>
         <option value="eventos2b">Eventos 2 (Baloto)</option>
         <option value="eventos3b">Eventos 3 (Baloto)</option>
         <option value="eventos4b">Eventos 4 (Baloto)</option>
       </select>

     </div>
      </div>


          <div className="">
          <button className="Save-Event" onClick={this.actualizarPortada} type="button">Actualizar Portada</button>
          </div>
       </div>
    )
  }

}
export default GeneralData;

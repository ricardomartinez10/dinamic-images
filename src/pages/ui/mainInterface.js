import React, {Component} from 'react';
import html2canvas from 'html2canvas';
import ButtonGenerator from './button-generator.js'
import DinamicImages from '../mainStory/mainStory.js'
import DataStory from './components/dataStory.js'
import { db } from '../../firebase/database';
import API from '../../firebase/api';
import './mainStyles.css'
import logo from '../../../img/logo.png'


class Interfaz extends Component{
constructor(props){
  super(props);
  this.spinner=React.createRef();
}
state={
  generate:false,
  historias:[],
}
generarHistorias = () => {
this.setState({
  generate:!this.state.generate,
})
}
actualizarPortada=(data)=>{
  API.actualizarPortada(data)
}
guardarEvento=()=>{
  API.saveList();
}
borrarEvento(idEvento){
  API.borrarEvento(idEvento);
}

stopListerning(){
  API.removeObserver();
}
actualizarLista(idHistoria,lista,index,data){
  API.saveItem(idHistoria,lista,index,data);
}

componentWillMount() {
API.getHistorias(this);
  }
  activarEventos=(data)=>{
    let activo;
    if(data!=true){
      activo=false;
    }else {
      activo=true;
    }
    return true;
  }

componentDidMount(){

}
mostrarImagenes=()=>{
  this.spinner.current.style.display="flex"
  console.log("felx-mode");
  let stories=document.getElementsByClassName('Historia');
  if(stories.length==0){
    this.spinner.current.style.display="none"
    return;
  }
    this.removeStories()
    this.renderizarTodas();
}

removeStories=()=>{
    let elements = document.getElementsByTagName("canvas");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

renderizarTodas(){
  let historias=document.getElementsByClassName('Historia');
  let contPortada=0;

  for (let i = 0; i < historias.length; i++) {

    html2canvas(historias[i]).then(canvas => {
        document.body.appendChild(canvas)
    }).then(()=>{
       contPortada++;
       if(contPortada==historias.length-1){
         this.renderizarEventos();
         contPortada=0;
       }
    })
  }

}

renderizarEventos=()=>{
  let eventos=document.getElementsByClassName('Eventos');
  let contHistorias=0;
  for (let j = 0; j < eventos.length; j++) {
    html2canvas(eventos[j]).then(canvas => {
        document.body.appendChild(canvas)
    }).then(()=>{
      contHistorias++;
      if(contHistorias==eventos.length-1){
        contHistorias=0;
        this.spinner.current.style.display="none"
      }
    });
  }
}

render(){
  return(
    <div id="contenedor-principal">
    <div ref={this.spinner} className="Spinner-container">
    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
      <div className="Contenedor-titulo">
        <img src={logo} alt=""/>
        <h1 className="Titulo">Generador de historias</h1>
        <ButtonGenerator mostrarImagenes={this.mostrarImagenes} generarHistorias={this.generarHistorias}/>
      </div>

      {
        this.state.historias.map((item,index)=>{
          return(
            <DataStory
              actualizarLista={this.actualizarLista}
              actualizarEvento={this.actualizarEvento}
              stopListerning={this.stopListerning}
              activarEventos={this.activarEventos}
              idHistoria={index}
              guardarEvento={this.guardarEvento}
              actualizarPortada={this.actualizarPortada}
              borrarDatos={this.borrarEvento}
              key={Math.random()}
              {...item}/>
          )
        })
      }
      {
        this.state.generate &&
        <DinamicImages data ={this.state.historias}/>
      }

    </div>

  )
}
}

export default Interfaz;

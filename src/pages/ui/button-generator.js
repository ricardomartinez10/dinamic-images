import React, {Component} from 'react';
class ButtonGenerator extends Component{
  click = () => {

  }

render(){
  let divStyle = {
height:50,width:100,background:"#E42506",color:"white",marginRight:5
};

let buttonContainer = {
display:'flex',
};
  return(
    <div style={buttonContainer}>
      <button  className="Save-Event" onClick={this.props.mostrarImagenes}>Crear Imagenes</button>
      <button  className="Save-Event" onClick={this.props.generarHistorias}>Mostrar Historias</button>
    </div>

  )
}
}

export default ButtonGenerator;

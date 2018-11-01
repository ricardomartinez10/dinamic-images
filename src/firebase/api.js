import {db} from './database'
class Api {
  constructor(list,idStory) {
  this.list = list;
  this.idStory=idStory;
}

saveList(idHistoria){
  let currentEvent= db.ref('/historias/'+this.idStory);
  currentEvent.child('eventos').set(this.list);
}

  saveItem(idHistoria,array,index,item){
    this.idStory=idHistoria;
    this.list=array;
    this.list.splice(index, 1, item);

  }

  getHistorias(app){
    db.ref('/historias').on('value',function traerHistorias(snapshot) {
      const data = snapshot.val();
      app.setState({
        historias:data
      })

    })
  }
 removeObserver(){
   ref.off('value', traerHistorias);
 }

crearEvento(id,evento){
  let myEvent= db.ref('/historias/'+'/0'+'/eventos');
  myEvent.child(id).set(evento);
 }
actualizarPortada(data){
  let uptadateStory=db.ref('/historias/' + data.id)
        .update({ dia:data.dia, numDia:data.numDia,mes:data.mes,fondoPortada:data.fondoPortada,
        fondoEventos:data.fondoEventos});
}

 actualizarEvento(idHistoria,idEvento,evento){

 }

borrarEvento(idEvento){
let myRef=   db.ref('/historias/'+'/0'+'/eventos/');
myRef.child(idEvento).remove();
}

 }
export default new Api();

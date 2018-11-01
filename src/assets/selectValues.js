class SelectValue {
  constructor() {

  }

getFondo(fondo){
  switch (fondo) {
    case 'portada1':
    return 0
    case 'portada2':
    return 1
    case 'portada3':
    return 2
    case 'portada4':
    return 3
    case 'portada1b':
    return 4
    case 'portada2b':
    return 5
    case 'portada3b':
    return 6
    case 'portada4b':
    return 7
  }
}

getFondoEventos(eventos){
  switch (eventos) {
    case "eventos1":
    return 0;
    case "eventos2":
    return 1;
    case "eventos3":
    return 2;
    case "eventos4":
    return 3;
    case "eventos1b":
    return 4;
    case "eventos2b":
    return 5;
    case "eventos3b":
    return 6;
    case "eventos4b":
    return 7;
  }
}

 getMonth(month){
   switch (month) {
     case 'enero':
     return 0;
     case 'febrero':
     return 1;
     case 'marzo':
     return 2;
     case 'abril':
     return 3;
     case 'mayo':
     return 4;
     case 'junio':
     return 5;
     case 'julio':
     return 6;
     case 'agosto':
     return 7;
     case 'septiembre':
     return 8;
     case 'octubre':
     return 9;
     case 'noviembre':
     return 10;
     case 'diciembre':
     return 11;
   }
 }

getDay(day){
  switch (day) {
    case 'lunes':
    return 0;
    case 'martes':
    return 1;
    case 'miercoles':
    return 2;
    case 'jueves':
    return 3;
    case 'viernes':
    return 4;
    case 'sabado':
    return 5;
    case 'domingo':
    return 6;
    default:

  }
}
 getIconSport(name) {
    switch (name) {
      case 'soccer':
      return 0;
      case 'basket':
      return 1
      case 'nfl':
      return 2
      case 'tennis':
      return 3
      case 'baseball':
      return 4
      case 'volleyball':
      return 5
      case 'ciclismo':
      return 6
      case 'patinaje':
      return 7
      case 'boxeo':
      return 7

    }
  }
}
export default new SelectValue();

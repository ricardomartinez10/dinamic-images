// Portadas
import portada1 from '../../img/portada1.jpg';
import portada1b from '../../img/portada1b.png';

import portada2 from '../../img/portada2.png';
import portada2b from '../../img/portada2.png';

import portada3 from '../../img/portada3.png';
import portada3b from '../../img/portada3b.jpg';

import portada4 from '../../img/portada4.png';
import portada4b from '../../img/portada4b.png';

import portada5 from '../../img/portada5.jpg';
import portada5b from '../../img/portada5b.jpg';

import portada6 from '../../img/portada6.jpg';
import portada6b from '../../img/portada6b.jpg';

import portada7 from '../../img/portada7.jpg';
import portada7b from '../../img/portada7b.jpg';

import portada8 from '../../img/portada8.jpg';
import portada8b from '../../img/portada8b.jpg';

import portada9 from '../../img/portada9.jpg';
import portada9b from '../../img/portada9b.jpg';

import portada10 from '../../img/portada10.jpg';
import portada10b from '../../img/portada10b.jpg';

// Eventos
import eventos1 from '../../img/eventos1.png';
import eventos1b from '../../img/eventos1b.png';

import eventos2 from '../../img/eventos2.png';
import eventos2b from '../../img/eventos2b.png';

import eventos3 from '../../img/eventos3.png';
import eventos3b from '../../img/eventos3b.png';

import eventos4 from '../../img/eventos4.png';
import eventos4b from '../../img/eventos4b.png';

import eventos5 from '../../img/eventos5.png';
import eventos5b from '../../img/eventos5b.png';

// Iconos
import soccer from '../../img/soccer.png';
import nfl from '../../img/nfl.png';
import patinaje from '../../img/patinaje.png';
import baseball from '../../img/baseball.png';
import boxeo from '../../img/boxeo.png';
import basket from '../../img/basket.png';
import tennis from '../../img/tennis.png';

 function loadImage() {

}

function cargarImagen(nombre){
let img;
  switch (nombre) {
    case 'portada1':
      img=portada1;
      return img;
      break;
    case 'portada1b':
    img=portada1b;
    return img;
    break;
     case 'portada2':
     img=portada2;
     return img;
     break
     case 'portada2b':
     img=portada2b;
     return img;
     break
     case 'portada3':
     img=portada3;
     return img;
     break
     case 'portada3b':
     img=portada3b;
     return img;
     break
     case 'portada4':
     img=portada4;
     return img;
     break
     case 'portada4b':
     img=portada4b;
     return img;
     break
     case 'portada5':
     img=portada5;
     return img;
     break
     case 'portada5b':
     img=portada5b;
     return img;
     break

     case 'portada6':
     img=portada6;
     return img;
     break

     case 'portada6b':
     img=portada6b;
     return img;
     break

     case 'portada7':
     img=portada7;
     return img;
     break

     case 'portada7b':
     img=portada7b;
     return img;
     break

     case 'portada8':
     img=portada8b;
     return img;
     break

     case 'portada8b':
     img=portada8b;
     return img;
     break

     case 'portada9':
     img=portada9b;
     return img;
     break

     case 'portada9b':
     img=portada9b;
     return img;
     break

     case 'portada10':
     img=portada10b;
     return img;
     break

     case 'portada10b':
     img=portada10b;
     return img;
     break

     case 'eventos1':
       img=eventos1;
       return img;
       break;
     case 'eventos1b':
     img=eventos1b;
     return img;
     break;
      case 'eventos2':
      img=eventos2;
      return img;
      break
      case 'eventos2b':
      img=eventos2b;
      return img;
      case 'eventos3':
      img=eventos3;
      return img;
      break
      case 'eventos3b':
      img=eventos3b;
      return img;
      break
      case 'eventos4':
      img=eventos4;
      return img;
      break
      case 'eventos4b':
      img=eventos4b;
      return img;
      break
      case 'eventos5':
      img=eventos5;
      return img;
      break
      case 'eventos5b':
      img=eventos5b;
      return img;
      break

     case 'soccer':
     img=soccer;
     return img;
     break
     case 'baseball':
     img=baseball;
     return img;
     break
     case 'basket':
     img=basket;
     return img;
     break

     case 'tennis':
     img=tennis;
     return img;
     break
     case 'boxeo':
     img=boxeo;
     return img;
     break
     case 'nfl':
     img=nfl;
     return img;
     break
     case 'patinaje':
     img=patinaje;
     return img;
     break
     default:

  }
}



export default cargarImagen;

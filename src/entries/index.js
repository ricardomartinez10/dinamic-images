import React from 'react';
import ReactDOM from 'react-dom';
import data from '../../api.json';
import Interfaz from '../pages/ui/mainInterface';
const app = document.getElementById('app');


// Insertamos en una constante lo que queremos renderizar
ReactDOM.render(<Interfaz data={data}/>, app);

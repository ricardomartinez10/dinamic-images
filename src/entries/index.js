import React from 'react';
import ReactDOM from 'react-dom';
import data from '../../api.json';
import MainStory from '../pages/MainStory/mainStory';
const app = document.getElementById('app');


// Insertamos en una constante lo que queremos renderizar
ReactDOM.render(<MainStory data={data}/>, app);

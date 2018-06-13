import React from 'react';
import ReactDOM from 'react-dom';

//Importing components
import AppRouter from './routers/AppRouter'
//import styling
import 'bootstrap/dist/css/bootstrap.css';
//import 'normalize.css/normalize.css'
//import './styles/styles.scss'

const jsx = (
    <div>
        <AppRouter/>
    </div>
)

ReactDOM.render(jsx,document.getElementById('app'));

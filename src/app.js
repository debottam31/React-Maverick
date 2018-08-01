import React from 'react';
import ReactDOM from 'react-dom';

//Importing components
import AppRouter from './routers/AppRouter'
//import styling
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.min.css';
import '../public/plugins/swiper-slider/css/swiper.min.css';
import '../public/styles/styles.css'

const jsx = (
    <div>
    <AppRouter/>
    
    </div>
)


ReactDOM.render(jsx,document.getElementById('app'));

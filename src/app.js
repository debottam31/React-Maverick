import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//importing redux store 
import configureStore from './store/configurestore';
import {calculateTotal} from './actions/cartitems'
import getVisibleCartItems from './selector/selector';
//Importing components
import AppRouter from './routers/AppRouter'

//import styling
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.min.css';
import '../public/plugins/swiper-slider/css/swiper.min.css';
import '../public/styles/styles.css'

const store = configureStore();

//console.log(store.getState());

store.subscribe(()=>{
    //console.log(store.getState());
    //store.dispatch(calculateTotal());
    //console.log(getVisibleCartItems(store.getState().cartItems));

})

const jsx = (
    <Provider store ={store}>
        <AppRouter/>
    </Provider>
        
)


ReactDOM.render(jsx,document.getElementById('app'));

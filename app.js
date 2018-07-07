import React from 'react';
import ReactDOM from 'react-dom';

//Importing components
import AppRouter from './src/routers/AppRouter'
//import styling
import 'bootstrap/dist/css/bootstrap.css';

const jsx = (
    <div>
        <AppRouter/>
    </div>
)

ReactDOM.render
(
    jsx,
    document.getElementById('app')
);

// if(module.hot){
//     const NextApp = module.hot.accept('./AppRouter');
// }
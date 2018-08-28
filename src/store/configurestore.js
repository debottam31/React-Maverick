import { createStore} from 'redux';

import cartItemsReducer from  '../reducers/cartitems';

//exporting store 

export default ()=>{
    const store = createStore(
        cartItemsReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
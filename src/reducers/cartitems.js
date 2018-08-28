const cartItemDefaultState = {
    cartItems : [],
    deliveryChange : 30.00,
    totalAmount : 0,
    counter : 0
}

const cartItemsReducer = (state =cartItemDefaultState , action )=>{
    switch(action.type){
        case 'ADD_ITEM' :
            console.log('clicked Add ITEM');
            return {
                ...state,
                cartItems : [
                    ...state.cartItems,
                    action.cartItem
                ]
            }
        case 'INCREMENT_ITEM' : 
            console.log('clicked Increment ITEM');
            const newCartItems = state.cartItems.map((item)=>{
                if(item.itemId === action.itemId){
                    return {
                        ...item,
                        quantity :item.quantity+1
                    }
                }
                return item
            })
            return {
                ...state,
                cartItems : newCartItems
            }

        case 'REMOVE_ITEM' : 
            console.log('clicked Remove Item');
            return {
                ...state,
                counter : state.counter -1
            }
        default : 
            return state;
    }   
}

export default cartItemsReducer; 
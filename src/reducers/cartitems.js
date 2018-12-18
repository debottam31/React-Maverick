const cartItemDefaultState = {
    cartItems : [],
    deliveryCharge : 30.00,
    totalAmount : 0,
}

const cartItemsReducer = (state =cartItemDefaultState , action )=>{
    switch(action.type){
        case 'ADD_ITEM' :
            return {
                ...state,
                cartItems : [
                    ...state.cartItems,
                    action.cartItem
                ],
                totalAmount : state.totalAmount<=0 ? (state.deliveryCharge+ action.cartItem.price) : (state.totalAmount + action.cartItem.price)
            }
        case 'INCREMENT_ITEM' : 
            //console.log(state.deliveryCharge);
            const incrementCartItems = state.cartItems.map((item)=>{
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
                cartItems : incrementCartItems,
                totalAmount : incrementCartItems.reduce((sum, value)=>{
                    //console.log(sum);
                    return sum += (value.price * value.quantity)
                }, state.deliveryCharge)
            }

        case 'DECREMENT_ITEM' : 
            const decrementCartItems = state.cartItems.map((item)=>{
                if(item.itemId === action.itemId){
                    return {
                        ...item,
                        quantity :item.quantity-1
                    }
                }
                return item
            })
            return {
                ...state,
                cartItems : decrementCartItems,
                totalAmount : decrementCartItems.reduce((sum, value)=>{
                    return sum += (value.price * value.quantity)
                }, state.deliveryCharge)
            }
        case 'REMOVE_ITEM' :
            const restCartItems = state.cartItems.filter((item)=>{
                return item.itemId !== action.itemId
            })
            return {
                ...state,
                cartItems : restCartItems,
                totalAmount : restCartItems.reduce((sum, value)=>{
                    return sum += (value.price * value.quantity)
                }, state.deliveryCharge)
            }
        case 'CALCULATE_TOTAL' : 
            let totalAmount = state.deliveryChange;
            state.cartItems.forEach((item)=>{
                totalAmount = totalAmount+(item.price * item.quantity)
            })
            return {
                ...state,
                totalAmount
            }
        default : 
            return state;
    }   
}

export default cartItemsReducer; 
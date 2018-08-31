//Defining Actiions 
//ADD ITEMS
export const addItem = (
    {
        restaurantName = '',
        restId ='',
        itemName = '',
        itemId = '',
        itemType = '',
        quantity = 1,
        price = 0
    }={}
)=>({
    type : 'ADD_ITEM',
    cartItem : {
        restaurantName,
        restId ,
        itemName,
        itemId,
        itemType,
        quantity,
        price
    }
})

//INCREMENT_ITEM
export const incrementItem =({itemId=''}={})=>({
    type: 'INCREMENT_ITEM',
    itemId : itemId
}) 
//DECREMENT ITEMS
export const decrementItem = ({itemId =''}={})=>({
    type : 'DECREMENT_ITEM',
    itemId : itemId
})
// REMOVE ITEM
export const removeItem = ({itemId = ''}={})=>({
    type : 'REMOVE_ITEM',
    itemId : itemId
})

export const calculateTotal = ()=>({
    type : 'CALCULATE_TOTAL'
})
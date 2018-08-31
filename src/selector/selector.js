import _ from 'lodash';

const getVisibleCartItems = (cartItems)=>{

    return _.chain(cartItems).groupBy("restId").map((value, index)=> {
        return {
          restId : index,
          restaurantName : _.get(_.find(value, 'restaurantName'), 'restaurantName'),
          itemdetail : _.map(value,(data)=>{
            return {
              itemName : data.itemName,
              itemId : data.itemId,
              itemType : data.itemType,
              quantity:  data.quantity,
              price : data.price
            }
          })
        }
      }).value();

}

export default getVisibleCartItems;
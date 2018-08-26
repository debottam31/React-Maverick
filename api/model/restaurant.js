const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const RestaurantSchema = new Schema ({
    name : {
        type : String
    },
    localtion : {
        type : String
    },
    rating : {
        type  : Number,
        max : 5 ,
        min : 1
    },
    opensAt : {
        type : String
    },
    closesAt : {
        type : String
    },
    foodGenre : {
        foodType : {
            type : String
        },
        subType : {
            type : String
        }
    },
    dishItems : [{
        itemName : {
            type : String
        },
        itemType : {
            type : String
        },
        noOfPlate : {
            type  : Number,
            min : 0
        },
        qtysinglePlate : {
            type : Number,
            min : 0
        },
        price : {
            type : Number,
            min: 0
        }
    }]
});

Restaurant = mongoose.model('restaurant', RestaurantSchema);

module.exports = Restaurant;
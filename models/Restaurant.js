const mongoose = require('mongoose')

// Restaurant Schema
const RestaurantSchema = new mongoose.Schema({
    address: {
    building: {type: String,},
    street: {type: String,},
    zipcode: {type: String,}
    },
    city: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    restaurant_id:{
        type: Number,
        requied: true
    }
})

// Static Method Declaration for Querying
RestaurantSchema.static("getRestaurantByCuisine", function(value) {
    return this.find({cuisine: value})
})

// Middleware POST
RestaurantSchema.post('init', (doc) => {
console.log('%s has been initialized from the db', doc._id);
});
  
RestaurantSchema.post('validate', (doc) => {
    console.log('%s has been validated (but not saved yet)', doc._id);
});
  
RestaurantSchema.post('save', (doc) => {
console.log('%s has been saved', doc._id);
});
  
RestaurantSchema.post('remove', (doc) => {
console.log('%s has been removed', doc._id);
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema)
module.exports = Restaurant
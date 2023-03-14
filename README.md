# Restaurant Database

This is a NodeJS project that uses Express and Mongoose to create a REST API for a restaurant database.

## API Endpoints
- /restaurants - Returns all the details of the restaurants.
- /restaurants/cuisine/:cuisine - Returns all the details of the restaurants by cuisine.
- /restaurants?sortBy=ASC - Returns the selected columns of the restaurants, sorted by the restaurant ID in ascending order.
- /restaurants?sortBy=DESC - Returns the selected columns of the restaurants, sorted by the restaurant ID in descending order.
- /restaurants/Delicatessen - Returns the selected columns of the restaurants where all cuisines are equal to Delicatessen and the city is not equal to Brooklyn.


### Dependencies
- Express
- Mongoose

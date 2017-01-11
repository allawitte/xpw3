'use strict';
const Rentals = require('./rental');
class Customer {
    constructor(data){
        this._data = data;
    }

    get name(){
        return this._data.name;
    }

    get rentals(){
        return this._data.rentals
            .map(rental => new Rentals(rental));

    }
}


module.exports = Customer;
/**
 * Created by HP on 1/11/2017.
 */

'use strict';
const Rentals = require('./rental');
class Customer {
    constructor(data, movies){
        this._data = data;
        this._movies = movies;
    }

    get name(){
        return this._data.name;
    }

    get rentals(){
        return this._data.rentals
            .map(rental => new Rentals(rental, this._movies));

    }
    get totalFrequentRenterPoints(){
        let totalFrequentRenterPoints = 0;
        for (let rental of this.rentals) {
            totalFrequentRenterPoints += rental.frequentRenterPoints;
        }

        return totalFrequentRenterPoints;

    }
    get totalAmount(){
        let totalAmount = 0;
        for (let rental of this.rentals) {
            totalAmount += rental.amount;
        }

        return totalAmount;

    }
}


module.exports = Customer;
/**
 * Created by HP on 1/11/2017.
 */

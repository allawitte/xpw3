'use strict';
const Rentals = require('./rental');
class Customer {
    constructor(data, movies) {
        this._data = data;
        this._movies = movies;
    }

    get name() {
        return this._data.name;
    }

    get rentals() {
        return this._data.rentals
            .map(rental => new Rentals(rental, this._movies));

    }

    get totalFrequentRenterPoints() {
        return this.rentals
            .map(rental => rental.frequentRenterPoints)
            .reduce((sum, value) => sum + value, 0);
    }

    get totalAmount() {
        return this.rentals
            .reduce((sum, rental) => sum + rental.amount, 0);
    }
}


module.exports = Customer;
/**
 * Created by HP on 1/11/2017.
 */

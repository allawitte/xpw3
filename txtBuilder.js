'use strict';
const Customer = require('./customer');
class txtBuilder {
    constructor(customer, movies){
        this._customer = new Customer(customer, movies);
        this._movies = movies;
    }
    get buildHeader(){
        return `Rental Record for ${this._customer.name}\n`;
    }
    get buildBody(){
        let statement = '';
        for (let rental of this._customer.rentals) {
            statement += `\t${rental.movie.title}\t${rental.amount}\n`;
        }

        return statement;

    }
    get buildFooter(){
        let statement = '';
        statement += `Amount owed is ${this._customer.totalAmount}\n`;
        statement += `You earned ${this._customer.totalFrequentRenterPoints} frequent renter points\n`;
        return statement;

    }
}
module.exports = txtBuilder;
/**
 * Created by HP on 1/11/2017.
 */

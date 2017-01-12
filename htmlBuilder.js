'use strict';
const Customer = require('./customer');
class htmlBuilder {
    constructor(customer, movies){
        this._customer = new Customer(customer, movies);
        this._movies = movies;
    }
    get buildHeader(){
        return `<h1>Rental Record for <em>${ this._customer.name}</em></h1>\n`;
    }
    get buildBody(){
        let result = this._customer.rentals
            .map( rental => `<tr><td>${rental.movie.title}</td><td>${rental.amount}</td></tr>\n`)
            .reduce((a,b) => a+b, "<table>\n");
        result += "</table>\n";
        return result;
    }
    get buildFooter(){
        return [
            `<p>Amount owed is <em>${(() => this._customer.totalAmount)()}</em></p>\n`,
            `<p>You earned <em>${(() => this._customer.totalFrequentRenterPoints)()}</em> frequent renter points</p>\n`
        ]
            .reduce((a,b)=> a+b);
    }
}
module.exports = htmlBuilder;
/**
 * Created by HP on 1/11/2017.
 */

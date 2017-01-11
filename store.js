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

function txtStatement(customerArr, movies) {

    const builder = new txtBuilder(customerArr, movies);

    let statement = builder.buildHeader;
    statement += builder.buildBody;
    statement += builder.buildFooter;
    return statement;
}

function htmlStatement(customerArr, movies) {
    const customer = new Customer(customerArr, movies);
    const amount = () => customer.totalAmount;
    const frequentRenterPoints = () => customer.totalFrequentRenterPoints;
    const movie = (aRental) => aRental.movie;
    const rentalAmount = (aRental) => aRental.amount;
    let result = `<h1>Rental Record for <em>${customer.name}</em></h1>\n`;
    result += "<table>\n";
    for (let rental of customer.rentals) {
        result += `  <tr><td>${movie(rental).title}</td><td>${rentalAmount(rental)}</td></tr>\n`;
    }
    result += "</table>\n";
    result += `<p>Amount owed is <em>${amount()}</em></p>\n`;
    result += `<p>You earned <em>${frequentRenterPoints()}</em> frequent renter points</p>\n`;
    return result;
}

let customer = {
    name: "martin",
    rentals: [{
        "movieID": "F001",
        "days": 3
    }, {
        "movieID": "F002",
        "days": 1
    }]
};

let movies = {
    "F001": {
        "title": "Ran",
        "code": "regular"
    },
    "F002": {
        "title": "Trois Couleurs: Bleu",
        "code": "regular"
    }
};

console.log(txtStatement(customer, movies));
console.log(htmlStatement(customer, movies));
/**
 * Created by HP on 1/11/2017.
 */

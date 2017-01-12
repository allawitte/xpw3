'use strict';

const Customer = require('./customer');
const txtBuilder = require('./txtBuilder');

class htmlBuilder {
    constructor(customer, movies){
        this._customer = new Customer(customer, movies);
        this._movies = movies;
    }
    static get buildHeader(){
        return `<h1>Rental Record for <em>${customer.name}</em></h1>\n`;
    }
    get buildBody(){
         let result = this._customer.rentals
             .map( rental => `<tr><td>${rental.movie.title}</td><td>${rental.amount}</td></tr>\n`)
             .reduce((a,b) => a+b, "<table>\n");
        result += "</table>\n";
        return result;
    }
    get buildFooter(){
        let footerLines = [
            `<p>Amount owed is <em>${(() => this._customer.totalAmount)()}</em></p>\n`,
            `<p>You earned <em>${(() => this._customer.totalFrequentRenterPoints)()}</em> frequent renter points</p>\n`
        ];
        return footerLines
            .reduce((a,b)=> a+b);
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
    const builder = new htmlBuilder(customer, movies);
    let result = htmlBuilder.buildHeader;
    result += builder.buildBody;
    result += builder.buildFooter;
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

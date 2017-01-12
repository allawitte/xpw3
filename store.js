'use strict';

const Customer = require('./customer');
const txtBuilder = require('./txtBuilder');
const htmlBuilder = require('./htmlBuilder');
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
    let result = builder.buildHeader;
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

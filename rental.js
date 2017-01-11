'use strict';
const Calculator = require('./calculator');
class Rentals {
    constructor(data, movies) {
        this._data = data;
        this._movies = movies;
    }

    get movieID() {
        return this._data.movieID
    }

    get days() {
        return this._data.days;
    }

    get movie() {
        return this._movies[this.movieID];
    }

    get frequentRenterPoints() {
        return (this.movie.code === "new" && this.days > 2) ? 2 : 1;
    }

    get amount() {
        const calculator = new Calculator(this.days);
        return {
            "regular": calculator.amountForRegular,

            "new": calculator.amountForNew,

            "childrens": calculator.amountForChildren
        }[this.movie.code];

    }

}
module.exports = Rentals;
/**
 * Created by HP on 1/11/2017.
 */

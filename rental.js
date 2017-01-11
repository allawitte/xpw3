'use strict';
class Calculator {
    constructor(days) {
        this._days = days;
    }

    get amountForChildren() {
        let amount = 1.5;
        if (this._days > 3) {
            amount += (this._days - 3) * 1.5;
        }
        return amount;
    }

    get amountForNew() {
        return this._days * 3;
    }

    get amountForRegular() {
        let amount = 2;
        if (this._days > 2) {
            amount += (this._days - 2) * 1.5;
        }
        return amount;
    }
}
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

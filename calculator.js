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
module.exports = Calculator;
/**
 * Created by HP on 1/11/2017.
 */

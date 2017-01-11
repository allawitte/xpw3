'use strict';
class Rentals {
    constructor(data){
        this._data = data;
    }
    get movieID(){
        return this._data.movieID
    }
    get days(){
        return this._data.days;
    }
}
module.exports = Rentals;
/**
 * Created by HP on 1/11/2017.
 */

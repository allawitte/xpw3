'use strict';
class Rentals {
    constructor(data, movies){
        this._data = data;
        this._movies = movies;
    }
    get movieID(){
        return this._data.movieID
    }
    get days(){
        return this._data.days;
    }
    get movie(){
        return this._movies[this.movieID];
    }
    get frequentRenterPoints(){
        return (this.movie.code === "new" && this.days > 2) ? 2 : 1;
    }
}
module.exports = Rentals;
/**
 * Created by HP on 1/11/2017.
 */

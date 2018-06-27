import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

const STORAGE_KEY = 'favoriteFilms';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {

  constructor(public storage: Storage) {
    console.log('Hello FavoriteProvider Provider');
  }

  isFavorite(filmId) {
    return this.getAllFavoriteFilms().then(result => {
      return result && result.indexOf(filmId) !== -1;
    });
  }
 
  favoriteFilm(filmId) {
    return this.getAllFavoriteFilms().then(result => {
      if (result) {
        result.push(filmId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [filmId]);
      }
    });
  }
 
  unfavoriteFilm(filmId) {
    return this.getAllFavoriteFilms().then(result => {
      if (result) {
        var index = result.indexOf(filmId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
 
  getAllFavoriteFilms() {
    return this.storage.get(STORAGE_KEY);
  }

}

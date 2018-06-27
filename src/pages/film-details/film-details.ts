import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

import { FavoriteProvider } from '../../providers/favorite/favorite';
/**
 * Generated class for the FilmDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-film-details',
  templateUrl: 'film-details.html',
})
export class FilmDetailsPage {
  film: any;
  isFavorite = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer, public favoriteProvider: FavoriteProvider) {
    this.film = this.navParams.get('film');
    this.favoriteProvider.isFavorite(this.film.episode_id).then(isFav => {
      this.isFavorite = isFav;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmDetailsPage');
  }

  goBack() {
    this.navCtrl.pop();
  }

  shareFilm() {
    let email = {
      to: 'parvjn616@gmail.com',
      subject: 'I love this one: ' + this.film.title,
      body: 'Can you remember the opening?<br><br>\"' + this.film.opening_crawl + '\"',
      isHtml: true
    };
 
    this.emailComposer.open(email);
  }

  favoriteFilm() {
    this.favoriteProvider.favoriteFilm(this.film.episode_id).then(() => {
      this.isFavorite = true;
    });
  }

  unfavoriteFilm() {
    this.favoriteProvider.unfavoriteFilm(this.film.episode_id).then(() => {
      this.isFavorite = false;
    });
  }
}

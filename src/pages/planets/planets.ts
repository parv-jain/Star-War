import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { ApiProvider } from './../../providers/api/api';

/**
 * Generated class for the PlanetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planets',
  templateUrl: 'planets.html',
})
export class PlanetsPage {
  planets: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.planets = this.apiProvider.getPlanets();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanetsPage');
  }

  openDetails(planet) {
    this.navCtrl.push('PlanetDetailsPage', {planet: planet});
  }

}

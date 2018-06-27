import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlanetDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planet-details',
  templateUrl: 'planet-details.html',
})
export class PlanetDetailsPage {
  planet: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.planet = this.navParams.get('planet');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanetDetailsPage');
  }

}

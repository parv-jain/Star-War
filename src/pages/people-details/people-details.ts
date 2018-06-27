import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PeopleDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-people-details',
  templateUrl: 'people-details.html',
})
export class PeopleDetailsPage {
  person: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = this.navParams.get('person');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeopleDetailsPage');
  }

}

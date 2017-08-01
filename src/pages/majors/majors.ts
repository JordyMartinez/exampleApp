import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { MentorsPage } from '../mentors/mentors'
import { SearchPage } from '../search/search';
/**
 * Generated class for the MajorsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-majors',
  templateUrl: 'majors.html',
})
export class MajorsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, menu: MenuController) {
  	menu.enable(true);
}

  openMentorsPage() {
    this.navCtrl.push(MentorsPage)
  }
openSearchPage() {
    this.navCtrl.push(SearchPage)
}
}
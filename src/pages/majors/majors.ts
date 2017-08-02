import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { MentorsPage } from '../mentors/mentors';
import { EngineeringMentorsPage } from '../engineering-mentors/engineering-mentors';
import { GraphicsMentorsPage } from '../graphics-mentors/graphics-mentors';
import { MathMentorsPage } from '../math-mentors/math-mentors';
import { PhysicsMentorsPage } from '../physics-mentors/physics-mentors';
import { TheaterMentorsPage } from '../theater-mentors/theater-mentors';
import { SearchPage } from '../search/search';

import { UserDataProvider } from '../../providers/user-data/user-data';
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
  userData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, menu: MenuController, public userService: UserDataProvider) {
  	menu.enable(true);
    this.userData = this.userService.getInfo();
    console.log(this.userData);
    //menu.setUserData(this.userData);


    //this.userData = this.navParams.data;
}

  openMentorsPage() {
    this.navCtrl.push(MentorsPage, this.userData);
  }
  openEngineeringMentorsPage() {
    this.navCtrl.push(EngineeringMentorsPage)
  }
  openGraphicsMentorsPage() {
    this.navCtrl.push(GraphicsMentorsPage)
  }
  openMathMentorsPage() {
    this.navCtrl.push(MathMentorsPage)
  }
  openPhysicsMentorsPage() {
    this.navCtrl.push(PhysicsMentorsPage)
  }
  openTheaterMentorsPage() {
    this.navCtrl.push(TheaterMentorsPage)
  }
openSearchPage() {
    this.navCtrl.push(SearchPage)
}
}
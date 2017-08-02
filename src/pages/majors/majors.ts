import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { MentorsPage } from '../mentors/mentors';
import { EngineeringMentorsPage } from '../engineering-mentors/engineering-mentors';
import { GraphicsMentorsPage } from '../graphics-mentors/graphics-mentors';
import { MathMentorsPage } from '../math-mentors/math-mentors';
import { PhysicsMentorsPage } from '../physics-mentors/physics-mentors';
import { TheaterMentorsPage } from '../theater-mentors/theater-mentors';
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
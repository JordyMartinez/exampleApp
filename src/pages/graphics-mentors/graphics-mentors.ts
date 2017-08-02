import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { MentorsProvider } from '../../providers/mentors/mentors';
import { MentorProfilePage } from '../mentor-profiles/mentor-profiles';
=======
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GraphicsMentorsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
>>>>>>> 473df12460e223293d8bf70da47f26cac6eda53c

@Component({
  selector: 'page-graphics-mentors',
  templateUrl: 'graphics-mentors.html',
})
export class GraphicsMentorsPage {
<<<<<<< HEAD
  //Variables go right underneath the class declaration
  mentors: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mentorsService: MentorsProvider, public ModalController: ModalController) {
  }

  ionViewDidLoad(){
    this.mentorsService.getMentors().then((data) => {
      console.log(data);
      this.mentors = data;
    });
  }

  openMentorProfiles(mentor) {
    this.navCtrl.push(MentorProfilePage, mentor);
  }

openSearchPage() {
    this.navCtrl.push(SearchPage)
    }}
=======

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraphicsMentorsPage');
  }

}
>>>>>>> 473df12460e223293d8bf70da47f26cac6eda53c

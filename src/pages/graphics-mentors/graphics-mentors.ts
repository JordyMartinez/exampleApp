import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { MentorsProvider } from '../../providers/mentors/mentors';
import { MentorProfilePage } from '../mentor-profiles/mentor-profiles';

@Component({
  selector: 'page-graphics-mentors',
  templateUrl: 'graphics-mentors.html',
})
export class GraphicsMentorsPage {
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

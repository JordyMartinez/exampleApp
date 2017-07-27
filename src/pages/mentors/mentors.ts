import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ChrisCohenPage } from '../chris-cohen/chris-cohen';
import { VanessaSlopPage } from '../vanessa-slop/vanessa-slop';
import { SearchPage } from '../search/search';
import { MentorsProvider } from '../../providers/mentors/mentors';
import { MentorProfilePage } from '../mentor-profiles/mentor-profiles';

@Component({
  selector: 'page-mentors',
  templateUrl: 'mentors.html',
})
export class MentorsPage {
  //Variables go right underneath the class declaration
  mentors: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mentorsService: MentorsProvider, public ModalController: ModalController) {
  }

  ionViewDidLoad(){
    this.mentorsService.getMentors().then((data) => {
      console.log(data);
      this.mentors=data;
    });
  }

  openMentorProfiles(mentorid) {
    this.navCtrl.push(MentorProfilePage,{
      param1: mentorid
    });
  }
  
openVanessaSlopPage() {
    this.navCtrl.push(VanessaSlopPage)
}

openSearchPage() {
    this.navCtrl.push(SearchPage)
    }}

import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ChrisCohenPage } from '../chris-cohen/chris-cohen';
import { VanessaSlopPage } from '../vanessa-slop/vanessa-slop';
import { SearchPage } from '../search/search';
import  { MentorsProvider } from '../../providers/mentors/mentors';
// import { SteveJobsPage } from '../steve-jobs/steve-jobs';
// import { SteveWozniakPage } from '../steve-wozniak/steve-wozniak';
//import { SteveWozniakPage } from '../steve-wozniak/steve-wozniak';

/**
 * Generated class for the MentorsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-mentors',
  templateUrl: 'mentors.html',
})
export class MentorsPage {
  mentors: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public mentorsService: MentorsProvider, public ModalController: ModalController) {
  }

  ionViewDidLoad(){
    this.mentorsService.getMentors().then((data) => {
      console.log(data);
      this.mentors=data;
    });
  }

  openChrisCohenPage() {
    this.navCtrl.push(ChrisCohenPage)
  }
  
openVanessaSlopPage() {
    this.navCtrl.push(VanessaSlopPage)
}

openSearchPage() {
    this.navCtrl.push(SearchPage)
    }}

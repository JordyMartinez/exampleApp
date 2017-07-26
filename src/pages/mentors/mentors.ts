import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChrisCohenPage } from '../chris-cohen/chris-cohen';
import { VanessaSlopPage } from '../vanessa-slop/vanessa-slop';
import { SearchPage } from '../search/search';
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
// items = [
//     {id: 0, title: 'Chris Cohen' },
//     {id: 1, title: 'Vanssa Slop' },
//     {id: 2, title: 'Chris Hop'},
//     {id: 3, title: 'Erika Salmos'}

  // 'Steve Jobs',
  // 'Steve Wozniak'
// ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

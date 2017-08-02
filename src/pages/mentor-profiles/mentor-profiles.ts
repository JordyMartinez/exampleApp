import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { Platform } from 'ionic-angular';
import { SearchPage } from '../search/search';

import { MentorsProvider } from '../../providers/mentors/mentors';
import { MenteesProvider } from '../../providers/mentees/mentees';

@Component({
  selector: 'page-mentor-profiles',
  templateUrl: 'mentor-profiles.html',
})
export class MentorProfilePage {
  // mentor = {
  //   "_id": "",
  //   "first_name": "",
  //   "last_name": "",
  //   "phone_number": "",
  //   "username": "",
  //   "password": "",
  //   "major": "",
  //   "job_position": "",
  //   "education": "",
  //   "dream_career": "",
  //   "bio": "",
  //   "age": ""
  // };
  mentor: any;
  mentors: any = [];
  parameter1: any;
  sendMessage: any;
  text = {
    "number": "",
    "message": "",
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public mentorsService: MentorsProvider, public ModalController: ModalController, private smsVar: SMS, public menteesService: MenteesProvider) {
    platform.ready().then(() => {

    });
    this.mentor = this.navParams.data;
    console.log(this.mentor);
  }

  openSearchPage() {
    this.navCtrl.push(SearchPage);
  }

  sendRequest() {
    this.menteesService.addPendingMentor("598113f9d3bd990011ead498", this.mentor._id);
  }

  acceptRequest() {
    this.mentorsService.updatePendingMentee(this.mentor._id, "598113f9d3bd990011ead498");
  }

  sendSMS() {
    this.sendMessage = 'Hi ' + this.mentor.first_name + ' my name is';
    var options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: 'INTENT'  // Opens Default sms app
        //intent: '' // Sends sms without opening default sms app
      }
    }
    this.smsVar.send(this.mentor.phone_number, this.sendMessage, options)
      .then(() => {
        alert("Success!");
      }, () => {
        alert("Error");
      });
  }
  // openMap() {
  //   this.navCtrl.push(ChrisMapPage);
  // }

}

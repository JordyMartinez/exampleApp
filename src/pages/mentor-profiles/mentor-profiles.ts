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
  userData: any;
  sendMessage: any;
  text = {
    "number": "",
    "message": "",
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public mentorsService: MentorsProvider, public ModalController: ModalController, private smsVar: SMS, public menteesService: MenteesProvider) {
    platform.ready().then(() => {

    });
    this.mentor = this.navParams.data;
    //this.userData = this.navParams.get('param2');
    console.log(this.mentor);
    //console.log(this.userData);
  }

  openSearchPage() {
    this.navCtrl.push(SearchPage);
  }

  sendRequest() {
    if (this.mentor.acceptedMentees.includes('598172c2f36d2839ce8b9d1f')) {
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
    } else {
      this.menteesService.addPendingMentor('598172c2f36d2839ce8b9d1f', this.mentor._id);
      this.mentor.pendingMentees.push('598172c2f36d2839ce8b9d1f');
      this.mentorsService.getMentors().then((data) => {
        this.mentors = data;
      });
    }
  }

  acceptRequest() {
    this.mentorsService.updatePendingMentee(this.mentor._id, '598172c2f36d2839ce8b9d1f');
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

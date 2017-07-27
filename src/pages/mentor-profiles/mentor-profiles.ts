import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { Platform } from 'ionic-angular';
import { ChrisMapPage } from '../chris-map/chris-map';
import { SearchPage } from '../search/search';
import { MentorsProvider } from '../../providers/mentors/mentors';

@Component({
  selector: 'page-mentor-profiles',
  templateUrl: 'mentor-profiles.html',
})
export class MentorProfilePage {
	mentor: any;
	mentors: any;
	parameter1: any;
  text = {
    "number": "", 
    "message": "",
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public mentorsService: MentorsProvider, public ModalController: ModalController, private smsVar: SMS) {
  	    platform.ready().then(() => {

    });
  	    this.parameter1 = this.navParams.get('param1');
  }

  ionViewDidLoad(){
    this.mentorsService.getMentors().then((data) => {
      console.log(data);
      this.mentors=data;
    });
    for (let mentor of this.mentors){
    	if (this.parameter1 == mentor.id)
    		this.mentor = mentor;
    }
  }

openSearchPage() {
    this.navCtrl.push(SearchPage);
  }
  
  sendSMS(){
    console.log("hello")
    var options={
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
               intent: 'INTENT'  // Opens Default sms app
              //intent: '' // Sends sms without opening default sms app
            }
    }
    this.smsVar.send('4242076605', 'Hi ' + this.mentor.first_name +' my name is',options)
      .then(()=>{
        
      },()=>{
      
      });
  }
  openMap(){
    this.navCtrl.push(ChrisMapPage);
  }

}

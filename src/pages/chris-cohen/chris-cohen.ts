import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { Platform } from 'ionic-angular';
import { ChrisMapPage } from '../chris-map/chris-map';
import { SearchPage } from '../search/search';

/**
 * Generated class for the ChrisCohenPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-chris-cohen',
  templateUrl: 'chris-cohen.html',
})
export class ChrisCohenPage {
  text = {
    "number": "", 
    "message": "",
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,private smsVar: SMS) {
  	    platform.ready().then(() => {

    });
  }
openSearchPage() {
    this.navCtrl.push(SearchPage)
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChrisCohenPage');
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
    this.smsVar.send('4242076605', 'Hi Chris Cohen my name is',options)
      .then(()=>{
        
      },()=>{
      
      });
  }
  openMap(){
    this.navCtrl.push(ChrisMapPage);
  }

}

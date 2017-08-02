import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, NavParams, Platform, MenuClose, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MentorsProvider } from '../providers/mentors/mentors';

import { UserDataProvider } from '../providers/user-data/user-data';

import { MentorRequestsPage } from'../pages/mentor-requests/mentor-requests';
import { MenteeRequestsPage } from'../pages/mentee-requests/mentee-requests';
import { EditPage } from '../pages/edit/edit';
import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') navCtrl
  rootPage:any = LoginPage;
  mentorName: any;
  userData: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public mentorsService: MentorsProvider, public userService: UserDataProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.userData = this.userService.getInfo();
    console.log(this.userData);
  }
  setRoot() {
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();
  }

  openRequestPage(){
    this.navCtrl.push(MenteeRequestsPage);
  }

  openEditPage(){
    this.navCtrl.push(EditPage);
  }
  // signOut(){
  //   this.navCtrl.setRoot(LoginPage)
  // }

  public setUserData(userData){
    console.log("This user data is: ", userData)
  }

  
}

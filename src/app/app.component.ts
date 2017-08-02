import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, NavParams, Platform, MenuClose, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MentorsProvider } from '../providers/mentors/mentors';
<<<<<<< HEAD
import { RequestPage } from'../pages/request/request';
=======
>>>>>>> 473df12460e223293d8bf70da47f26cac6eda53c
import { EditPage } from '../pages/edit/edit';
import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') navCtrl
  rootPage:any = LoginPage;
<<<<<<< HEAD
  mentorName: any;
=======
  mentors: any;
>>>>>>> 473df12460e223293d8bf70da47f26cac6eda53c

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public mentorsService: MentorsProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  setRoot() {
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();
  }
<<<<<<< HEAD
  // ionViewDidLoad(){
  //   this.mentorsService.getMentors().then((data) => {
  //     console.log(data[0]);
  //     this.mentorName = data[0];
  //   });
  // }
  openRequestPage(){
    this.navCtrl.push(RequestPage)
  }

=======
  ionViewDidLoad(){
    this.mentorsService.getMentors().then((data) => {
      console.log(data);
      this.mentors = data;
    });
  }
  
>>>>>>> 473df12460e223293d8bf70da47f26cac6eda53c
  openEditPage(){
    this.navCtrl.push(EditPage)
  }
  // signOut(){
  //   this.navCtrl.setRoot(LoginPage)
  // }
  
}

import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, NavParams, Platform, MenuClose, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EditPage } from '../pages/edit/edit';
import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') navCtrl
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
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
  openEditPage(){
    this.navCtrl.push(EditPage)
  }
  // signOut(){
  //   this.navCtrl.setRoot(LoginPage)
  // }
  
}

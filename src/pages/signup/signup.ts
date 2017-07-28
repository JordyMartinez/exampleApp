import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { MajorsPage } from '../majors/majors';
// import { AuthService } from '../../providers/auth-service';
 
//IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignUpPage {
  loading: Loading;
  registerCredentials = { username: '', password: '' };
 
  constructor(public navCtrl: NavController, private nav: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { 
  }
  
  openMajorsPage() {
    this.navCtrl.push(MajorsPage)
  }
}
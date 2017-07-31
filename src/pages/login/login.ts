import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { MajorsPage } from '../majors/majors';
import { SignUpPage }from '../signup/signup';
import { MentorSignUpPage }from '../mentor-sign-up/mentor-sign-up';
import { MentorsProvider } from '../../providers/mentors/mentors';
// import { AuthService } from '../../providers/auth-service';
 
//IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  users: any;
  loading: Loading;
  registerCredentials = { username: '', password: '' };
 
  constructor(private nav: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public mentorsService: MentorsProvider) {
    this.mentorsService.getMentors().then((data) => {
      console.log(data);
      this.users = data;
    });
   }

  public createAccount() {
    this.nav.push(SignUpPage);
  }
 
  public login() {
    console.log(this.registerCredentials.username);console.log(this.registerCredentials.password);
    for(let user of this.users){
      if(user.username === this.registerCredentials.username && user.password === this.registerCredentials.password) {
        this.nav.setRoot(MajorsPage);
        break;
      }
    } 
    
  }
}
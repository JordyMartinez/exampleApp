import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { MajorsPage } from '../majors/majors';
import { MentorRequestsPage } from '../mentor-requests/mentor-requests';
import { SignUpPage } from '../signup/signup';

import { MentorsProvider } from '../../providers/mentors/mentors';
import { MenteesProvider } from '../../providers/mentees/mentees';
import { UserDataProvider } from '../../providers/user-data/user-data';
// import { AuthService } from '../../providers/auth-service';
 
//IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  mentors: any;
  mentees: any;
  loading: Loading;
  user: any;
  registerCredentials = { username: '', password: '' };
 
  constructor(private nav: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController, 
              public mentorsService: MentorsProvider, public menteesService: MenteesProvider, public userService: UserDataProvider) {
    this.mentorsService.getMentors().then((data) => {
      console.log(data);
      this.mentors = data;
    });
    this.menteesService.getMentees().then((data) => {
      console.log(data);
      this.mentees = data;
    });
   }

  public createAccount() {
    this.nav.push(SignUpPage);
  }
 
  public login() {
    //console.log(this.registerCredentials.username);console.log(this.registerCredentials.password);
    for(let mentor of this.mentors){
      if(mentor.username === this.registerCredentials.username && mentor.password === this.registerCredentials.password) {
        this.userService.login(mentor);
        this.user = mentor;
        this.nav.setRoot(MentorRequestsPage, this.user);
        console.log(this.user);
        break;
      }
    } 
    for(let mentee of this.mentees){
      if(mentee.username === this.registerCredentials.username && mentee.password === this.registerCredentials.password) {
        this.userService.login(mentee);
        this.user = mentee;
        this.nav.setRoot(MajorsPage, this.user);
        console.log(this.user);
        break;
      }
    } 
    
  }
}
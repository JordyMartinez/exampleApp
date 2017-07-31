import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { MajorsPage } from '../majors/majors';
import { MentorsProvider } from '../../providers/mentors/mentors';
// import { AuthService } from '../../providers/auth-service';

//IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignUpPage {
  loading: Loading;
  registerCredentials = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    phone_number: '',
    job_position: '',
    education: '',
    dream_career: '',
    bio: ''
  };

  constructor(public navCtrl: NavController, private nav: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public mentorManager: MentorsProvider) {
  }
<<<<<<< HEAD

  createMentor(mentor) {
   
  }
  openMajorsPage() {
     this.mentorManager.createMentor(this.registerCredentials)
    console.log(this.registerCredentials)
    
=======
  
  openMajorsPage() {
>>>>>>> 02110eb784eb6e1af68ef2e96d697a7753ed86ff
    this.navCtrl.push(MajorsPage)
  }
}
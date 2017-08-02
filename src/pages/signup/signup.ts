import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { MajorsPage } from '../majors/majors';
import { MentorRequestsPage } from '../mentor-requests/mentor-requests';
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
    hobbies:'',
    username: '',
    password: '',
    phone_number: '',
    job_position: '',
    education: '',
    dream_career: '',
    age: '',
    bio: ''
  };
  activeButton: any;
  role: string;
  constructor(public navCtrl: NavController, private nav: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public mentorManager: MentorsProvider) {
  }
 
  openMajorsPage() {
     this.mentorManager.createMentor(this.registerCredentials)
    console.log(this.registerCredentials)
    if (this.role == "Mentee") {
      this.navCtrl.setRoot(MajorsPage)
  }else {
     this.navCtrl.setRoot(MentorRequestsPage);
  }
  }
}
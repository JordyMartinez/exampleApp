import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { MajorsPage } from '../majors/majors';
<<<<<<< HEAD
import { MentorRequestsPage } from '../mentor-requests/mentor-requests';
=======
>>>>>>> 473df12460e223293d8bf70da47f26cac6eda53c
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
<<<<<<< HEAD
  role: string;
=======

>>>>>>> 473df12460e223293d8bf70da47f26cac6eda53c
  constructor(public navCtrl: NavController, private nav: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public mentorManager: MentorsProvider) {
  }
  setHighlight(buttonToActivate){
    this.activeButton === buttonToActivate;
  }
 
  openMajorsPage() {
     this.mentorManager.createMentor(this.registerCredentials)
    console.log(this.registerCredentials)
<<<<<<< HEAD
    if (this.role == "Mentee") {
      this.navCtrl.setRoot(MajorsPage)
  }else {
     this.navCtrl.setRoot(MentorRequestsPage);
  }
=======
    
    this.navCtrl.push(MajorsPage)
>>>>>>> 473df12460e223293d8bf70da47f26cac6eda53c
  }
}
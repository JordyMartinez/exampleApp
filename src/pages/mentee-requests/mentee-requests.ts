import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { MentorsProvider } from '../../providers/mentors/mentors';
import { MenteesProvider } from '../../providers/mentees/mentees';
import { MentorProfilePage } from '../mentor-profiles/mentor-profiles';
//This page processes requests OF MENTEES

@Component({
  selector: 'page-mentee-requests',
  templateUrl: 'mentee-requests.html',
})
export class MenteeRequestsPage {
    mentors: any;
    pendingMentors: any = [];
    pMentCopy: any = [];
    acceptedMentors: any = [];
    aMentCopy: any = [];
    userData: any;
    constructor(public navCtrl: NavController, public navParams: NavParams,
      public mentorsService: MentorsProvider, public ModalController: ModalController, public menteesService: MenteesProvider) {
      this.mentorsService.getMentors().then((data) => {
        console.log(data);
        this.mentors = data;
        console.log(this.mentors.length);
      });
      this.userData = this.navParams.data;

    }

    ionViewDidLoad() {
      for (let mentor of this.mentors) {
        console.log(mentor.username);
        if (mentor.pendingMentees.includes('598172c2f36d2839ce8b9d1f')) {
          this.pendingMentors.push(mentor);
          this.pMentCopy.push(mentor);
        } else if (mentor.acceptedMentees.includes("598172c2f36d2839ce8b9d1f")) {
          this.acceptedMentors.push(mentor);
          this.aMentCopy.push(mentor);
        }
      }
    }

    deleteMentorRequest(mentor) {
      this.menteesService.deletePendingMentor("598172c2f36d2839ce8b9d1f", mentor._id);
      for (let i = 0; i < this.pendingMentors.length; i++) {
        if (this.pendingMentors[i]._id === mentor._id)
          this.pMentCopy.splice(i, 1);
      }
      this.pendingMentors = this.pMentCopy;
    }

    openMentorProfiles(mentor) {
      this.navCtrl.push(MentorProfilePage, mentor);
    }
  }


import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MenteesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MenteesProvider {
  data: any;
  constructor(public http: Http) {
    console.log('Hello MenteesProvider Provider');
    this.data = null;
  }

  getMentees() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get('https://corvids-coachcopy.herokuapp.com/api/mentees')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  createMentee(mentee) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('https://corvids-coachcopy.herokuapp.com/api/mentees', JSON.stringify(mentee), { headers: headers })
      .subscribe(res => {
        console.log(res.json());
      });
  }

  addPendingMentor(menteeID, mentorID) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let updateInfo = {
      menteeID: menteeID,
      mentorID: mentorID
      // mentee_username: "iamkostakis",
      // mentor_username: "mentorID"
    };

    this.http.post('https://corvids-coachcopy.herokuapp.com/api/addPendingMentor', JSON.stringify(updateInfo), { headers: headers })
      .subscribe(res => {
        console.log(res.json());
      });
  }

  deletePendingMentor(menteeID, mentorID) {
		let headers = new Headers();
    headers.append('Content-Type', 'application/json');

		let updateInfo = {
			mentorID: mentorID,
			menteeID: menteeID
		};

    this.http.post('https://corvids-coachcopy.herokuapp.com/api/deletePendingMentee', JSON.stringify(updateInfo), {headers: headers })
      .subscribe(res => {
        console.log(res.json());
      });
  }

}

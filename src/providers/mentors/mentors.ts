import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MentorsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MentorsProvider {
  data: any;
  constructor(public http: Http) {
    console.log('Hello MentorsProvider Provider');
    this.data = null;
  }

  getMentors(){
  	if (this.data){
  		return Promise.resolve(this.data);
  	}
  	return new Promise(resolve => {
  		this.http.get('http://')
  			.map(res => res.json())
  			.subscribe(data => {
  				this.data = data;
  				resolve(this.data);
  			});
  	});
  }

  createMentor(mentor){
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');

  	this.http.post('http://localhost:8080/api/mentors', JSON.stringify(mentor), {headers: headers})
  		.subscribe(res => {
  			console.log(res.json());
  		});
  }

}

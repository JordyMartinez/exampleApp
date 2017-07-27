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

}

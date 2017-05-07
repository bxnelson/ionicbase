import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment'

/*
  Generated class for the StylistData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StylistData {

  constructor(/*public http: Http*/) {
    environment.stylisturl
    console.log('Hello StylistData Provider:' + environment.stylisturl);
  }

  getStylists(name : String){
    return [name];
  }
}

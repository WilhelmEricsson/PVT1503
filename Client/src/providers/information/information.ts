import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the InformationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InformationProvider {

  apiUrl = 'https://localhost:8080';

  constructor(public http: HttpClient) {
    console.log('Hello InformationProvider Provider');
  }

  getInformation() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/information/all').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


}

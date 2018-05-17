import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


var allInformation: any[] = [];

@Injectable()
export class InformationProvider {

  apiUrl = 'http://localhost:8080';
  currentLightPost: number;

  constructor(public http: HttpClient) {
    console.log('Hello InformationProvider Provider');
  }
  getInformation() {
    if(this.currentLightPost >= 1){
     return this.getInformationByLightPostId(this.currentLightPost);
    }else {
      return new Promise(resolve => "");
    }

  }
  
  getArray(){
    return allInformation;
  }

  getAllInformation() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/public/information/all').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getInformationByLightPostId(id: number) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/public/information/lightposts/'+id).subscribe(data => {
        resolve(data);
        this.addToArray(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addToArray(data){
    for(let i of data){
    allInformation.push(i);
    }
    console.log(data)
  }
  


}

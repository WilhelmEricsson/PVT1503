import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SERVER_URL} from "../../config";

var allInformation: any[] = [];

@Injectable()
export class InformationProvider {
  infoFetched: boolean = false;
  apiUrl = SERVER_URL;
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
        if(this.infoFetched !== true){
          this.addToArray(data);
          this.infoFetched = true;
        }
        
      }, err => {
        console.log(err);
      });
    });
  }
  setCurrentLightPost(newLightPostId: number){
    if(this.currentLightPost !== newLightPostId){
      this.infoFetched = false;
      this.currentLightPost = newLightPostId;
    }
  }

  addToArray(data){
    
    allInformation.push(data);
    
    console.log(data)
  }



}

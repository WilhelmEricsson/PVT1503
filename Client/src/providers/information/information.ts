import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SERVER_URL} from "../../config";
import { SocialSharing } from '@ionic-native/social-sharing';
import { Facebook } from '@ionic-native/facebook';

var allInformation: any[] = [];

@Injectable()
export class InformationProvider {
  infoFetched: boolean = false;
  apiUrl = SERVER_URL;
  currentLightPost: number;

  constructor(public http: HttpClient, private socialSharing: SocialSharing, private fb: Facebook) {
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
    for(let i of data){
    allInformation.push(i);
    }
    console.log(data)
  }

  handleShare(id) {
    this.fb.getLoginStatus().then(res => {
      if (res.status === "connected") {
        switch(id) {
          case 10: {
            this.socialSharing.share(null, null, "https://i.imgur.com/6L2Lm4O.png", null);
            break;
          }
        }
      }
    })
  }


}

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
    
    allInformation.push(data);

    console.log(data)
  }

  handleShare(id) {
    var link;
        switch(id) {
          case 3: {
            link = "https://imgur.com/UPfQgyO";
            break;
          }
          case 4: {
            link = "https://imgur.com/rKOrs0P";
            break;
          }
          case 7: {
            link = "https://imgur.com/UBJdAMz";
            break;
          }
          case 8: {
            link = "https://imgur.com/OXjXK2H";
            break;
          }
          case 11: {
            link = "https://imgur.com/4HQRbzE";
            break;
          }
          case 12: {
            link = "https://imgur.com/pEV2Kv5";
            break;
          }
          case 15: {
            link = "https://imgur.com/DOoOJc7";
            break;
          }
          case 16: {
            link = "https://imgur.com/Zj23PqF";
            break;
          }
          case 19: {
            link = "https://imgur.com/UrwBS3x";
            break;
          }
          case 22: {
            link = "https://imgur.com/3hmyGLW";
            break;
          }
          case 25: {
            link = "https://imgur.com/vGjDmGJ";
            break;
          }
          case 28: {
            link = "https://imgur.com/obqfHVZ";
            break;
          }
          case 31: {
            link = "https://imgur.com/9fuLEsn";
            break;
          }
          case 32: {
            link ="https://imgur.com/qsJL7K2";
            break;
          }
          case 35: {
            link = "https://imgur.com/PLtlGzT";
            break;
          }
        }
      this.socialSharing.share("","",link,"");
  }


}

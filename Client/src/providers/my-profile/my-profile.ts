import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SERVER_URL} from "../../config";
import {Storage} from "@ionic/storage";
import {User} from "./User";
import {Observable} from "rxjs/Observable";


/*
  Generated class for the MyProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyProfileProvider {
  private userName:string;
  header:HttpHeaders
  constructor(public http: HttpClient, private storage:Storage) {

  }

  setUser(userName:string){
    this.userName = userName;
  }
  getUserName(){
    return this.userName;
  }
  async getUserInformation(){
    await this.storage.get('jwt_token').then(data=>{
       let token = data;
       this.header = new HttpHeaders({"Authorization": "Bearer " + token});
      }
    ).catch(reason => {
      console.log("ERROR" + reason);
    });
    return this.http.get(SERVER_URL +"/user/"+ this.userName +"/details", {headers: this.header});
  }

  changePassword(userName:string, newPassword:string){
    return this.http.post(SERVER_URL +"/user/"+ this.userName +"/update/password",{userName, newPassword} , {headers: this.header});
  }
  async changeEmail(user:User){
    await this.storage.get('jwt_token').then(data=>{
        let token = data;
        this.header = new HttpHeaders({"Authorization": "Bearer " + token});
      }
    ).catch(reason => {
      console.log("ERROR" + reason);
    });
    return this.http.post(SERVER_URL +"/user/"+ user.name +"/update/email",{"userName":user.name, "newEmail":user.email},{headers: this.header});
  }





}

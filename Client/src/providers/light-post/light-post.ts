import {HttpClient, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SERVER_URL} from "../../config";
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Observable} from "rxjs/Observable";
/*
  Generated class for the LightPostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LightPostProvider {
  private  url: string = SERVER_URL + "/public/resources/lightposts";

  constructor(private http: HttpClient) {
    console.log('Hello LightPostProvider Provider');
  }

  getLightPosts(){
    return this.http.get(this.url).do(this.logResponse).catch(this.catchError);
  }

  private catchError(error: HttpResponse<Error>){
    console.log(error);
    return Observable.throw(error.body.message || "Server Error fetching Light Posts!")
  }

  private logResponse(res: HttpResponse<any>){
    console.log(res);
  }

  increaseNumOfUsersPresent(lightPostId:number){
    this.http.post(this.url+"/increaseNumOfUsers/" + lightPostId, null);
  }
  decreaseNumOfUsersPresent(lightPostId:number){
    this.http.post(this.url+"/decreaseNumOfUsers/" + lightPostId, null);
  }

}

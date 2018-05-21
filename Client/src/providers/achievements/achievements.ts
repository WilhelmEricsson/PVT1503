import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Achievement } from "../../providers/Achievement";

/*
  Generated class for the AchievementsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

var usersAchievements: Achievement[] = [];

@Injectable()
export class AchievementsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AchievementsProvider Provider');
  }

  getUsersAchievements() {
    return usersAchievements;
  }

}

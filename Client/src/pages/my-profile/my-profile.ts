import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import {MyProfileProvider} from "../../providers/my-profile/my-profile";
import {User} from "../../providers/my-profile/User";
import {FormGroup, FormBuilder, Validators, AbstractControl, FormControl, ValidatorFn} from "@angular/forms";



/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const PASSWORD_MIN_LENGTH = 6;

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {
  user:User;
 // passwordFormGroup: FormGroup;
 // emailFormGroup: FormGroup;
//  password: AbstractControl;
 // passwordRepeat: AbstractControl;
 // email: AbstractControl;
  //emailRepeat: AbstractControl;

  password:string = "";
  passwordRepeat:string = "";
  email:string = "";
  emailRepeat:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook, private myProfileProvider:MyProfileProvider, private formBuilder:FormBuilder) {
    this.user = new User("","");

  }


  ionViewWillLoad() {
    this.fb.getLoginStatus().then(res => {
      if (res.status == "connected") {
        this.getFacebookData();

      }
    }).catch(err => {
      this.getDBName();

    });
  }

  getFacebookData() {
    this.fb.getLoginStatus().then(res => {
      if (res.status == "connected") {
        this.fb.api("/"+res.authResponse.userID+"/?fields=id,email,name",["public_profile"])
        .then(res => {
          this.user = new User(res.name,res.email);
        })
      }
    })
  }

  getDBName(){
    this.myProfileProvider.getUserInformation().subscribe(data =>{
      var temp:any = data;
      this.user = new User(temp.username, temp.email);

    })
  }



  updatePassword(form:any){
    console.log("TEST PASSWORD: " + form + " pass --> " + this.password) ;
  }



  passwordLengthTest(password:string):boolean{

    return password.length >= PASSWORD_MIN_LENGTH;
  }

  isEqualToPreviousPasswordEntry():boolean{

    if (this.password != this.passwordRepeat && this.passwordRepeat.length > 0) {
      return false;
    }
    return true;

  }

  isEqualToPreviousEmailEntry():boolean{

    if (this.email != this.emailRepeat && this.emailRepeat.length > 0){
        return false;
    }

    return true;
  }

  isValidEmail():boolean{
    let test:boolean = false;


    return false;
  }






}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { UserProfilePage } from '../user/user-profile/user-profile';
import { UserGPSPage } from '../user/user-gps/user-gps';
import {AdminTabsPage} from '../admin/admin-tabs/admin-tabs';
import {Facebook} from '@ionic-native/facebook';
import firebase from 'firebase';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public facebook:Facebook, public navParams: NavParams, public menuCtrl:MenuController ) {
  }

  //FACEBOOK Login, working on Android Emulator, but not on ionic serve
  facebookLogin(){
    this.facebook.login(['email']).then(res=>{
      const fbcredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
      firebase.auth().signInWithCredential(fbcredential).then(fs=>{
        alert("Login Successful")
      }).catch(error=>{
        alert("Login Error")
      })
    }).catch(error=>{
        alert(JSON.stringify(error))
    })
  }  

  //DO NOT DELETE, Reference siya sa fb login ko
    /*
    let provider = new firebase.auth.FacebookAuthProvider();  
    firebase.auth().signInWithRedirect(provider).then(()=>{
      firebase.auth().getRedirectResult().then((result)=>{
        alert(JSON.stringify(result));
      }).catch(function(error){
        alert(JSON.stringify(error))
      });
    })
    */
  ///////////////////////////////////////////////

  // REDIRECTS
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }  
  gotoAdmin(){
    this.navCtrl.setRoot(AdminTabsPage);
  }
  gotoUser(){
    this.navCtrl.setRoot(UserProfilePage);
  }
  gotoUserGPS(){
    this.navCtrl.setRoot(UserGPSPage);
  }
}


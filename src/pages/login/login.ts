import { Component } from '@angular/core';

import { NavController, Events } from 'ionic-angular';

import { SignupPage }  from '../signup/signup';
import { TabsPage }    from '../tabs/tabs';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthService]
})
export class LoginPage {
  login: {username?: string, password?: string} = {};

  submitted = false;
  isValidForm = true;

  constructor(public navCtrl: NavController,
              private authService: AuthService,
              private events: Events) {
	this.events.subscribe('user:login', (eventsData) => {
      var user = eventsData.length > 0 ?
                  eventsData[0].user : null;
      if(user != null){
      	this.navCtrl.push(TabsPage, user.getRole());
      } else {
        this.isValidForm = false;
      	console.log("Authentication Error...");
      }
    });
  }

  onLogin(form) {
    this.submitted = true;
    this.authService.login(this.login);
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}

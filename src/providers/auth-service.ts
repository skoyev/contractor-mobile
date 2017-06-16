import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { User } from '../model/user';

@Injectable()
export class AuthService {
  HAS_LOGGED_IN = 'hasLoggedIn';
  roles : Map<string, string> = new Map<string, string>();
  users : Set<User> = new Set<User>();

  constructor(public events: Events, public storage: Storage, public http: Http) {
  	this.roles.set('user1', 'contractor');
  	this.roles.set('user2', 'public');
    this.load();
  }

  load() {
    return new Promise(resolve => {
      this.http
          .get('assets/data/auth.json')
          .subscribe(res => {
            let data:any = res.json().users;
            data.forEach(function(user) {
              this.users.add(new User(user.firstName, user.lastName, user.role, user.password, user.userName));
            }, this);
          });
    });
  }

  login(login) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(login.username);

    let loggedInUser : User = null;
    this.users.forEach(function(user) {
      let isAuth : boolean =
        (user.getUserName() === login.username) &&
          (user.getPassword() === login.password);          
      if(isAuth) {
        loggedInUser = user;
      }
    }, this);
    var data = {'user':loggedInUser};
    this.events.publish('user:login', data);
  }

  signup(username) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:signup');
  }

  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  }

  setUsername(username) {
    this.storage.set('username', username);
  }

  getUsername() {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }

  // return a promise
  hasLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }
}

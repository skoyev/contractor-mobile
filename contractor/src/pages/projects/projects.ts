import {Component, ViewChild} from '@angular/core';

import { AlertController, App, ItemSliding, List, ModalController, NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html'
})
export class ProjectsPage {
  username: string;

  @ViewChild('projectList', {read: Array}) projectList: Array<string>;

  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  constructor(public alertCtrl: AlertController, public nav: NavController, public userData: UserData) {
  }

  ngAfterViewInit() {
    //this.getUsername();
    this.loadProjects();
  }

  loadProjects() {
    this.projectList = [];
    this.projectList.push('Value1');
    this.projectList.push('Value2');
    this.projectList.push('Value3');
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  changeUsername() {
    let alert = this.alertCtrl.create({
      title: 'Change Username',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'username',
      value: this.username,
      placeholder: 'username'
    });
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.userData.setUsername(data.username);
        this.getUsername();
      }
    });

    alert.present();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    this.userData.logout();
    this.nav.setRoot(LoginPage);
  }
}

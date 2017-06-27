import {Component, ViewChild} from '@angular/core';

import { AlertController, App, ItemSliding, List, ModalController, NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { ProjectDetailPage } from '../project-detail/project-detail';
import { NewProjectPage } from '/new-project/new-project';
import { UserData } from '../../providers/user-data';
import { SegmentModel } from '../../model/segment';

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html'
})
export class ProjectsPage {
  username: string;
  projectSegment: string;
  queryText = '';
  projects: any;

  @ViewChild('projectList', {read: Array}) projectList: Array<string>;

  /*
  projects = [
    {group:'Electric', items : [
    	{name : 'Electric Name1', description : 'Electric Description1', imgAsset : 'assets/img/appicon.png'},
    	{name : 'Electric Name2', description : 'Electric Description2', imgAsset : 'assets/img/appicon.png'}
    ]},
    {group:'Plumber', items : [
    	{name : 'Plumber 1', description : 'Plumber Description 1', imgAsset : 'assets/img/appicon.png'},
    	{name : 'Plumber 2', description : 'Plumber Description 2', imgAsset : 'assets/img/appicon.png'}
    ]}
  ];
  */

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public userData: UserData) {    
  }

  ngAfterViewInit() {
    //this.getUsername();  
    this.projectSegment = "public";    
    this.loadProjectsBySegment();
  }

  loadProjectsBySegment() {
    if(this.projectSegment === "active") {
      this.projects = [
        {group:'Electric', items : [
          {name : 'Active Electric Name1', description : 'Electric Description1', imgAsset : 'assets/img/appicon.png'},
          {name : 'Active Electric Name2', description : 'Electric Description2', imgAsset : 'assets/img/appicon.png'}
        ]},
        {group:'Plumber', items : [
          {name : 'Active Plumber 1', description : 'Plumber Description 1', imgAsset : 'assets/img/appicon.png'},
          {name : 'Active Plumber 2', description : 'Plumber Description 2', imgAsset : 'assets/img/appicon.png'}
        ]}
      ];
    } else if(this.projectSegment === "public"){
      this.projects = [
        {group:'Electric', items : [
          {name : 'Public Electric Name1', description : 'Electric Description1', imgAsset : 'assets/img/appicon.png'},
          {name : 'Public Electric Name2', description : 'Electric Description2', imgAsset : 'assets/img/appicon.png'}
        ]},
        {group:'Plumber', items : [
          {name : 'Public Plumber 1', description : 'Plumber Description 1', imgAsset : 'assets/img/appicon.png'},
          {name : 'Public Plumber 2', description : 'Plumber Description 2', imgAsset : 'assets/img/appicon.png'}
        ]}
      ];
    }    
  }

  createProject() {
    console.log('createProject');
    this.navCtrl.push(NewProjectPage);
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  updateProjects(){
    this.loadProjectsBySegment();
  }

  presentFilter() {
  	console.log('presentFilter');
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

  goToProjectDetail(item) {
  	console.log(item.description);
  	this.navCtrl.push(ProjectDetailPage, item);
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    this.userData.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}

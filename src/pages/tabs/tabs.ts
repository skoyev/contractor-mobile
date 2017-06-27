import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';
import { ProjectsPage } from '../projects/projects';
import { ActiveProjects } from '../active-projects/active-projects';

import { AuthService }  from "../../providers/auth-service";


@Component({
  templateUrl: 'tabs.html',
  providers  : [AuthService]
})
export class TabsPage implements OnInit {
  //tab2Root: any = SchedulePage;
  //tab2Root: any = ProjectsPage;
  //tab2Root: any = SpeakerListPage;
  //tab3Root: any = MapPage;

  tabs: any       = [];
  tab1Root: any   = ProjectsPage;
  tab4Root: any   = AboutPage;
  activeProjects: any = ActiveProjects;

  mySelectedIndex: number;
  userRole: string;

  constructor(navParams: NavParams, private authService: AuthService) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
    this.userRole = navParams.data;
  }

  getUserTabs() {
    // retrieve tabs per role
    this.tabs = this.authService.fetchTabForRole(this.userRole);
  }

  ngOnInit():any {
   this.getUserTabs();
  }
}

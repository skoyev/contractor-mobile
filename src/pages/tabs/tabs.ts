import { Component, OnInit } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';
import { ProjectsPage } from '../projects/projects';
import { AuthService }  from "../../providers/auth-service";

@Component({
  templateUrl: 'tabs.html',
  providers: [AuthService]
})
export class TabsPage implements OnInit {
	tabs: any = [];

    tab1Root: any = ProjectsPage;

  //tab2Root: any = SchedulePage;
  //tab2Root: any = ProjectsPage;
  //tab2Root: any = SpeakerListPage;
  //tab3Root: any = MapPage;

  tab4Root: any = AboutPage;
  mySelectedIndex: number;
  userRole: string;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
    this.userRole = navParams.data;
  }

  getUserTabs() {
  	console.log(this.userRole);
  	if(this.userRole === 'contractor') {
  		this.tabs = [
  			{"component" : this.tab1Root, "title" : "Projects", "icon" : "calendar"},
  			{"component" : this.tab4Root, "title" : "About", "icon" : "information-circle"}
  			];
  	} else {
  		this.tabs = [{"component" : this.tab1Root, "title" : "Projects", "icon" : "calendar"}];
  	}
  }

  ngOnInit():any {
   this.getUserTabs();
  }
}

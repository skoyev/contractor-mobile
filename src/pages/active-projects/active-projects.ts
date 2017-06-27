import {Component, ViewChild} from '@angular/core';

import { AlertController, App, ItemSliding, List, ModalController, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserData }  from '../../providers/user-data';
import { BidsPage } from '../bids/bids';

@Component({
  selector: 'active-projects',
  templateUrl: 'active-projects.html'
  //providers: [BidsService]
})
export class ActiveProjects {

  constructor(private navParams: NavParams, private navCtrl: NavController) {  	
  }

  ngAfterViewInit() {
  }
}

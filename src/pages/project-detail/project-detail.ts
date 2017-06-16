import {Component, ViewChild} from '@angular/core';

import { AlertController, App, ItemSliding, List, ModalController, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserData }  from '../../providers/user-data';
import { BidsPage } from '../bids/bids';

@Component({
  selector: 'page-project-detail',
  templateUrl: 'project-detail.html',
  //providers: [BidsService]
})
export class ProjectDetailPage {
  item: any;

  constructor(private navParams: NavParams, private navCtrl: NavController) {
  	this.item = navParams.data;
  }
  
  showBid(item){
  	this.navCtrl.push(BidsPage, item);
  }

  ngAfterViewInit() {  	
  }
}
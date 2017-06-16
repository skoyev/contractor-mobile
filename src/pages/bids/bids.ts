import {Component, ViewChild, OnInit} from '@angular/core';

import { AlertController, App, ItemSliding, List, ModalController, NavParams, NavController } from 'ionic-angular';

import { ProjectDetailPage } from '../project-detail/project-detail';
import { BidDetailPage } from '../bid-detail/bid-detail';
import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-bids',
  templateUrl: 'bids.html'
})
export class BidsPage implements OnInit {
  queryText = '';
  bids = [];
  item: any;

  @ViewChild('projectList', {read: Array}) projectList: Array<string>;

  constructor(public navParams: NavParams,private navCtrl: NavController) {
  	this.item = navParams.data;
  }

  ngAfterViewInit() {  	    
  }
  
  ngOnInit() {
  	this.loadBids();
  }
  
  loadBids() {
    this.bids = [];
    this.bids.push({name:"Bid1", description:"Description1"});
    this.bids.push({name:"Bid2", description:"Description2"});
    this.bids.push({name:"Bid3", description:"Description3"});
  }
  
  presentFilter() {
  	console.log('presentFilter');
  }

  goToBidDetail(bid) {
  	this.navCtrl.push(BidDetailPage, bid);
  }
}
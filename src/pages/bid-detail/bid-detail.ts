import {Component, ViewChild, OnInit} from '@angular/core';

import { AlertController, App, ItemSliding, List, ModalController, NavParams, NavController } from 'ionic-angular';

import { ProjectDetailPage } from '../project-detail/project-detail';
import { UserData } from '../../providers/user-data';


@Component({
  templateUrl: 'bid-detail.html'
})
export class BidDetailPage implements OnInit {
  bid: any;

  constructor(public navParams: NavParams) {
  	this.bid = navParams.data;
  }

  ngAfterViewInit() {  	    
  }
  
  ngOnInit() {
  }  

  acceptBid(bid) {
  	console.log(bid.name);
  }
  
  rejectBid(bid) {
  	console.log(bid.name);
  }  
}
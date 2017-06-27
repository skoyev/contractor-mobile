import {Component, ViewChild} from '@angular/core';

import { AlertController, App, ItemSliding, List, ModalController, NavController } from 'ionic-angular';

@Component({
  selector:    'schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {}

}
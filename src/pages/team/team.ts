import {Component, ViewChild} from '@angular/core';

import { AlertController, App, ItemSliding, List, ModalController, NavController } from 'ionic-angular';

@Component({
  selector:    'team',
  templateUrl: 'team.html'
})
export class TeamPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {}

}
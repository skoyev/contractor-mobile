import {Component, ViewChild} from '@angular/core';

import { AlertController, App, ItemSliding, List, ModalController, NavController } from 'ionic-angular';

@Component({
  selector:    'messages',
  templateUrl: 'messages.html'
})
export class MessagePage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {}

}
import {Component, ViewChild} from '@angular/core';

import { AlertController, App, ItemSliding, List, ModalController, NavController } from 'ionic-angular';

@Component({
  selector:    'documents',
  templateUrl: 'documents.html'
})
export class DocumentPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {}

}
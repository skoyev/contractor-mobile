import {Component, ViewChild} from '@angular/core';

import { AlertController, App, ItemSliding, List, ModalController, NavController } from 'ionic-angular';

@Component({
  selector: 'new-project',
  templateUrl: 'new-project.html'
})
export class NewProjectPage {
  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {    
  }
}
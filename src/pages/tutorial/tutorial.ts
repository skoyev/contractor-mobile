import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';


export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.slides = [
      {
        title: 'Welcome into <b>Contractors</b>',
        description: 'The <b>Contractors App</b> is a practical preview of the Contractors in action.',
        image: 'assets/img/ica-slidebox-img-1.png',
      },
      {
        title: 'What is Contractors?',
        description: '<b>Contractors</b> is an platform that enables users to build high quality relations between public and contractors.',
        image: 'assets/img/ica-slidebox-img-2.png',
      },
      {
        title: 'What is Contractors Platform?',
        description: 'The <b>Contractors Platform</b> is a cloud platform for managing and scaling Contractors apps with integrated services like push notifications, native builds, user auth, and live updating.',
        image: 'assets/img/ica-slidebox-img-3.png',
      }
    ];
  }

  startApp() {
    //this.navCtrl.push(TabsPage);
    this.navCtrl.push(LoginPage)
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
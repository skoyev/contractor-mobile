import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

@Injectable()
export class ProjectData {
  data: any;

  constructor(public http: Http) {}

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      this.http.get('assets/data/data.json').subscribe(res => {
        this.data = this.processData(res.json());
        resolve(this.data);
      });
    });
  }

  processData(data) {
    data.tracks = [];

    return data;
  }

  getSpeakers() {
    return this.load().then(data => {
      return data.speakers.sort((a, b) => {
        let aName = a.name.split(' ').pop();
        let bName = b.name.split(' ').pop();
        return aName.localeCompare(bName);
      });
    });
  }

  getTracks() {
    return this.load().then(data => {
      return data.tracks.sort();
    });
  }

  getMap() {
    return this.load().then(data => {
      return data.map;
    });
  }
}
import { LocationSelectPage } from './../location-select/location-select';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public locationTracker: LocationTrackerProvider,
    public modalCtrl: ModalController) {

  }
  start() {
    this.locationTracker.startTracking();
  }

  stop() {
    this.locationTracker.stopTracking();
  }

  launchLocationPage() {

    let modal = this.modalCtrl.create(LocationSelectPage);

    modal.onDidDismiss((location) => {
      console.log(location);
    });

    modal.present();
  }
}

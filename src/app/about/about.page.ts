import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private navCtrl: NavController, private storage: Storage) { }
  myStatus:string = " ";
  home() {
    this.navCtrl.navigateBack('/home');
  }
  ngOnInit() {
  }

  SaveStatus() {
    this.storage.create()
      .then(() => {
        this.storage.set('status', this.myStatus)
          .then(()=>{console.log(this.myStatus)})
          .catch();
      })
      .catch();

  }
  

}

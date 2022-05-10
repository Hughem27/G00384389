import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private navCtrl:NavController) {}

  backstore(){
    this.navCtrl.navigateForward('/backstore');
  }

  management(){
    this.navCtrl.navigateForward('/management');
  }
  aboutUs(){
    this.navCtrl.navigateForward('/about');
  }

  roster(){
    this.navCtrl.navigateForward('/roster');
  }
      
}

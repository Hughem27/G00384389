import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private navCtrl:NavController) {}
//  Method For travelling to backstore page
  backstore(){
    this.navCtrl.navigateForward('/backstore');
  }
//  Method For travelling to management page
  management(){
    this.navCtrl.navigateForward('/management');
  }
  //  Method For travelling to aboutUs page
  aboutUs(){
    this.navCtrl.navigateForward('/about');
  }
//  Method For travelling to roster page
  roster(){
    this.navCtrl.navigateForward('/roster');
  }
      
}

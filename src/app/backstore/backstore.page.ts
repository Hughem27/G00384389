import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-backstore',
  templateUrl: './backstore.page.html',
  styleUrls: ['./backstore.page.scss'],
})
export class BackstorePage implements OnInit {
  title = 'xxx';
  hiddenInvoice = false;
  hiddenRules = false;


  constructor(private navCtrl: NavController) { }

  //  Method For home button
  home() {
    this.navCtrl.navigateBack('/home');
  }


  //  Method For displaying the invoice rules
  checkingIn() {

    if (this.hiddenInvoice == true) {
      this.hiddenInvoice = false;
    }
    else {
      this.hiddenInvoice = true;
    }

  }
//  Method For displaying the store rules
  storeRules() {
    if (this.hiddenRules == true) {
      this.hiddenRules = false;
    }
    else {
      this.hiddenRules = true;
    }

  }



  ngOnInit() {
  }

}

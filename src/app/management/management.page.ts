import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-management',
  templateUrl: './management.page.html',
  styleUrls: ['./management.page.scss'],
})
export class ManagementPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  home(){
    this.navCtrl.navigateBack('/home');
  }

  
}

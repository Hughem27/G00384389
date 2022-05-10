import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.page.html',
  styleUrls: ['./roster.page.scss'],
})
export class RosterPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  //  method for travelloing to home page
  home(){
    this.navCtrl.navigateBack('/home');
  }

  ngOnInit() {
  }

}

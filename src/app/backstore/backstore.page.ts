import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-backstore',
  templateUrl: './backstore.page.html',
  styleUrls: ['./backstore.page.scss'],
})
export class BackstorePage implements OnInit {
  title = 'xxx';
  constructor(private navCtrl:NavController) { }

  home(){
    this.navCtrl.navigateBack('/home');
  }

  
  cardboard(){ 
                  
  }

  plastic(){

  }

  checkingIn(){

  }

  storeRules(){
    
  }



  ngOnInit() {
  }

}

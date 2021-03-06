import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ServicesService } from '../services.service';
import { ToastController } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-management',
  templateUrl: './management.page.html',
  styleUrls: ['./management.page.scss'],
})
export class ManagementPage implements OnInit {

  constructor(private navCtrl: NavController, private storage: Storage, private servServices: ServicesService, public toastController: ToastController) { }
  myStatus: string = " ";
  employee: any = [];
  hidden = false;
  hiddenDepartment = false;

  //  setting up jSon File
  ngOnInit() {
    this.servServices.GetEmployeeData().subscribe(
      (data) => {
        this.employee = data.employee;
        console.log(this.employee);
      }
    );

  }

  //  Travel to home page
  home() {
    this.navCtrl.navigateBack('/home');
  }
  
  //  Toast notification to display warning
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Warning - Private Information',
      duration: 1000
    });
    toast.present();
  }
  //  method to show & hide info
  show() {

    if (this.hidden == true) {
      this.hidden = false;
    }
    else {
      this.hidden = true;
    }
  }

  //  show Department info
  showDepartment() {

    if (this.hiddenDepartment == true) {
      this.hiddenDepartment = false;
    }
    else {
      this.hiddenDepartment = true;
    }
  }



//  method for saving storage
  ionViewDidEnter() {
    this.storage.create().then(
      () => {
        this.storage.get('status')
          .then((status) => {
            this.myStatus = status
          }
          )
          .catch();
      })
      .catch();
  }


}

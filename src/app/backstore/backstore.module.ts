import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackstorePageRoutingModule } from './backstore-routing.module';

import { BackstorePage } from './backstore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackstorePageRoutingModule
  ],
  declarations: [BackstorePage]
})
export class BackstorePageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackstorePage } from './backstore.page';

const routes: Routes = [
  {
    path: '',
    component: BackstorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackstorePageRoutingModule {}

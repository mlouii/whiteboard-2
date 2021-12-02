import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradedWorkPage } from './graded-work.page';

const routes: Routes = [
  {
    path: '',
    component: GradedWorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradedWorkPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignmentDetailPageRoutingModule } from './assignment-detail-routing.module';

import { AssignmentDetailPage } from './assignment-detail.page';
import {HomePageModule} from "../home/home.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AssignmentDetailPageRoutingModule,
        HomePageModule
    ],
  declarations: [AssignmentDetailPage]
})
export class AssignmentDetailPageModule {}

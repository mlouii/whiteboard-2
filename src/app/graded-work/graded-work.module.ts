import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradedWorkPageRoutingModule } from './graded-work-routing.module';

import { GradedWorkPage } from './graded-work.page';
import {HomePageModule} from "../home/home.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GradedWorkPageRoutingModule,
        HomePageModule
    ],
  declarations: [GradedWorkPage]
})
export class GradedWorkPageModule {}

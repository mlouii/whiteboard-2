import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FocusPageRoutingModule } from './focus-routing.module';

import { FocusPage } from './focus.page';
import {HomePageModule} from "../home/home.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FocusPageRoutingModule,
        HomePageModule
    ],
  declarations: [FocusPage]
})
export class FocusPageModule {}

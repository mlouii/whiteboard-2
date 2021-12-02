import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import {ListItemComponent} from "../list-item/list-item.component";
import {HeaderComponent} from "../header/header.component";
import {FocusAssistComponentComponent} from "../focus-assist-component/focus-assist-component.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  exports: [
    FocusAssistComponentComponent,
    ListItemComponent,
    HeaderComponent
  ],
  declarations: [HomePage, ListItemComponent, HeaderComponent, FocusAssistComponentComponent]
})
export class HomePageModule {}

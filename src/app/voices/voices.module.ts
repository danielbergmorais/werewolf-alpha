import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoicesPageRoutingModule } from './voices-routing.module';

import { VoicesPage } from './voices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoicesPageRoutingModule
  ],
  declarations: [VoicesPage]
})
export class VoicesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesComponent } from './features/features.component';
import { UserZoneRoutingModule } from './user-zone-routing.module';

@NgModule({
  declarations: [
    FeaturesComponent,
  ],
  imports: [
    CommonModule,
    UserZoneRoutingModule,
  ],
})
export class UserZoneModule { }

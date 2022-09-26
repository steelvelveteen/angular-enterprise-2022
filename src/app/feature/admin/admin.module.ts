import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-dashboard/admin-home/admin-home.component';
import { AdminProfileComponent } from './admin-dashboard/admin-profile/admin-profile.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminHomeComponent,
    AdminProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

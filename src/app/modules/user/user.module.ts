import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './user-dashboard/user-home/user-home.component';
import { UserProfileComponent } from './user-dashboard/user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserDashboardComponent, UserHomeComponent, UserProfileComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}

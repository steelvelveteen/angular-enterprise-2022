import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-dashboard/admin-home/admin-home.component';
import { AdminProfileComponent } from './admin-dashboard/admin-profile/admin-profile.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SettingsComponent } from './admin-dashboard/settings/settings.component';
import { EditComponent } from './admin-dashboard/edit/edit.component';

@NgModule({
  declarations: [AdminDashboardComponent, AdminHomeComponent, AdminProfileComponent, SettingsComponent, EditComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}

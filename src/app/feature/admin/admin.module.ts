import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminEditProfileComponent } from './admin-dashboard/admin-edit-profile/admin-edit-profile.component';
import { AdminHomeComponent } from './admin-dashboard/admin-home/admin-home.component';
import { AdminProfileComponent } from './admin-dashboard/admin-profile/admin-profile.component';
import { AdminServicesComponent } from './admin-dashboard/admin-services/admin-services.component';
import { AdminSettingsComponent } from './admin-dashboard/admin-settings/admin-settings.component';
import { AdminStatsComponent } from './admin-dashboard/admin-stats/admin-stats.component';
import { ConfigurationComponent } from './admin-dashboard/configuration/configuration.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminHomeComponent,
    AdminProfileComponent,
    ConfigurationComponent,
    AdminEditProfileComponent,
    AdminSettingsComponent,
    AdminServicesComponent,
    AdminStatsComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}

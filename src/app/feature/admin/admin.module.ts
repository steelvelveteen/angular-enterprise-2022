import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminAccountsComponent } from './admin-dashboard/admin-accounts/admin-accounts.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminEditProfileComponent } from './admin-dashboard/admin-edit-profile/admin-edit-profile.component';
import { AdminHelpComponent } from './admin-dashboard/admin-help/admin-help.component';
import { AdminHomeComponent } from './admin-dashboard/admin-home/admin-home.component';
import { AdminPaymentsComponent } from './admin-dashboard/admin-payments/admin-payments.component';
import { AdminProfileComponent } from './admin-dashboard/admin-profile/admin-profile.component';
import { AdminResourcesComponent } from './admin-dashboard/admin-resources/admin-resources.component';
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
    AdminStatsComponent,
    AdminAccountsComponent,
    AdminResourcesComponent,
    AdminPaymentsComponent,
    AdminHelpComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}

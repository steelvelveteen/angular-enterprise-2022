import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminEditProfileComponent } from './admin-dashboard/admin-edit-profile/admin-edit-profile.component';
import { AdminHomeComponent } from './admin-dashboard/admin-home/admin-home.component';
import { AdminProfileComponent } from './admin-dashboard/admin-profile/admin-profile.component';
import { AdminServicesComponent } from './admin-dashboard/admin-services/admin-services.component';
import { AdminSettingsComponent } from './admin-dashboard/admin-settings/admin-settings.component';
import { AdminStatsComponent } from './admin-dashboard/admin-stats/admin-stats.component';
import { ConfigurationComponent } from './admin-dashboard/configuration/configuration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'home',
        component: AdminHomeComponent,
      },
      {
        path: 'profile',
        component: AdminProfileComponent,
      },
      {
        path: 'edit',
        component: AdminEditProfileComponent,
      },
      {
        path: 'settings',
        component: AdminSettingsComponent,
      },
      {
        path: 'configuration',
        component: ConfigurationComponent,
      },
      {
        path: 'services',
        component: AdminServicesComponent,
      },
      {
        path: 'stats',
        component: AdminStatsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccountsComponent } from './admin-dashboard/admin-accounts/admin-accounts.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminEditProfileComponent } from './admin-dashboard/admin-edit-profile/admin-edit-profile.component';
import { AdminHelpComponent } from './admin-dashboard/admin-help/admin-help.component';
import { AdminManageComponent } from './admin-dashboard/admin-manage/admin-manage.component';
import { AdminPaymentsComponent } from './admin-dashboard/admin-payments/admin-payments.component';
import { AdminResourcesComponent } from './admin-dashboard/admin-resources/admin-resources.component';
import { AdminSettingsComponent } from './admin-dashboard/admin-settings/admin-settings.component';
import { AdminStatsComponent } from './admin-dashboard/admin-stats/admin-stats.component';
import { ConfigurationComponent } from './admin-dashboard/configuration/configuration.component';
import { ComponentsComponent } from './admin-dashboard/components/components.component';

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
        loadChildren: () =>
          import('./admin-dashboard/admin-home/admin-home.module').then(m => m.AdminHomeModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./admin-dashboard/admin-profile/admin-profile.module').then(
            m => m.AdminProfileModule
          ),
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
        path: 'components',
        component: ComponentsComponent,
      },
      {
        path: 'stats',
        component: AdminStatsComponent,
      },
      {
        path: 'accounts',
        component: AdminAccountsComponent,
      },
      {
        path: 'resources',
        component: AdminResourcesComponent,
      },
      {
        path: 'payments',
        component: AdminPaymentsComponent,
      },
      {
        path: 'help',
        component: AdminHelpComponent,
      },
      {
        path: 'management',
        component: AdminManageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

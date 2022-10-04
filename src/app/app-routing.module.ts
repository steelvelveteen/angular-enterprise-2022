import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./feature/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./feature/user/user.module').then(m => m.UserModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./shared/components/error404/error404.module').then(m => m.Error404Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

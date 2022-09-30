import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // eslint-disable-next-line no-console
    console.log('Role guard called');
    const isAdmin = this.authService.isLoggedInAsAdmin();

    if (isAdmin) {
      return true;
    }
    this.router.navigate(['login']);

    return false;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isAdmin = this.authService.isLoggedInAsAdmin();

    if (isAdmin) {
      return true;
    }
    this.router.navigate(['login']);

    return false;
  }
}

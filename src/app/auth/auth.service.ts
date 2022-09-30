import { Injectable } from '@angular/core';
import { Roles } from '../shared/enums/roles';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = true;
  role = Roles.USER;

  isAuthenticated = (): boolean => this.isLoggedIn;

  isLoggedInAsAdmin = (): boolean => this.role === Roles.ADMIN;
}

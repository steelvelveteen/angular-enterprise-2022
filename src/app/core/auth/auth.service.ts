import { Injectable } from '@angular/core';

export enum Roles {
  DEFAULT = 0,
  ADMIN = 1,
  USER = 2,
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = true;
  role = Roles.ADMIN;

  isAuthenticated = (): boolean => this.isLoggedIn;
  isLoggedInAsAdmin = (): boolean => this.role === Roles.ADMIN;
}

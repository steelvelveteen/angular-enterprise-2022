import { Injectable } from '@angular/core';

enum Role {
  DEFAULT = 0,
  ADMIN = 1,
  USER = 2,
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = true;
  role = Role.ADMIN;

  isAuthenticated = (): boolean => this.isLoggedIn;

  isLoggedInAsAdmin = (): boolean => (this.role === Role.ADMIN ? true : false);

  constructor() {}
}

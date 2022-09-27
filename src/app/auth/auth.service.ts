import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  isAuthenticated = (): boolean => this.isLoggedIn;

  constructor() {}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserfakesingleService {
  constructor(private httpClient: HttpClient) {}

  getUserById = (id: number) =>
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`);
}

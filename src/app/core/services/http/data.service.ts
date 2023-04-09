import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService<T> {
  constructor(private http: HttpClient) {}

  getAll(apiUrl: string): Observable<T[]> {
    return this.http.get<T[]>(apiUrl);
  }

  getById(apiUrl: string, id: number | string): Observable<T> {
    return this.http.get<T>(`${apiUrl}/${id}`);
  }

  create(apiUrl: string, data: T): Observable<T> {
    return this.http.post<T>(apiUrl, data);
  }

  update(apiUrl: string, id: number | string, data: T): Observable<T> {
    return this.http.put<T>(`${apiUrl}/${id}`, data);
  }

  delete(apiUrl: string, id: number | string): Observable<void> {
    return this.http.delete<void>(`${apiUrl}/${id}`);
  }
}

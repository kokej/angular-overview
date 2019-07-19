import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://jsonplaceholder.typicode.com/users/1';
  constructor(private http: HttpClient) {
    console.log('Greetings from the user service constructor!');
  }

  getUser(): Observable<any> {
    return this.http.get(this.url);
  }
}

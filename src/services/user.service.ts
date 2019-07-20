import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userId: number;
  userId$ = new Subject<number>();
  url = 'https://jsonplaceholder.typicode.com/users/';
  constructor(private http: HttpClient) {
    console.log('Greetings from the user service constructor!');
  }

  private emitUserLogged() {
    return this.userId$.next(this.userId);
  }

  setUserLogged(userId) {
    this.userId = userId === '' ? undefined : userId;
    this.emitUserLogged();
  }

  getUserLogged() {
    return this.userId;
  }

  getUser(id = 3): Observable<any> {
    return this.http.get(`${this.url}${id}`);
  }
}

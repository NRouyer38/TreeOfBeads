import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from "../models/User";
import { BehaviorSubject, Observable } from 'rxjs';
import { first, tap, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:3000/auth";
  
  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userId: Pick<User, "id"> | any;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  }

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router,
    ) {}

  register(user: Omit<User, "id">): Observable<User> {
    return this.http.post<User>(`${this.url}/register`, user, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>("register"))
    )
  }

  login(email: Pick<User, "email">, password: Pick<User, "password">): Observable<{
    token: string; userId: Pick<User, "id">
  }> {
    return this.http.post(`${this.url}/login`, {email, password}, this.httpOptions)
    .pipe(
      first(),
      tap((tokenObject: {token: string; userId: Pick<User,"id">} | any) => {
        this.userId = tokenObject.userId;
        localStorage.setItem("token", tokenObject.token);
        this.isUserLoggedIn$.next(true);
        this.router.navigate(['dashboard']);
      }),
      catchError(this.errorHandlerService.handleError<{
        token: string; userId: Pick<User, "id">
      }>("login"))
    )
  }
}

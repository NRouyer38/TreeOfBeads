import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from "../models/User";
import { Observable } from 'rxjs';
import { first, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:3000/auth/register";

  httpOptions: { headers : HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  }

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {}

  register(user: Omit<User, "id">): Observable<User> {
    return this.http.post<User>(this.url, user, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>("register"))
    )
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  //  login(user: any) {
  //   const result =  this.http.post<any>(`/auth/login`, user).toPromise();
  //   if (result && result.access_token) {
  //     window.localStorage.setItem('token', result.access_token);
  //     return true;
  //   }

  //   return false; 
  // }

  login(user: any): Observable<any>{
    return this.http.post<any>(`http://localhost:8080/authenticate`, user);

  }

  async createAccount(account: any) {
    const result = await this.http.post<any>(`/users`, account).toPromise();
    return result;
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string) {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    let date = this.getTokenExpirationDate(token) as Date;
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf()  > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }
}

import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

const TOKEN_KEY = 'AuthToken';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  roles: Array<string> = [];

  constructor(private router: Router) { }

  public setToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public isLogged(): boolean {
    return !!this.getToken();

  }

  public getUserName(): string {
    if (!this.isLogged()) {
      return null;
    }
    const token = this.getToken();
    const payload = token.split('.')[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    //Sub es username, lo otro es roles
    return values.sub;
  }

  public isAdmin(): boolean {
    if (!this.isLogged()) {
      return false;
    }

    const token = this.getToken();
    const payload = token.split('.')[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const roles = values.roles;

    return roles.indexOf('ROLE_ADMIN') >= 0;

  }

  public logOut(): void {
    window.localStorage.clear();
    window.location.reload();
  }


}

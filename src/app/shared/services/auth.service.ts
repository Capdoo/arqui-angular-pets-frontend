import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

import {NewUserDto} from '../models/new-user-dto';
import {LoginUserDto} from '../models/login-user-dto';
import {JwtDTO} from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.baseURL+'/'+environment.authController;

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NewUserDto): Observable<any> {
    const url = `${this.authURL}/register`;
    return this.httpClient.post<any>(url, nuevoUsuario);

  }

  public login(loginUsuario: LoginUserDto): Observable<JwtDTO> {
    const url = `${this.authURL}/login`;
    return this.httpClient.post<JwtDTO>(url, loginUsuario);
  }

  public refresh(jwtDto: JwtDTO): Observable<JwtDTO> {
    const url = `${this.authURL}/refresh`;
    return this.httpClient.post<JwtDTO>(url, jwtDto);
  }
}

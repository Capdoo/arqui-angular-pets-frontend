import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeServicesService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) {

  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.tokenService.getToken()
      })
    };
  }
  private createCompeteRouter = (route: string) => {
    return `${environment.baseURL}/${environment.homeController}/${environment.readMethod}/${route}`;
  }
}

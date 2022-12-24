import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { TokenService } from '../general/token.service';
import { environment } from 'src/environments/environment';
import { NewUserDto } from '../../models/new-user-dto';



@Injectable({
  providedIn: 'root'
})
export class UserDetailsGuard {

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
  private createCompeteRouter = () => {
    return `${environment.baseURL}/${environment.userDetailController}`;
  }
  /*
  public getAllPets() {
    return this.httpClient.get<PetDto[]>(this.createCompeteRouter(), this.generateHeaders());
  }
  */
  public getUserDetails() {
    return this.httpClient.get<NewUserDto>(this.createCompeteRouter(), this.generateHeaders());
  }
}

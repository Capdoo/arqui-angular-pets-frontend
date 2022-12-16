import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { TokenService } from '../token.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
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
  public getUserDetails(): Observable<NewUserDto> {
    return this.httpClient.get<NewUserDto>(this.createCompeteRouter(), this.generateHeaders());
  }
}

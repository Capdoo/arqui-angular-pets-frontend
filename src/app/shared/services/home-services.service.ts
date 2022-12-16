import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
import { PetDto } from '../models/pet-dto';
import { Observable } from 'rxjs';

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
  private createCompeteRouter = () => {
    return `${environment.baseURL}/${environment.homeController}`;
  }
  public getAllPets() {
    return this.httpClient.get<PetDto[]>(this.createCompeteRouter(), this.generateHeaders());
  }
}

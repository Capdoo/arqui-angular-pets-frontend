import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {TokenService} from "../token.service";
import {PetDto} from "../../models/pet-dto";

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  constructor(private httpClient: HttpClient, private tokenService: TokenService) {
  }

  public createPet(body: PetDto) {
    return this.httpClient.post<{ mensaje: string }>(this.createCompleteRoute(`${environment.createMethod}`), body, this.generateHeaders());
  }

  public readAll() {
    return this.httpClient.get<PetDto[]>(this.createCompleteRoute(`${environment.readMethod}`), this.generateHeaders());
  }

  public readAllByUser() {
    return this.httpClient.get<PetDto[]>(this.createCompleteRoute(`${environment.readUserMethod}`), this.generateHeaders());
  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.tokenService.getToken()
      })
    };
  }

  private createCompleteRoute = (route: string) => {
    return `${environment.baseURL}/${environment.petsController}/${route}`;
  }
}

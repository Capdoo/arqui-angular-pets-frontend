import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {TokenService} from "../general/token.service";
import {PetDto} from "../../models/pet-dto";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  constructor(private httpClient: HttpClient, private tokenService: TokenService) {
  }

  public createPet(body: PetDto) {
    body.birthDate = new DatePipe('en-US').transform(body.birthDate, 'dd/MM/yyyy');
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

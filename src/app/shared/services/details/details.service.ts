import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {TokenService} from "../token.service";
import {SpecieDTO} from "../../models/specieDTO";
import {BreedDTO} from "../../models/breedDTO";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) {
  }

  public getDetailsAll() {
    // return this.httpClient.get<BreedxSpecieDTO[]>(this.createCompleteRoute(""), this.generateHeaders());
    return [
      {id: 1, species: "GATO", breed: "SIAMES"},
      {id: 2, species: "GATO", breed: "PERSA"},
      {id: 3, species: "GATO", breed: "COREANO"},
      {id: 4, species: "PERRO", breed: "DOBERMAN"},
      {id: 5, species: "PERRO", breed: "PASTOR ALEMAN"},
      {id: 6, species: "PERRO", breed: "LABRADOR"}]
  }

  public getDetailsSpecies() {
    return this.httpClient.get<SpecieDTO[]>(this.createCompleteRoute(""), this.generateHeaders());
  }

  public getDetailsBreedBySpecies() {
    return this.httpClient.get<BreedDTO[]>(this.createCompleteRoute(""), this.generateHeaders());
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
    return `${environment.productoURL}/${environment.detailsController}/${environment.readMethod}/${route}`;
  }
}

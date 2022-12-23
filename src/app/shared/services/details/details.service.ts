import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {TokenService} from "../token.service";
import {SpecieDTO} from "../../models/specieDTO";
import {BreedDTO} from "../../models/breedDTO";
import {BreedxSpecieDTO} from "../../models/breedxSpecieDTO";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) {
  }

  public getDetailsAll() {
    return this.httpClient.get<BreedxSpecieDTO[]>(this.createCompleteRoute(""), this.generateHeaders());
  }

  public getDetailsSpecies() {
    return this.httpClient.get<SpecieDTO[]>(this.createCompleteRoute("species"), this.generateHeaders());
  }

  public getDetailsBreedBySpecies(species: string) {
    return this.httpClient.get<BreedDTO[]>(this.createCompleteRoute("breed?species=" + species), this.generateHeaders());
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
    return `${environment.baseURL}/${environment.detailsController}/${environment.readMethod}/${route}`;
  }
}

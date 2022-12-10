import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DetailsService} from "../../../shared/services/details/details.service";
import {BreedxSpecieDTO} from "../../../shared/models/breedxSpecieDTO";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  comboBreedxSpecie: BreedxSpecieDTO[];
  ImgenPerfil: String;
  Name: String;
  Username:String;

  constructor(private router: Router, private detailService: DetailsService) {

  }

  ngOnInit(): void {
    this.ImgenPerfil = '../../../../assets/fotoPerfil.jpg';
    this.Name = 'María L.';
    this.Username="@"+"marial";
  }

  onSubmit() {
    this.router.navigate(['/home/register-pet']).then();
  }

  verMascotas() {
    this.router.navigate(['/home/pets']).then();
  }

  verPerdidos() {
    this.router.navigate(['/home/lost-pets']).then();
  }

  perdido() {
    this.router.navigate(['/home/register-lost']).then();
  }
}

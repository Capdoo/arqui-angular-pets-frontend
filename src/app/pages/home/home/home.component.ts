import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DetailsService} from "../../../shared/services/details/details.service";
import {BreedxSpecieDTO} from "../../../shared/models/breedxSpecieDTO";
import {HomeServicesService} from "../../../shared/services/home-services.service";
import {PetDto} from "../../../shared/models/pet-dto";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comboPet: PetDto[];
  comboBreedxSpecie: BreedxSpecieDTO[];
  ImgenPerfil: String;
  Name: String;
  Username:String;

  constructor(private router: Router, private detailService: DetailsService, private homeServicesService: HomeServicesService) {
    /*this.homeServicesService.getAllPets().subscribe(data => {
      this.comboPet=data;
    });*/


  }

  ngOnInit(): void {
    this.ImgenPerfil = '../../../../assets/fotoPerfil.jpg';
    this.Name = 'María L.';
    this.Username="@"+"marial";
    //console.log(this.comboPet);
    this.homeServicesService.getAllPets().subscribe(data => {
      //console.log(data);
      this.comboPet = data;
    });
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

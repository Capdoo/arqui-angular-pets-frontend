import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DetailsService} from "../../../shared/services/details/details.service";
import {BreedxSpecieDTO} from "../../../shared/models/breedxSpecieDTO";
import {HomeServicesService} from "../../../shared/services/general/home-services.service";
import {PetDto} from "../../../shared/models/pet-dto";
import {UserDetailsGuard} from "../../../shared/services/userDetails/user-details.guard";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comboPet: PetDto[];
  comboBreedxSpecie: BreedxSpecieDTO[];
  ImgenPerfilAlt: String;
  ImgenPerfil: String;
  Name: String;
  Username:String;

  //variable que almacena la imagen de perfil del usuario
  imagenPerfil: string;

  //variable que almacena la imagen de perfil del usuario

  constructor(private router: Router, private detailService: DetailsService, private homeServicesService: HomeServicesService, private userDetailsGuard: UserDetailsGuard) {
    /*this.homeServicesService.getAllPets().subscribe(data => {
      this.comboPet=data;
    });*/


  }

  ngOnInit(): void {
    this.ImgenPerfilAlt = '../../../../assets/fotoPerfil.jpg';
    //console.log(this.comboPet);

    this.userDetailsGuard.getUserDetails().subscribe(data => {
      this.Username="@"+data.username;
      this.Name=data.lastName + " " + data.surName;
      this.ImgenPerfil=data.encoded;
      //variable que almacena la respuesta de lafunción función base64ToJpg



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

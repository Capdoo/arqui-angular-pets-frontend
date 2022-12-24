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
  Username: String;
  //variable que almacena la imagen de perfil del usuario
  imagenPerfil: string;

  //variable que almacena la imagen de perfil del usuario

  constructor(private router: Router, private detailService: DetailsService, private homeServicesService: HomeServicesService, private userDetailsGuard: UserDetailsGuard) {
    /*this.homeServicesService.getAllPets().subscribe(data => {
      this.comboPet=data;
    });*/
    sessionStorage.clear();

  }

  ngOnInit(): void {
    this.ImgenPerfilAlt = '../../../../assets/fotoPerfil.jpg';

    this.Name = 'María L.';
    this.Username = "@" + "marial";
    //console.log(this.comboPet);

    this.userDetailsGuard.getUserDetails().subscribe(data => {
      console.log(data);
      this.Username = "@" + data.username;
      this.Name = data.lastName + " " + data.surName;
      this.ImgenPerfil = data.encoded;
      console.log(this.ImgenPerfil);
      //variable que almacena la respuesta de lafunción función base64ToJpg


    });
    this.homeServicesService.getAllPets().subscribe(data => {
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

  base64ToJpeg(base64: string): HTMLImageElement {
    // Creamos un elemento de imagen
    const imgElement = document.createElement('img');

    // Establecemos el atributo src de la imagen como una URL codificada en base64
    imgElement.src = `data:image/jpeg;base64,${base64}`;

    // Devolvemos el elemento de imagen
    return imgElement;
  }

  //convertir imagen de base64 a imagen


}

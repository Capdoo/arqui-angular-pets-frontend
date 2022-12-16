import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DetailsService} from "../../../shared/services/details/details.service";
import {BreedxSpecieDTO} from "../../../shared/models/breedxSpecieDTO";
import {HomeServicesService} from "../../../shared/services/home-services.service";
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

  constructor(private router: Router, private detailService: DetailsService, private homeServicesService: HomeServicesService, private userDetailsGuard: UserDetailsGuard) {
    /*this.homeServicesService.getAllPets().subscribe(data => {
      this.comboPet=data;
    });*/


  }

  ngOnInit(): void {
    this.ImgenPerfilAlt = '../../../../assets/fotoPerfil.jpg';

    this.Name = 'María L.';
    this.Username="@"+"marial";
    //console.log(this.comboPet);

    this.userDetailsGuard.getUserDetails().subscribe(data => {
      console.log(data);
      this.Username="@"+data.username;
      this.Name=data.lastName + " " + data.surName;
      this.ImgenPerfil=data.encoded;
      //this.user= new NewUserDto(data[0].username,data.[0]dni,data[0].firstName,data.lastName,data.surName,data.phone,data.address,data.email,data.password,data.encoded);
      //this.user= new NewUserDto(data[0].username,data.[0]dni,data[0].firstName,data.lastName,data.surName,data.phone,data.address,data.email,data.password,data.encoded);
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

}

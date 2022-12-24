import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PetDto} from "../../../shared/models/pet-dto";
import {PetsService} from "../../../shared/services/pets/pets.service";
import Swal from "sweetalert2";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-lost-pets',
  templateUrl: './lost-pets.component.html',
  styleUrls: ['./lost-pets.component.css']
})
export class LostPetsComponent implements OnInit {

  comboPets: PetDto[] = [];

  constructor(
    private router: Router,
    private petsService: PetsService
  ) {
  }

  async ngOnInit() {
    Swal.fire({
      title: 'Espere por favor',
      didOpen: () => Swal.showLoading(null),
      allowOutsideClick: false
    }).then();
    await lastValueFrom(this.petsService.readAll())
      .then(value => {
        this.comboPets = value;
      }).catch(reason => Swal.fire({
        title: 'Error',
        text: reason.error.message,
        icon: 'error'
      }).then())
      .finally(() => Swal.close());
  }

  open(petDto: PetDto) {
    sessionStorage.setItem('pet', JSON.stringify(petDto));
    this.router.navigate(['/home/read-pet']).then();
  }
}

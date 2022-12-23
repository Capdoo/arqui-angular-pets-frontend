import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PetsService} from "../../../shared/services/pets/pets.service";
import {lastValueFrom} from "rxjs";
import {PetDto} from "../../../shared/models/pet-dto";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  comboPets: PetDto[] = [];

  constructor(
    private router: Router,
    private petsService: PetsService
  ) {
  }

  async ngOnInit() {
    await lastValueFrom(this.petsService.readAllByUser())
      .then(value => {
        this.comboPets = value;
      });
  }

  open(petDto: PetDto) {
    this.router.navigate(['/home/read-pet']);
  }


}

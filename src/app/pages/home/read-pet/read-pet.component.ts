import {Component} from '@angular/core';
import {PetDto} from "../../../shared/models/pet-dto";

@Component({
  selector: 'app-read-pet',
  templateUrl: './read-pet.component.html',
  styleUrls: ['./read-pet.component.css']
})
export class ReadPetComponent {

  petDto: PetDto;

  constructor() {
    this.petDto = JSON.parse(sessionStorage.getItem('pet'));
  }
}

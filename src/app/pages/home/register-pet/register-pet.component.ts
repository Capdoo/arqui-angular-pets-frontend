import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BreedxSpecieDTO} from "../../../shared/models/breedxSpecieDTO";
import {DetailsService} from "../../../shared/services/details/details.service";

@Component({
  selector: 'app-register-pet',
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.css']
})
export class RegisterPetComponent {

  // Combos
  comboBreedxSpecie: BreedxSpecieDTO[]

  // FormControls
  name = new FormControl('', [Validators.required]);
  gender = new FormControl('', [Validators.required]);
  birthDate = new FormControl('', [Validators.required]);
  colour = new FormControl('', [Validators.required]);
  characteristic = new FormControl('', [Validators.required]);
  size = new FormControl('', [Validators.required]);
  species = new FormControl('', [Validators.required]);
  breed = new FormControl('', [Validators.required]);
  encoded = new FormControl('assets/img-default.jpg', [Validators.required]);
  formGroup = new FormGroup({
    idOwner: new FormControl(''),
    name: this.name,
    gender: this.gender,
    birthDate: this.birthDate,
    colour: this.colour,
    characteristic: this.characteristic,
    size: this.size,
    species: this.species,
    breed: this.breed,
    encoded: this.encoded
  });
  private srcResult: any;

  constructor(detailService: DetailsService) {
    // detailService.getDetailsAll().subscribe(value => console.log(value));
    this.comboBreedxSpecie = detailService.getDetailsAll();
  }


  getErrorMessage(formControl: FormControl) {
    if (formControl.hasError('required')) {
      return 'Este campo es requerido';
    }
    return '';
  }

  onFileSelected(event: any) {
    let files = event.target.files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        console.log(e.target.result);
        this.formGroup.controls['encoded'].setValue(e.target.result);
      };
      reader.readAsDataURL(files[0]);
    }
  }

  registerPet() {

  }
}

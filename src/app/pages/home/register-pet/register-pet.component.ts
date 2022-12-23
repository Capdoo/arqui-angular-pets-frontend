import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DetailsService} from "../../../shared/services/details/details.service";
import Swal from "sweetalert2";
import {SpecieDTO} from "../../../shared/models/specieDTO";
import {BreedDTO} from "../../../shared/models/breedDTO";
import {lastValueFrom} from "rxjs";
import {PetsService} from "../../../shared/services/pets/pets.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-pet',
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.css']
})
export class RegisterPetComponent {

  // Variables
  encodedValue = 'assets/img-default.jpg';

  // Combos
  comboBreed: BreedDTO[] = [];
  comboSpecie: SpecieDTO[] = [];

  // FormControls
  name = new FormControl('', [Validators.required]);
  gender = new FormControl('', [Validators.required]);
  birthDate = new FormControl('', [Validators.required]);
  colour = new FormControl('', [Validators.required]);
  characteristic = new FormControl('', [Validators.required]);
  size = new FormControl('', [Validators.required]);
  species = new FormControl('', [Validators.required]);
  breed = new FormControl({value: '', disabled: true}, [Validators.required]);
  encoded = new FormControl(this.encodedValue, [Validators.required]);
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

  constructor(
    private detailService: DetailsService,
    private petsService: PetsService,
    private router: Router
  ) {
    Swal.fire({
      title: 'Espere por favor',
      didOpen: () => Swal.showLoading(null)
    }).then();
    detailService.getDetailsSpecies().subscribe(value => {
      this.comboSpecie = value;
      Swal.close();
    });

  }

  onFileSelected(event: any) {
    let files = event.target.files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.encodedValue = e.target.result;
        this.encoded.setValue(e.target.result.replace(/^data:image\/[a-z]+;base64,/, ''));
      };
      reader.readAsDataURL(files[0]);
    }
  }

  async registerPet() {
    if (this.formGroup.invalid || this.encoded.value === this.encodedValue) {
      Swal.fire({
        icon: 'error',
        title: 'Error al registrar la mascota',
        text: 'Complete todos los campos y seleccione una imagen'
      }).then();
      return;
    }
    Swal.fire({title: 'Espere por favor', didOpen: () => Swal.showLoading(null), allowOutsideClick: false}).then();
    await lastValueFrom(this.petsService.createPet(this.formGroup.value))
      .then(async value => {
        if (value.mensaje != 'Pet registered successfully') {
          await Swal.fire({icon: 'error', title: 'Error al registrar la mascota', text: value.mensaje}).then();
          return;
        }
        await Swal.fire({
          icon: 'success',
          title: 'Mascota registrada',
          text: 'Se ha registrado la mascota correctamente'
        }).then(() => this.router.navigate(['/home']));
      }).catch(e => Swal.fire({icon: 'error', title: 'Error al registrar la mascota', text: e.error.message}))
      .finally(() => Swal.close());
  }

  async selectBreed() {
    Swal.fire({
      title: 'Espere por favor',
      didOpen: () => Swal.showLoading(null)
    }).then();
    await lastValueFrom(this.detailService.getDetailsBreedBySpecies(this.formGroup.controls['species'].value))
      .then(value => {
        this.breed.enable();
        this.comboBreed = value;
      })
      .catch(e => Swal.fire({icon: 'error', title: 'Error al cargar las razas', text: e.error.message}))
      .finally(() => Swal.close());
  }

  messageRaza() {
    if (this.species.value === '') {
      Swal.fire({
        icon: 'error',
        title: 'Error al cargar las razas',
        text: 'Seleccione una especie para continuar'
      }).then();
    }
  }
}

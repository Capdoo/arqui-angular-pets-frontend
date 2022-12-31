import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DetailsService} from "../../../shared/services/details/details.service";
import {HomeServicesService} from "../../../shared/services/general/home-services.service";
import {UserDetailsGuard} from "../../../shared/services/userDetails/user-details.guard";
import Swal from "sweetalert2";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imagenPerfil = "assets/account-default.png";
  Name: string;
  Username: string;

  constructor(private router: Router, private detailService: DetailsService, private homeServicesService: HomeServicesService, private userDetailsGuard: UserDetailsGuard) {
  }

  async ngOnInit() {
    Swal.fire({
      title: 'Espere por favor',
      didOpen: () => Swal.showLoading(null),
      allowOutsideClick: false
    }).then();
    await lastValueFrom(this.userDetailsGuard.getUserDetails())
      .then(data => {
        Swal.close();
        this.Username = "@" + data.username;
        this.Name = data.firstName + " " + data.lastName;
        // this.Name = data.lastName + " " + data.surName;
        this.imagenPerfil = "data:image/png;base64," + data.encoded;
      }).catch(reason => Swal.fire({
        title: 'Error', text: reason.error.message, icon: 'error'
      }).finally(() => Swal.close()));
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
}

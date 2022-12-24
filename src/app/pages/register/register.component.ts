import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NewUserDto} from "../../shared/models/new-user-dto";
import {TokenService} from "../../shared/services/general/token.service";
import {AuthService} from "../../shared/services/general/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  dni: string;
  firstName: string;
  lastName: string;
  surName: string;
  phone: string;
  address: string;
  email: string;
  password: string;
  encoded: string;

  errMsj: string;
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onRegister(): void{

    const newUser = new NewUserDto(
      this.username,
      this.dni,
      this.firstName,
      this.lastName,
      this.surName,
      this.phone,
      this.address,
      this.email,
      this.password,
      this.encoded);

    this.authService.nuevo(newUser).subscribe(
      data => {
        this.toastr.success('Cuenta creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/login']);
      },
      err => {
        this.errMsj = err.error.mensaje;
        this.toastr.error(err.error.mensaje, 'FAIL', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    )
  }
 onFileSelected(event: any) {
    let files = event.target.files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.encoded= e.target.result;
      };
      reader.readAsDataURL(files[0]);
    }
  }

}

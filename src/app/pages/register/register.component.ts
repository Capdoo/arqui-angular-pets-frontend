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

  newUser: NewUserDto;

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
    this.encoded = "textbase65";
  }

  onRegister(): void{
    this.newUser = new NewUserDto(
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
    this.authService.nuevo(this.newUser).subscribe(
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

}

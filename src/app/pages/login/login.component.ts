import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {LoginUserDto} from "../../shared/models/login-user-dto";
import {TokenService} from "../../shared/services/general/token.service";
import {AuthService} from "../../shared/services/general/auth.service";
import Swal from "sweetalert2";
import {lastValueFrom} from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUsuario: LoginUserDto;
  nombreUsuario: string;
  password: string;
  errMsj: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  async onLogin() {
    this.loginUsuario = new LoginUserDto(this.nombreUsuario, this.password);
    Swal.fire({
      title: 'Espere por favor',
      didOpen: () => Swal.showLoading(null),
      allowOutsideClick: false
    }).then();
    await lastValueFrom(this.authService.login(this.loginUsuario))
      .then(value => {
        this.tokenService.setToken(value.token);
        window.location.reload();
      }).catch(reason => {
        this.errMsj = reason.error.mensaje;
        this.toastr.error(reason.error.mensaje, 'FAIL', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }).finally(() => Swal.close());
  }
}

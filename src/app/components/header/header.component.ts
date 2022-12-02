import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../shared/services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged = false;
  isAdmin = false;

  constructor(private tokenService: TokenService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
  }

  onLogOut(): void {
    this.tokenService.logOut();
  }

  redireccionar() {
    this.isLogged ? this.router.navigate(['/home']) : this.router.navigate(['/index']);
  }
}

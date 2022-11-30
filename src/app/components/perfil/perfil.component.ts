import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  ImgenPerfil: String;
  Name: String;
  Username:String;
  constructor() { }

  ngOnInit(): void {
    this.ImgenPerfil = '../../../assets/fotoPerfil.jpg';
    this.Name = 'María L.';
    this.Username="@"+"marial";
  }

}

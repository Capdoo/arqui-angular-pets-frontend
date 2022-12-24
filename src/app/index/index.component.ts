import {Component, OnInit} from '@angular/core';
import {TokenService} from '../shared/services/general/token.service';

//importar imagen

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  ImagePath: string;
  username: string;

  constructor(private tokenService: TokenService) { }
  ngOnInit(): void {
    this.username = this.tokenService.getUserName();
    this.ImagePath= '../../assets/image15.png';
  }

}

import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lost-pets',
  templateUrl: './lost-pets.component.html',
  styleUrls: ['./lost-pets.component.css']
})
export class LostPetsComponent implements OnInit {

  items: [{ name: "franco" }, { name: "franco" }, { name: "franco" }, { name: "franco" }, { name: "franco" }, { name: "franco" }, { name: "franco" }];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  open(num: number) {
    this.router.navigate(['/home/read-pet']);
  }
}

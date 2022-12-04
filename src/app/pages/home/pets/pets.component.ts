import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  items: [{ name: "franco" }, { name: "franco" }, { name: "franco" }, { name: "franco" }, { name: "franco" }, { name: "franco" }, { name: "franco" }];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  open(num: number) {
    this.router.navigate(['/home/read-pet']);
  }


}

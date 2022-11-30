import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-pet',
  templateUrl: './read-pet.component.html',
  styleUrls: ['./read-pet.component.css']
})
export class ReadPetComponent implements OnInit {
  items: [{name:"franco"},{name:"franco"},{name:"franco"},{name:"franco"},{name:"franco"},{name:"franco"},{name:"franco"}];

  constructor() { }

  ngOnInit(): void {
  }

  open(num: number) {
    console.log(num)
  }
}

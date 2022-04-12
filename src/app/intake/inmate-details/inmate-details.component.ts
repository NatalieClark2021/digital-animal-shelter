import { Component, OnInit } from '@angular/core';
import { DOGS } from '../intake.service';

@Component({
  selector: 'app-inmate-details',
  templateUrl: './inmate-details.component.html',
  styleUrls: ['./inmate-details.component.css']
})
export class InmateDetailsComponent implements OnInit {
dogs2 = DOGS;
  constructor() { }



  ngOnInit(): void {
  }

}

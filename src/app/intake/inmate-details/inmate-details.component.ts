import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IntakeComponent } from '../intake.component';
import { DOGS } from '../intake.service';

@Component({
  selector: 'app-inmate-details',
  templateUrl: './inmate-details.component.html',
  styleUrls: ['./inmate-details.component.css']
})
export class InmateDetailsComponent implements OnInit {
dogs = DOGS;
indx: number;

  constructor(
    private router: ActivatedRoute

    ) { }



  ngOnInit(): void {

  }

}

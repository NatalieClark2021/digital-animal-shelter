import { Component, OnInit, Input } from '@angular/core';
import { DOGS } from './intake.service'

@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.css']
})
export class IntakeComponent implements OnInit {
  dogs = DOGS;

  constructor() { }

  ngOnInit(): void {

  }

}

import { Component, OnInit} from '@angular/core';
import { DOGS } from '../intake.service'

@Component({
  selector: 'app-list',
  templateUrl: './inmates-list.component.html',
  styleUrls: ['./inmates-list.component.css']
})
export class InmateComponent implements OnInit {
  dogs = DOGS;

  constructor() { }

  ngOnInit(): void {

  }

}

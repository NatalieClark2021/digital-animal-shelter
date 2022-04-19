import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.css']
})
export class IntakeComponent implements OnInit {


  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {

  }
  addInmate(){

  }
}

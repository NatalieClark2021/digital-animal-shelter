import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Dog } from '../intake.module';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent implements OnInit {
  formSubmitted = false
  dogDetails = {
    name: "",
    desc: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(formObj: NgForm){
    this.formSubmitted = true;

    this.dogDetails.name = formObj.value.name;
    this.dogDetails.desc = formObj.value.desc;

    formObj.reset();
  }
}

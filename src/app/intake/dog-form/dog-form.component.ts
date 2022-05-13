import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { Dog } from '../intake.module';
import { IntakeService } from '../intake.service';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css'],
})
export class DogFormComponent implements OnInit {
  idx: number;
  dog: Dog = new Dog('',0,'','');
  isEditMode = false;
  dogDetails = {
    name: '',
    desc: '',
  };

  nameControl = new FormControl('');
  descControl = new FormControl('');

  constructor(
    private intakeService: IntakeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      if(!isNaN(this.idx)) {
      this.dog = this.intakeService.getDog(this.idx);
      this.isEditMode = true;
      this.nameControl.setValue(this.dog?.name);
      this.descControl.setValue(this.dog?.desc);
      }
    });
  }

  onFormSubmit(formObj: NgForm) {
    // this.dogDetails.name = formObj.value.name;
    // this.dogDetails.desc = formObj.value.desc;
    var newDog = new Dog(
      this.nameControl.value,
      this.dog?.id,
      this.descControl.value,
      this.dog?.imagePath
      );
    if (this.isEditMode == true) {
    // formObj.reset();
    this.intakeService.editDog(newDog)
    }
    else {

      this.intakeService.newDog(newDog);
    }
  }
}

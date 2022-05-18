import { HttpClient } from '@angular/common/http';
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
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
      this.isEditMode = false;
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
    let newDog = new Dog(
      this.nameControl.value,
      this.dog?.id,
      this.descControl.value,
      this.dog?.imagePath
      );
    if (!!this.dog.id) {
    // formObj.reset();
    this.intakeService.editDog(newDog)

    }
    else {

      this.intakeService.newDog(newDog);
    }
  }

  onDiceClick(){
  // this.dog.imagePath = this.http.get('https:api.thedogapi.com/v1/images/{image_id}')
  // .subscribe((randomResponse)=>
  // console.log('randomResponse', randomResponse))
  //  console.log(this.dog.imagePath);
  //  console.log(this.http.get('https:api.thedogapi.com/v1/images/{image_id}'));
  var arry = [
    'xbI13teuJ',
    '4UKTN_dQ5',
    'HkAVQl9VX',
    '3PxLoudtK',
    '0yxSqpNj4',
    '2E-WqpLr5'

  ]
  var index = Math.floor(Math.random() * arry.length)
  this.intakeService.getDogInfo(arry[index]).subscribe( img => {
    console.log(img.url)
    this.dog.imagePath = img.url;
    })


  }

}

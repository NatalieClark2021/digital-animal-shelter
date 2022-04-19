import { Component, OnInit } from '@angular/core';
import { Dog } from '../intake.module';
import { ActivatedRoute, Params, Router} from '@angular/router';
// import { IntakeComponent } from '../intake.component';

import { IntakeService } from '../intake.service';
// import { DOGS } from '../intake.service';

@Component({
  selector: 'app-inmate-details',
  templateUrl: './inmate-details.component.html',
  styleUrls: ['./inmate-details.component.css']
})
export class InmateDetailsComponent implements OnInit {
  idx : number;
  dog : Dog;

constructor(
  private intakeService: IntakeService,
  private router: Router,
  private route: ActivatedRoute
) {}

    // this.dog = this.dogs[this.idx - 1]




    ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
        this.idx = +params['id'];
        this.dog = this.intakeService.getDog(this.idx-1);
      });
    }
}

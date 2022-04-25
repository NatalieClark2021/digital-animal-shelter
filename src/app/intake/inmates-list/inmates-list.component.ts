import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '../intake.module';
import { IntakeService } from '../intake.service';


@Component({
  selector: 'app-list',
  templateUrl: './inmates-list.component.html',
  styleUrls: ['./inmates-list.component.css']
})
export class InmateComponent implements OnInit {
  DOGS : Dog[] = []

  constructor(
    private intakeService: IntakeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.DOGS = this.intakeService.getDogs();

    this.intakeService.dogsChanged.subscribe(DOGS => {
      this.DOGS = DOGS
    });
  }

}

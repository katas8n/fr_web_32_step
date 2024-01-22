import { Component } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent {  
  public isFiltered:boolean;

  constructor(
    public peopleService:PeopleService
  ) {
    this.isFiltered = peopleService.isFiltered;
    console.log(this.isFiltered)
  }

  public getPeople():any[] {
    return this.peopleService.getPeople();
  }

  public onChangeHandler(value) {
    this.peopleService.onChangeHandler(value.value);
    this.isFiltered = this.peopleService.isFiltered;
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  constructor(
    public routes:ActivatedRoute,
    public peopleService:PeopleService
  ) {

  }

  public onSubmitHandler(form) {
    this.peopleService.addNewPerson(form.value)
  }
}

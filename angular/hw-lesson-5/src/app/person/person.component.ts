import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people.service'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  person = null;

  constructor(
    private route:ActivatedRoute,
    public peopleService:PeopleService
  ){
    this.route.params.subscribe(param => {
      console.log(param)
      const personId = +param['id'];

      this.person = peopleService.getPersonById(personId);
     
      return this.person;
    })
  }
}

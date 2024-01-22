import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  public isFiltered:boolean = false;

  private people:any[] = [
    {
      id: 0,
      name: "John Doe"
    },
    {
      id: 1,
      name: "Mike Bibby"
    },
    {
      id: 2,
      name: "Jim Root"
    }
  ];

  public toTranslate = [...this.people];
  constructor() { }

  public getPeople():any[] {

    return [...this.people];
  }

  public addNewPerson(newPerson):void {
    this.people.push({
      id: this.people.length,
      name : newPerson.name
    })
  }

  public getPersonById(id: number) {
    return this.people.find(person => person.id === id);
  }

  public onChangeHandler(value) {
    switch(value) {
      case "biggerThan3":
        this.toTranslate = this.people.filter(person => person.name.length > 3);
        console.log(this.people)
        this.isFiltered = true;
        break;
        case "biggerThan4":
          this.toTranslate = this.people.filter(person => person.name.length > 4);
          console.log(this.people)
          this.isFiltered = true;
        break;
      case "biggerThan5":
        this.toTranslate = this.people.filter(person => person.name.length > 5);
        console.log(this.people)
        this.isFiltered = true;
        break;
      case "reset":
        this.toTranslate = [...this.people];
        this.isFiltered = false;
        break;
    }
  
  }
}

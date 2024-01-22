import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AdminComponent } from './admin/admin.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent
  },
  {
    path: "people",
    component: PeopleComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "people/:id",
    component: PersonComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {
    component: QuizzesComponent,
    path: "quizzes"
  },
  {
    component: QuizzesComponent,
    path: "quizzes/front-end"
  },
  {
    component: QuizzesComponent,
    path: "quizzes/back-end"
  },
  {
    component: QuizzesComponent,
    path: "quizzes/qa"
  },
  {
    component: ResourcesComponent,
    path: "resources"
  },
  {
    component: ProfileComponent,
    path: "profile"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

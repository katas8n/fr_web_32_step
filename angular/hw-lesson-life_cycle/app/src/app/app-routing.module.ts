import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { SecondChildComponent } from './second-child/second-child.component';

const routes: Routes = [
  {
    path: 'kek',
    component: ChildComponent
  },
  {
    path: 'lolo',
    component: SecondChildComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

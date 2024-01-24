import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgersComponent } from './burgers/burgers.component';
import { CommonComponent } from './common/common.component';
import { PizzaComponent } from './pizza/pizza.component';
import { TacoComponent } from './taco/taco.component';

const routes: Routes = [
  {
    path: "",
    component: CommonComponent
  },
  {
    path: "burgers",
    component: BurgersComponent
  },
  {
    path: "pizza",
    component: PizzaComponent
  },
  {
    path: "tacos",
    component: TacoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

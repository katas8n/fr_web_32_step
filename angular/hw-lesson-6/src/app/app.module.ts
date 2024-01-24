import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BurgersComponent } from './burgers/burgers.component';
import { TacoComponent } from './taco/taco.component';
import { CommonComponent } from './common/common.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    BurgersComponent,
    TacoComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

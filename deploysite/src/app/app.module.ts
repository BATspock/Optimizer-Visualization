import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolynomialComponent } from './polynomial/polynomial.component';
import { ExponentialComponent } from './exponential/exponential.component';

@NgModule({
  declarations: [
    AppComponent,
    PolynomialComponent,
    ExponentialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

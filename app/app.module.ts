import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './Components/Root/app.component';

import { routing, appRoutingProviders } from './Router/app.routing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ValidationService} from './Services/Validation/validation.service';

@NgModule({
  imports: [ BrowserModule,ReactiveFormsModule, routing],
  declarations: [ AppComponent ],
  providers: [appRoutingProviders,ValidationService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

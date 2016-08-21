import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './Components/Root/app.component';

import { routing, appRoutingProviders } from './Router/app.routing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ BrowserModule,ReactiveFormsModule, routing],
  declarations: [ AppComponent ],
  providers: [appRoutingProviders],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

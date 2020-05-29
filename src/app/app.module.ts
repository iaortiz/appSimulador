import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimuladorSJFComponent } from './simulador-sjf/simulador-sjf.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { LabelModule } from '@progress/kendo-angular-label';

import 'hammerjs';


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule } from 'devextreme-angular';
@NgModule({
  declarations: [
    AppComponent,
    SimuladorSJFComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, ChartsModule, LabelModule,
    DxChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

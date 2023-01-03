import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountersComponent } from './counters/counters.component';
import { CounterComponent } from './counters/counter/counter.component';
import { HeaderComponent } from './shared/header/header.component';
import { BlotComponent } from './blot/blot.component';
import { BlotColumnComponent } from './blot/blot-column/blot-column.component';
import { CalculatorComponent } from './blot/calculator/calculator.component';
import { CardTypeComponent } from './blot/card-type/card-type.component';

@NgModule({
  declarations: [
    AppComponent,
    CountersComponent,
    CounterComponent,
    HeaderComponent,
    BlotComponent,
    BlotColumnComponent,
    CalculatorComponent,
    CardTypeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

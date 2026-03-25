import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CounterValue } from './components/counter-value/counter-value';
import { CounterButton } from './components/counter-button/counter-button';
import { CounterBase } from './components/counter-base/counter-base';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './components/store/counter.reducer';

@NgModule({
  declarations: [
    App,
    CounterValue,
    CounterButton,
    CounterBase
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter: counterReducer})
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

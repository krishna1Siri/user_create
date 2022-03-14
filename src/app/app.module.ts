import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ViewFeederAvailabilityComponent } from './view-feeder-availability/view-feeder-availability.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ViewFeederAvailabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

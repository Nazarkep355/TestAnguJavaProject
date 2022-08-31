import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CruisePageComponent } from './cruise-page/cruise-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CruisePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

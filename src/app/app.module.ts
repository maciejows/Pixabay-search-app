import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Importrant for "NgModel" - 2 sides binding*/
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';

/* Obligatory for API requests */
import { HttpClientModule } from '@angular/common/http';

/* Angular Material imports */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatButtonModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

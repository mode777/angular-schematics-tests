import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FuComponent } from './fu/fu.component';
import { KateComponent } from './kate/kate.component';
import { FdComponent } from './fd/fd.component';
import { FdsaComponent } from './fdsa/fdsa.component';

@NgModule({
  declarations: [
    AppComponent,
    FuComponent,
    KateComponent,
    FdComponent,
    FdsaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

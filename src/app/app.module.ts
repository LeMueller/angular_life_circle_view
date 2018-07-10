import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { RedBorderComponent } from './red-border/red-border.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    RedBorderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { RedBorderComponent } from './red-border/red-border.component';
import { Child2Component } from './child2/child2.component';

let routeConfig: Routes = [
  {path: '', component: ChildComponent},
  {path: 'child2', component: Child2Component},
];

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    RedBorderComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

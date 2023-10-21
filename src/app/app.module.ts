import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../common/material.module";
import {AppService} from "./components/app.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatMomentDateModule,
    RouterModule.forRoot(
      [
        {path: '', loadChildren: () => import('./components/main.module').then(m => m.MainModule)}
      ],
      {enableTracing: false} // <-- debugging purposes only
    )
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

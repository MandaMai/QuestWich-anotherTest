import { BrowserModule } from '../../node_modules/@angular/platform-browser';
import { NgModule } from '../../node_modules/@angular/core';

import { HttpModule } from '../../node_modules/@angular/http';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';

import { AppComponent } from './app.component';
import { CommonService } from './common.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

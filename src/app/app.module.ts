import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MdButtonModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

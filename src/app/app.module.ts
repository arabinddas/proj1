import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {TheFormsModule} from './form1/theForms.module';
import {Http1Component} from './http1/http1.component';
import {DepModule} from './dep1/DepModule';
import {SearchModule} from './youtube/search.module';
import {DataModule} from './data1/data.module';
import {NativeEncapsulationComponent} from './nativeEncapsulation.component';
import {DirModule} from './dir/dir.module';

@NgModule({
  declarations: [
    AppComponent,
    Http1Component,
    NativeEncapsulationComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        TheFormsModule,
        DepModule,
        SearchModule,
        DataModule,
        DirModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

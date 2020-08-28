import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SkuFormComponent} from './skuForm.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {LoginFormComponent} from './loginForm.component';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  declarations: [SkuFormComponent, LoginFormComponent],
  exports: [SkuFormComponent, LoginFormComponent]
})
export class TheFormsModule {
}

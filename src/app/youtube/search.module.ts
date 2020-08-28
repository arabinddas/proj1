import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {YOUTUBE_API_URL, YOUTUBE_API_KEY} from './youtube.helper';

@NgModule({
  imports: [BrowserModule, CommonModule, HttpModule],
  providers: [{provide: 'YOUTUBE_API_URL', useValue: YOUTUBE_API_URL},
    {provide: 'YOUTUBE_API_KEY', useValue: YOUTUBE_API_KEY}],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class SearchModule {
}

import {Component, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import {SearchResultModel} from './searchResult.model';

@Component({
  selector: 'app-yt-search',
  templateUrl: 'search.component.html'
})
export class SearchComponent {
  constructor(private http: Http,
              @Inject('YOUTUBE_API_URL') private url: string,
              @Inject('YOUTUBE_API_KEY') private key: string) {
  }
  searchSubmit(query) {
    const params: string = [
      `q=${query}`,
      `key=${this.key}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    const urlGet = `${this.url}?${params}`;
    console.log(urlGet);
    if (1) {
      return;
    }
    this.http.get(urlGet).subscribe((response: Response) => {
      (<any> response.json()).items.map((item) => {
        const sr = new SearchResultModel();
        sr.title = item.snippet.title;
        sr.description = item.snippet.description;
        sr.videoId = item.id.videoId;
        sr.channelTitle = item.channelTitle;
        sr.publishTime = item.channelTitle;
        // tslint:disable-next-line:forin
        for (const key in item.snippet.thumbnails) {
          sr.thumbnails.set(key, item.snippet.thumbnails[key].url);
        }
      });
    });
  }
}

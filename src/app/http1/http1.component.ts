import {Http, Response} from '@angular/http';
import {Component} from '@angular/core';

@Component({
  selector: 'app-http-test1',
  templateUrl: 'http1.component.html'
})
export class Http1Component {
  loading: boolean;
  data: string;
  constructor(public http: Http) {
    this.loading = false;
  }
  makeRequest() {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }
}

import { Injectable } from '../../node_modules/@angular/core';
import { Http, Response, Headers, RequestOptions } from '../../node_modules/@angular/http';

import { Observable } from '../../node_modules/rxjs/Observable';
import '../../node_modules/rxjs/add/operator/map';
import '../../node_modules/rxjs/add/operator/do';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }

  saveUser(user) {
    return this.http.post('http://localhost:4242/api/SaveUser/', user)
      .map((response: Response) => response.json());
  }

  GetUser() {
    return this.http.get('http://localhost:4242/api/getUser/')
      .map((response: Response) => response.json());
  }

  deleteUser(id) {
    return this.http.post('http://localhost:4242/api/deleteUser/', {'id': id})
      .map((response: Response) => response.json());
  }

}
